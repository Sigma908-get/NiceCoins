function getThemeConfig(){
    const root = getComputedStyle(document.documentElement);
    const isDarkTheme = localStorage.getItem('theme') === 'light-theme' ? false : true;

    const backgroundColor = root.getPropertyValue(isDarkTheme ? '--chart-dark-bg' : '--chart-light-bg').trim();
    const gridColor = root.getPropertyValue(isDarkTheme ? '--chart-dark-border' : '--chart-light-border').trim();

    return {
        allow_symbol_change: true,
        calendar: false,
        details: true,
        hide_side_toolbar: false,
        hide_top_toolbar: false,
        hide_legend: false,
        hide_volume: false,
        hotlist: false,
        interval: "4H",
        locale: "en",
        save_image: true,
        style: "1",
        symbol: "BINANCE:BTCUSDT",
        theme: isDarkTheme ? 'dark' : 'light',
        timezone: "Etc/UTC",
        backgroundColor: backgroundColor,
        gridColor: gridColor,
        watchlist: [],
        withdateranges: false,
        compareSymbols: [],
        studies: [],
        autosize: true      
    };  
}

function initializeWidget() {
    const widgetConfig = getThemeConfig();
    createWidget('chart-widget', widgetConfig, 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js');
}

initializeWidget();