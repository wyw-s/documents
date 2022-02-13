"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagesGroupSort = exports.specifiedPagesSort = exports.pagesSort = exports.readmeFirstSort = void 0;
const colors = require("colors/safe");
const findSpecifiedPageIndex = (defaultPagesGroupByMenuPath, page) => {
    const pageGroup = defaultPagesGroupByMenuPath[page.menuPath];
    if (!pageGroup)
        return -1;
    const { autoPrev, autoNext } = page.frontmatter;
    if (autoPrev) {
        return pageGroup.findIndex(page => page.filename === autoPrev);
    }
    else if (autoNext) {
        return pageGroup.findIndex(page => page.filename === autoNext);
    }
    else {
        return -1;
    }
};
const builtInSortRules = {
    asc: (pageA, pageB) => pageA.filename > pageB.filename ? 1 : -1,
    desc: (pageA, pageB) => pageA.filename > pageB.filename ? -1 : 1,
    created_time_asc: (pageA, pageB) => pageA.createdTime > pageB.createdTime ? 1 : -1,
    created_time_desc: (pageA, pageB) => pageA.createdTime > pageB.createdTime ? -1 : 1
};
const readmeFirstSort = (pages) => {
    const index = pages.findIndex(page => page.filename.toUpperCase() === 'README');
    if (index !== -1) {
        const README = pages.splice(index, 1);
        pages.unshift(...README);
    }
};
exports.readmeFirstSort = readmeFirstSort;
const sortByAutoSort = (pages) => pages.sort((pageA, pageB) => {
    const pageASort = Number(pageA.frontmatter.autoSort) || 0;
    const pageBSort = Number(pageB.frontmatter.autoSort) || 0;
    return pageBSort - pageASort;
});
const pagesSort = (pagesGroup, sortOptions) => Object.values(pagesGroup)
    .forEach(pages => {
    const { mode, fn } = sortOptions;
    if (mode === 'custom') {
        if (!fn) {
            throw Error('未传递自定义排序函数！');
        }
        pages.sort(fn);
        if (sortOptions.readmeFirst) {
            exports.readmeFirstSort(pages);
        }
        return;
    }
    if (!mode) {
        pages.sort(builtInSortRules.asc);
    }
    else {
        if (sortOptions.mode === 'created_time_asc' || sortOptions.mode === 'created_time_desc') {
            const untracked = pages.filter(page => !page.createdTime);
            untracked.forEach(un => {
                console.log(colors.red(`${un.menuPath}${un.filename} 未被 git 跟踪，无法参与有效排序`));
            });
        }
        pages.sort(builtInSortRules[mode] || builtInSortRules.asc);
    }
    if (sortOptions.readmeFirst) {
        exports.readmeFirstSort(pages);
    }
    sortByAutoSort(pages);
    if (sortOptions.readmeFirstForce) {
        exports.readmeFirstSort(pages);
    }
});
exports.pagesSort = pagesSort;
const specifiedPagesSort = (defaultPagesGroupByMenuPath, specifiedSortPages) => {
    function insertPage(page, targetIndex) {
        const index = page.frontmatter.autoPrev ? targetIndex + 1 : targetIndex;
        defaultPagesGroupByMenuPath[page.menuPath].splice(index, 0, page);
    }
    let sortQueueCache = [];
    while (specifiedSortPages.length) {
        let targetIndex = -1;
        const page = specifiedSortPages.pop();
        if (page) {
            targetIndex = findSpecifiedPageIndex(defaultPagesGroupByMenuPath, page);
            if (targetIndex !== -1) {
                insertPage(page, targetIndex);
                specifiedSortPages.push(...sortQueueCache);
                sortQueueCache = [];
            }
            else {
                sortQueueCache.push(page);
            }
        }
    }
    if (sortQueueCache.length) {
        console.log(colors.red('\nvuepress plugin auto sidebar(精准排序): '), `\n  [${colors.green(sortQueueCache.map(q => `${q.filename}(${q.frontmatter.title})`).join('、'))}] \t共 ${sortQueueCache.length} 个文件指向了不存在的 prev 或 next，它将不会显示在 sidebar 中`);
    }
};
exports.specifiedPagesSort = specifiedPagesSort;
const pagesGroupSort = (defaultPagesGroupByMenuPath) => Object.keys(defaultPagesGroupByMenuPath)
    .sort((groupA, groupB) => groupA.length > groupB.length ? -1 : 1)
    .reduce((acc, group) => {
    acc[group] = defaultPagesGroupByMenuPath[group];
    return acc;
}, {});
exports.pagesGroupSort = pagesGroupSort;
