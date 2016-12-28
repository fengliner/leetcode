## H-Index

### Question:

Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

H指数（H index）是一个混合量化指标，可用于评估研究人员的学术产出数量与学术产出水平。H指数是2005年由美国加利福尼亚大学圣地亚哥分校的物理学家乔治·希尔施[1]提出的。

H指数的计算基于其研究者的论文数量及其论文被引用的次数。一名科学家的h指数是指其发表的N篇论文中有h篇每篇至少被引h次、而其余N-h篇论文每篇被引均小于或等于h次。如美国耶鲁大学免疫学家理查德·弗来沃发表的900篇文章中，有107篇被引用了107次以上，他的H指数是107。

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

### Example:
Given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

### Note:

1. If there are several possible values for h, the maximum one is taken as the h-index.

### Answer 1:

```js
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // 从高到低排序
    var sortCitations = citations.sort(function(a,b) {
        return b - a;
    });
    // 从前往后查找排序后的列表，直到某篇论文的序号大于该论文被引次数，所得序号减一即为H指数
    for (var i = 1; i <= sortCitations.length; i++) {
        if (i > sortCitations[i - 1]) {
            return i - 1;
        }
    }
    return citations.length;
};
```

### Answer 2:

```js
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // h指数的最大值是论文的总篇数，从总篇数开始遍历开始遍历即可，找不到即为0
    for (var i = citations.length; i > 0; i--) {
        var filterCitations = citations.filter(function(item) {
            return item >= i;
        })
        if (filterCitations.length >= i) {
            return i;
        }
    }
    return 0;
};
```

### Link

https://leetcode.com/problems/h-index/
