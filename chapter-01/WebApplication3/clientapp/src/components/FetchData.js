import * as React from 'react';
export class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }
    componentDidMount() {
        this.populateWeatherData();
    }
    static renderForecastsTable(forecasts) {
        return (React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Date"),
                    React.createElement("th", null, "Temp. (C)"),
                    React.createElement("th", null, "Temp. (F)"),
                    React.createElement("th", null, "Summary"))),
            React.createElement("tbody", null, forecasts.map(forecast => React.createElement("tr", { key: forecast.date },
                React.createElement("td", null, forecast.date),
                React.createElement("td", null, forecast.temperatureC),
                React.createElement("td", null, forecast.temperatureF),
                React.createElement("td", null, forecast.summary))))));
    }
    render() {
        let contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : FetchData.renderForecastsTable(this.state.forecasts);
        return (React.createElement("div", null,
            React.createElement("h1", { id: "tabelLabel" }, "Weather forecast"),
            React.createElement("p", null, "This component demonstrates fetching data from the server."),
            contents));
    }
    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
FetchData.displayName = FetchData.name;
//# sourceMappingURL=FetchData.js.map