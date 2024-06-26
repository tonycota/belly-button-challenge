# belly-button-challenge
Armando Cota's submission for module 14

Within in this Repo you will find Module 14's challenge assignment for the Data Analytics Bootcamp. 
In this assignment, we were to told to build an interactive dashboard to explore the Belly Button Biodiversity dataset. 
The details within the dataset include the microbes that colonize human navels. 

Under the Starter Code folder, you will find the samples.json, index.html file, and a static/js folder. Within the previously stated
folder, you will find a Javascript file (app.js). The code within the file utilizes the D3 library to extract data from samples.json
from a URL provided for us (https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json).

The code executed in the app.js file creates a horizontal bar chart along with a dropdown menu to display the top 10 OTU's found in
a specific individual. 
Along with the bar chart, a bubble chart was created as well. Using otu_ids, sample_values, and otu_labels for parameters and variables 
in our charts, we were able to execute beautifully constructed images of charts that display demographic information regarding a specific 
individual. 
Notice the Plots update when a new sample is selected. For my specific color of the bubble chart I felt that the Rainbow colorscale was
the most 'eye-catching'. 

The URL below is the app deployed, enjoy!
https://tonycota.github.io/belly-button-challenge/


Below are the instructions the class was given for the assignment: 


Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Before You Begin
Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.

Clone the new repository to your computer.

Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. index.html, samples.json, and the static folder.

NOTE
You will not be required to access the samples.json file locally, but it is provided for reference.

Push the above changes to GitHub.

Deploy the new repository to GitHub Pages.

Files
Download the following files to help you get started:

Module 14 Challenge filesLinks to an external site.

Instructions
Complete the following steps:

Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

bar Chart

Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

Bubble Chart

Display the sample metadata, i.e., an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.

hw

Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

hw

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.

Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.

You will need to modify the example gauge code to account for values ranging from 0 through 9.

Update the chart whenever a new sample is selected.

Weekly Washing Frequency Gauge

Hints
Use console.log inside of your JavaScript code to see what your data looks like at each step.

Refer to the Plotly.js documentationLinks to an external site. when building the plots.