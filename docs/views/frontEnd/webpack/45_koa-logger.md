---
title: koa-logger
category: WEBPACK
date: 2022/4/9
---

> 说明此包在github上有完整的项目，只是不符合自己的某些要求，所以就自己修改了下源码。

```javascript

// koa-logger
/**
 * Module dependencies.
 */
'use strict';

const Counter = require('passthrough-counter');
const humanize = require('humanize-number');
const bytes = require('bytes');
const chalk = require('chalk');
const util = require('util');
const moment = require('moment');
const MyLogger = require('./logger');

/**
 * Expose logger.
 */

module.exports = dev;

/**
 * Color map.
 */

const colorCodes = {
    7: 'magenta',
    5: 'red',
    4: 'yellow',
    3: 'cyan',
    2: 'green',
    1: 'green',
    0: 'yellow',
};

/**
 * Development logger.
 */

function dev(opts) {
    const print = (function () {
        let transporter;
        if (typeof opts === 'function') {
            transporter = opts;
        } else if (opts && opts.transporter) {
            transporter = opts.transporter;
        }

        return function printFunc(...args) {
            const str = util.format(...args);
            if (transporter) {
                transporter(str, args);
            } else {
                console.log(`[${chalk.gray(moment().format('YYYY-MM-DD HH:mm:ss'))}]`, str);
            }
        };
    })();

    return async function logger(ctx, next) {
        ctx.log = MyLogger.createLogger();
        // request
        const start = ctx[Symbol.for('request-received.startTime')] ? ctx[Symbol.for('request-received.startTime')].getTime() : Date.now();
        try {
            await next();
        } catch (err) {
            // log uncaught downstream errors
            log(print, ctx, start, null, err);
            throw err;
        }

        let params;
        if (ctx.method === 'GET' && ctx.request.query)
            params = ctx.request.query;
        else if (ctx.method === 'POST' && ctx.request.fields)
            params = ctx.request.fields;
        print('  ' + chalk.green('<--')
            + ' ' + chalk.bold('%s')
            + ' ' + chalk.gray('%s'),
        ctx.method,
        ctx.originalUrl,
        JSON.stringify(params));

        // calculate the length of a streaming response
        // by intercepting the stream with a counter.
        // only necessary if a content-length header is currently not set.
        const length = ctx.response.length;
        const body = ctx.body;
        let counter;
        if (length === undefined && body && body.readable) {
            ctx.body = body.pipe(counter = new Counter()).on('error', ctx.onerror);
        }

        // log when the response is finished or closed,
        // whichever happens first.
        const res = ctx.res;

        const onfinish = done.bind(null, 'finish');
        const onclose = done.bind(null, 'close');

        res.once('finish', onfinish);
        res.once('close', onclose);

        function done(event) {
            res.removeListener('finish', onfinish);
            res.removeListener('close', onclose);
            log(print, ctx, start, counter ? counter.length : length, null, event);
        }
    };
}

/**
 * Log helper.
 */

function log(print, ctx, start, len, err, event) {
    // get the status code of the response
    // eslint-disable-next-line no-nested-ternary
    const status = err ? (err.isBoom ? err.output.statusCode : err.status || 500) : (ctx.status || 404);

    // set the color of the status code;
    const s = status / 100 | 0;
    // eslint-disable-next-line
    const color = colorCodes.hasOwnProperty(s) ? colorCodes[s] : colorCodes[0]

    // get the human readable response length
    let length;
    if ([204, 205, 304].indexOf(status)) {
        length = '';
    } else if (len === null) {
        length = '-';
    } else {
        length = bytes(len).toLowerCase();
    }

    // eslint-disable-next-line no-nested-ternary
    const upstream = err ? chalk.red('xxx') : event === 'close' ? chalk.yellow('-x-') : chalk.gray('-->');

    print('  ' + upstream
        + ' ' + chalk.bold('%s')
        + ' ' + chalk.gray('%s')
        + ' ' + chalk[color]('%s')
        + ' ' + chalk.gray('%s')
        + ' ' + chalk.gray('%s'),
    ctx.method,
    ctx.originalUrl,
    status,
    time(start),
    length);
}

/**
 * Show the response time in a human readable format.
 * In milliseconds if less than 10 seconds,
 * in seconds otherwise.
 */

function time(start) {
    const delta = Date.now() - start;
    return humanize(delta < 10000 ? delta + 'ms' : Math.round(delta / 1000) + 's');
}

```

```javascript
/**
 * Simple Logger
 */

'use strict';

const chalk = require('chalk');
const moment = require('moment');
const util = require('util');

const LOG_LEVEL = {
    DEBUG: 1,
    VERBOSE: 2,
    INFO: 3,
    IMP: 4,
    WARN: 5,
    ERROR: 6,
    FATAL: 7,
};

const LOG_LEVEL_LABEL = {
    1: 'DEBUG',
    2: 'VERBOSE',
    3: 'INFO',
    4: 'IMP',
    5: 'WARN',
    6: 'ERROR',
    7: 'FATAL',
};

const LOG_LEVEL_COLOR = {
    1: chalk.gray,
    2: chalk.cyan,
    3: chalk.blue,
    4: chalk.magenta,
    5: chalk.yellow,
    6: chalk.red,
    7: chalk.red,
};

class LogEntry {
    constructor(timestamp, priority, tag, pid, identifier, message) {
        this.timestamp = timestamp;
        this.priority = priority;
        this.priorityLabel = LOG_LEVEL_LABEL[priority] || 'UNKNOWN';
        this.tag = tag;
        this.pid = pid;
        this.identifier = identifier;
        this.message = message;
    }
}

class Log {
    constructor(tag, identifier) {
        this.tag = tag;
        this.identifier = identifier;
    }

    /**
     * 输出日志消息
     * @private
     * @param   {LogEntry}  entry   日志
     */
    _write(entry) {
        const log = this._format(entry);
        if (entry.priority >= LOG_LEVEL.ERROR)
            console.error(log);
        else
            console.info(log);
    }

    /**
     * 格式化日志输出
     * @private
     * @param   {LogEntry}  entry   日志
     * @returns {String}    格式化后的日志
     */
    _format(entry) {
        if (this.formatter)
            return this.formatter(entry);

        return `[${chalk.gray(moment().format('YYYY-MM-DD HH:mm:ss'))}] ${chalk.bold(LOG_LEVEL_COLOR[entry.priority](entry.priorityLabel))} ${entry.tag || ''} ${entry.identifier ? '<' + entry.identifier + '>' : ''} ${entry.priority === 1 ? chalk.gray(util.format(...entry.message)) : util.format(...entry.message)}`;
    }

    _entry(priority, message) {
        return new LogEntry(
            moment(),
            priority,
            this.tag,
            process.pid,
            this.identifier,
            message
        );
    }

    debug(...args) {
        this._write(this._entry(LOG_LEVEL.DEBUG, args));
    }

    verbose(message) {
        this._write(this._entry(LOG_LEVEL.VERBOSE, message));
    }

    info(...args) {
        this._write(this._entry(LOG_LEVEL.INFO, args));
    }

    important(message) {
        this._write(this._entry(LOG_LEVEL.IMP, message));
    }

    warn(...args) {
        this._write(this._entry(LOG_LEVEL.WARN, args));
    }

    error(...args) {
        this._write(this._entry(LOG_LEVEL.ERROR, args));
    }

    fatal(message) {
        this._write(this._entry(LOG_LEVEL.FATAL, message));
    }

    static createLogger(tag) {
        return new Log(tag);
    }
}

module.exports = Log;
module.exports.LogEntry = LogEntry;
```

使用：

```javascript
const Koa = require('koa');
const koaLogger = require('./koaLogger');

const app = new Koa();

// 日志
app.use(koaLogger());
```

```bash
# 控制台输出结果
[2021-07-27 11:15:17]   --> GET /global/redirect/global/api/kps-base/v1/session/role 200 124ms
[2021-07-27 11:15:17] INFO   触发了proxyRes
[2021-07-27 11:15:17]   --> GET /personal/redirect/log/api/kps-base/v1/change-log?current=1&size=999 200 127ms
[2021-07-27 11:15:17] INFO   触发了proxyRes
[2021-07-27 11:15:17]   --> GET /dict/redirect/dict/api/kps-base/v1/dict 200 147ms
[2021-07-27 11:15:17] INFO   触发了proxyRes
[2021-07-27 11:15:17]   --> GET /auth/redirect/auth/api/kps-base/v1/role?size=15&current=1&clientId=&dimName=&isDefault=&isEnabled= 200 163ms
[2021-07-27 11:15:17] INFO   触发了proxyRes
[2021-07-27 11:15:17]   --> GET /auth/redirect/auth/api/kps-base/v1/user?current=1&size=1000 200 235ms
```


