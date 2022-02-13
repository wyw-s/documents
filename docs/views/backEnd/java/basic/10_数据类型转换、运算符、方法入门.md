---
title: 数据类型转换、运算符、方法入门
category: JAVA
date: 2021-05-02
---

## 1、数据类型转换；

> Java程序中要求参与的计算的数据，必须要保证数据类型的一致性，如果数据类型不一致将发生类型的转换。

### 1、1 自动转换；

1. 一个 int 类型变量和一个 byte 类型变量进行加法运算；

   - 自动转换：将 取值范围小的类型 自动提升为 取值范围大的类型 。

   ```java
   public static void main(String[] args) {
       int i = 1;
       byte b = 2;
       // byte x = b + i; // 报错
       //int类型和byte类型运算，结果是int类型
       int j = b + i;
       System.out.println(j);
   }
   public static void main(String[] args) {
       int i = 1;
       double d = 2.5;
       //int类型和double类型运算，结果是double类型
       //int类型会提升为double类型
       double e = d+i;
       System.out.println(e);
   }
   // 同理，当一个 int 类型变量和一个 double 变量运算时， int 类型将会自动提升为 double 类型进行运算。
   ```

   > byte 类型内存占有1个字节，在和 int 类型运算时会提升为 int 类型 ，自动补充3个字节，因此计算后的结果还是 int 类型。
   >
   > **转换规则**：范围小的类型向范围大的类型提升，byte、short、char 运算时直接提升为 int；
   >
   > byte、short、char‐‐>int‐‐>long‐‐>float‐‐>double