"use strict";
! function(NioApp, $) {
    var mainBalance = {
        labels: ["01 Nov", "02 Nov", "03 Nov", "04 Nov", "05 Nov", "06 Nov", "07 Nov", "08 Nov", "09 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov", "19 Nov", "20 Nov", "21 Nov", "22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov"],
        dataUnit: "BTC",
        datasets: [{
            label: "Send",
            color: "#6baafe",
            data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 75, 90]
        }, {
            label: "Receive",
            color: "#baaeff",
            data: [80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82, 85, 60, 85, 60]
        }, {
            label: "Withdraw",
            color: "#a7ccff",
            data: [90, 98, 115, 70, 87, 95, 67, 90, 98, 115, 70, 87, 95, 67, 90, 98, 115, 70, 87, 95, 67, 90, 98, 115, 70, 87, 95, 67, 95, 67]
        }]
    };

    function accountBalance(selector, set_data) {
        var $selector = $(selector || ".chart-account-balance");
        $selector.each(function() {
            for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
                label: _get_data.datasets[i].label,
                data: _get_data.datasets[i].data,
                backgroundColor: _get_data.datasets[i].color,
                borderWidth: 2,
                borderColor: "transparent",
                hoverBorderColor: "transparent",
                borderSkipped: "bottom",
                barPercentage: .6,
                categoryPercentage: .7
            });
            var chart = new Chart(selectCanvas, {
                type: "bar",
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data
                },
                options: {
                    legend: {
                        display: !1
                    },
                    maintainAspectRatio: !1,
                    tooltips: {
                        enabled: !0,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(a, t) {
                                return t.datasets[a[0].datasetIndex].label
                            },
                            label: function(a, t) {
                                return t.datasets[a.datasetIndex].data[a.index] + " " + _get_data.dataUnit
                            }
                        },
                        backgroundColor: "#eff6ff",
                        titleFontSize: 13,
                        titleFontColor: "#6783b8",
                        titleMarginBottom: 6,
                        bodyFontColor: "#9eaecf",
                        bodyFontSize: 12,
                        bodySpacing: 4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: !1
                    },
                    scales: {
                        yAxes: [{
                            display: !1
                        }],
                        xAxes: [{
                            display: !1,
                            ticks: {
                                reverse: NioApp.State.isRTL
                            }
                        }]
                    }
                }
            })
        })
    }
    NioApp.coms.docReady.push(function() {
        accountBalance()
    });
    var refBarChart = {
        labels: ["01 Nov", "02 Nov", "03 Nov", "04 Nov", "05 Nov", "06 Nov", "07 Nov", "08 Nov", "09 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov", "19 Nov", "20 Nov", "21 Nov", "22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov"],
        dataUnit: "People",
        datasets: [{
            label: "Join",
            color: "#6baafe",
            data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 75, 90]
        }]
    };

    function referStats(selector, set_data) {
        var $selector = $(selector || ".chart-refer-stats");
        $selector.each(function() {
            for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
                label: _get_data.datasets[i].label,
                data: _get_data.datasets[i].data,
                backgroundColor: _get_data.datasets[i].color,
                borderWidth: 2,
                borderColor: "transparent",
                hoverBorderColor: "transparent",
                borderSkipped: "bottom",
                barPercentage: .5,
                categoryPercentage: .7
            });
            var chart = new Chart(selectCanvas, {
                type: "bar",
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data
                },
                options: {
                    legend: {
                        display: !1
                    },
                    maintainAspectRatio: !1,
                    tooltips: {
                        enabled: !0,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(a, t) {
                                return t.datasets[a[0].datasetIndex].label
                            },
                            label: function(a, t) {
                                return t.datasets[a.datasetIndex].data[a.index] + " " + _get_data.dataUnit
                            }
                        },
                        backgroundColor: "#fff",
                        titleFontSize: 13,
                        titleFontColor: "#6783b8",
                        titleMarginBottom: 6,
                        bodyFontColor: "#9eaecf",
                        bodyFontSize: 12,
                        bodySpacing: 4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: !1
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            ticks: {
                                beginAtZero: !0
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            ticks: {
                                reverse: NioApp.State.isRTL
                            }
                        }]
                    }
                }
            })
        })
    }
    NioApp.coms.docReady.push(function() {
        referStats()
    });
    var summaryBalance = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dataUnit: "BTC",
        datasets: [{
            label: "Total Received",
            color: "#5ce0aa",
            data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
        }, {
            label: "Total Send",
            color: "#3a8dfe",
            data: [80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82]
        }, {
            label: "Total Withdraw",
            color: "#f6ca3e",
            data: [90, 98, 115, 70, 87, 95, 67, 90, 98, 115, 70, 87]
        }]
    };

    function accountSummary(selector, set_data) {
        var $selector = $(selector || ".chart-account-summary");
        $selector.each(function() {
            for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
                label: _get_data.datasets[i].label,
                tension: .4,
                backgroundColor: "transparent",
                borderWidth: 2,
                borderColor: _get_data.datasets[i].color,
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: _get_data.datasets[i].color,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 4,
                data: _get_data.datasets[i].data
            });
            var chart = new Chart(selectCanvas, {
                type: "line",
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data
                },
                options: {
                    legend: {
                        display: !1
                    },
                    maintainAspectRatio: !1,
                    tooltips: {
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(a, t) {
                                return t.labels[a[0].index]
                            },
                            label: function(a, t) {
                                return t.datasets[a.datasetIndex].data[a.index] + " " + _get_data.dataUnit
                            }
                        },
                        backgroundColor: "#eff6ff",
                        titleFontSize: 13,
                        titleFontColor: "#6783b8",
                        titleMarginBottom: 6,
                        bodyFontColor: "#9eaecf",
                        bodyFontSize: 12,
                        bodySpacing: 4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: !1
                    },
                    scales: {
                        yAxes: [{
                            position: NioApp.State.isRTL ? "right" : "left",
                            ticks: {
                                beginAtZero: !1,
                                fontSize: 12,
                                fontColor: "#9eaecf",
                                padding: 10
                            },
                            gridLines: {
                                color: NioApp.hexRGB("#526484", .2),
                                tickMarkLength: 0,
                                zeroLineColor: NioApp.hexRGB("#526484", .2)
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontSize: 12,
                                fontColor: "#9eaecf",
                                source: "auto",
                                padding: 5,
                                reverse: NioApp.State.isRTL
                            },
                            gridLines: {
                                color: "transparent",
                                tickMarkLength: 20,
                                zeroLineColor: NioApp.hexRGB("#526484", .2),
                                offsetGridLines: !0
                            }
                        }]
                    }
                }
            })
        })
    }
    NioApp.coms.docReady.push(function() {
        accountSummary()
    })
}(NioApp, jQuery);