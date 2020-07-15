---
title: Xenophobia Online Project Progress Report 7/6
author: Michael Wang
date: "2020-07-06T22:12:03.284Z"
image: "../img/xeno-5.png"
---
Members within the Coronavirus Visualization Team and Coronavirus Visualization Community have put together a project which aims to use natural language processing via a machine learning model for sentiment analysis on an ongoing collection of Tweets associated with the novel coronavirus COVID-19 (SARS-CoV-2). The main goal of the project is to be able to visualize and grasp an understanding on how the global pandemic has influenced general sentiment and xenophobic patterns.

During these last two weeks, we were able to finally prepare the data for the data visualization stage. One of our members were able to develop a python script inspired by this <a href="https://github.com/CRANE-toolbox/analysis-pipelines" target="_blank">repository</a> to hydrate April Tweet IDs as well as convert the hydrated Tweet IDs from JSON to CSV file format. We were able to prepare two different types of data formats for visualization.

![Excel Sample](/xeno-1.png)

Here is a small snippet of one of our data tables. This table includes the frequency of every single slur from the dictionary we compiled. It also includes the total amount of slurs per week.

![Excel Sample 2](/xeno-2.png)

This table includes data computed from the Google Perspective API which is used to detect abuse, harassment, and toxicity levels within text.

We were also able to create visualizations related to our research on xenophobia on data reported from the Asian Pacific Policy and Planning Council’s Stop Asian-American Pacific Islander Hate Report 6/17/2020. We were able to visualize data such as the type of incident reported, what kind of location it occurred, the state it happened in, the reason for the incident and the age, gender and ethnicity of the victim. We were able to visualize statistics from 1,843 incidents which were collected between March 19, 2020 and May 13, 2020. Here are just 3 of the visualizations from our <a href="https://public.tableau.com/profile/michael.wang1975#!/vizhome/StopAAPIHateReport61720/StopAAPIHateReport61720?publish=yes" target="_blank">Tableau Story</a>.

![Excel Sample 3](/xeno-3.png)

![Excel Sample 4](/xeno-4.png)

![Excel Sample 5](/xeno-5.png)

Our goals for the next two weeks is to recruit more people to help visualize our new data. We will also dive into more methods for our sentiment analysis such as creating our machine learning model and training it using our preprocessed data. Lastly, we will work to prepare and hydrate previous months to April.