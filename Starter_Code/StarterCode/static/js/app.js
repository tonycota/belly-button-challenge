// get the JSON data
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    // populate the dropdown menu
    let select = d3.select("#selDataset");
    data.names.forEach((name) => {
        select.append("option").text(name).property("value", name);
    });
    // console.log(select)

    // add event listener for the dropdown menu change
    select.on("change", function () {
        let newSample = d3.select(this).property("value");
        optionChanged(newSample);
        // console.log(newSample);
    });
    

    // initialize the page with the first sample
    var firstSample = data.names[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
    // initialize the page with the first sample for gauge chart
    buildCharts(firstSample); 
    // console.log(firstSample);
});

// function to build the metadata panel
function buildMetadata(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let metadata = data.metadata;
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        let panel = d3.select("#sample-metadata");
        // console.log(metadata);
        // console.log(resultArray);
        // console.log(result);
        // console.log(panel);

        // void any existing metadata
        panel.html("");

        // add each key-value pair to the panel
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
        });
    });
}

// function to build the charts
function buildCharts(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        // console.log(samples);
        // console.log(resultArray);
        // console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        // console.log(otu_ids);
        // console.log(otu_labels);
        // console.log(sample_values);

        // compose the bar chart
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        var barData = [{
            y: yticks,
            x: sample_values.slice(0, 10).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h",
        }];

        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", barData, barLayout);

        // compose the bubble chart
        let bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        }];

        let bubbleLayout = {
            showlegend: false,
            height: 550,
            width: 1100,
            xaxis: { title: 'OTU ID' },
            hovermode: 'closest'
        };

        Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    });
}

// function to handle changes in the dropdown selection
function optionChanged(newSample) {
    console.log("New sample selected:", newSample);
    buildCharts(newSample);
    buildMetadata(newSample);
    buildCharts(newSample); 
}