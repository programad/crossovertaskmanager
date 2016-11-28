/*jshint multistr: true */
(function(){

    'use strict';

    var taskTestresult = function ($timeout) {

        var pieDiameter = 92;

        return {
            restrict: 'A',
            scope: {
                results: '='
            },
            link: function(scope, element) {

                element.addClass('task-testresult');
                scope.chartOptions = {
                    responsive: false,
                    type: 'pie',
                    rotation: -0.8,
                    events: false,
                    showAllTooltips: true,
                    tooltips: {
                        displayColors: false,
                        backgroundColor: 'rgba(0,0,0,0)',
                        bodyFontColor: '#000000',
                        bodyFontSize: 11,
                        callbacks: {
                                label: function(tooltipItem, data) {
                                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                    return value;
                                }
                            },                            
                    }
                };

                scope.codeCoveredPerc = 0;

                scope.labels = ["skiped","passed"];
                scope.colors = ["#eb7d3b", "#72ac4d"];
                scope.data = [scope.results.skiped, scope.results.passed];

                scope.getCodeCoveredPercentage = function() {
                    return Math.round(scope.results.codeCovered * 100) + '%';
                };

                scope.getPassedPercentage = function ()
                {
                    var total = scope.results.skiped + scope.results.passed;
                    return Math.round(scope.results.passed/total * 100) + '%';
                };

                $timeout(function() {
                    scope.codeCoveredPerc = scope.getCodeCoveredPercentage();
                    element.addClass('task-loaded');
                });

            },
            template: '<div class="chart-container"><canvas id="pie" height="' + pieDiameter + '" width="' + pieDiameter + '" class="chart chart-pie" chart-data="data" \
             chart-options="chartOptions" chart-labels="labels" chart-colors="colors"> </canvas></div> \
            <div class="perc"> \
                {{getPassedPercentage()}} \
                <span>tests passed</span> \
            </div> \
            <div class="bar"> \
                <div class="progress" ng-style="{ width: codeCoveredPerc }"></div> \
                <div class="content">{{getCodeCoveredPercentage() }}<span>code covered</span></div> \
            </div>'
        };
    };

  angular.module('taskmanager').directive('taskTestresult', ['$timeout', taskTestresult]);

})();
