Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    launch: function showPie() {
        
        var rallyDataSource=new rally.sdk.data.RallyDataSource('__WORKSPACE_OID__',
        '__PROJECT_OID__',
        '__PROJECT_SCOPING_UP__',
        '__PROJECT_SCOPING_DOWN__');
        var pieConfig ={
            type: "Defect",
            attribute: "Priority",
            title: "Defects by Priority",
            height: 200,
            width: 200
        };
        var pieChart = new rally.sdk.ui.PieChart(pieConfig, rallyDataSource);
        pieChart.display("pieChartDiv");
    }
})
    rally.addOnLoad(showPie);

     