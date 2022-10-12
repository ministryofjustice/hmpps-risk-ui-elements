# HMPPS Risk UI elements
Templates and styles for displaying consistent risk information UI elements in HMPPS services. 

These can be used in a similar way to other components in the GOV.UK and MoJ frontend systems.

# Components

## In use
These are currently implemented and live in the Assess Risks and Needs UI

- [RoSH widget](components/rosh-widget/README.md)
- [MAPPA widget](components/mappa-widget/README.md)
- [Risk flag (registrations) widget](components/risk-flag-widget/README.md)

## Experimental
These are prototyped components that are not currently in use

- [Risk predictor scores](components/predictor-scores/README.md)
- [Risk predictor score timeline](components/predictor-timeline/README.md)

# Using the widgets in the prototyping kit

This guide was written against version 12.01 of the prototyping kit (https://govuk-prototype-kit.herokuapp.com/docs)

## Install the scss files
After installing the prototyping kit in the normal way, copy the files in the `scss` folder of this repo to: `app/assets/sass/risk`

Now edit `app/assets/sass/application.scss`  to import the style files after the other stylesheet imports (around line 18 when the kit is installed):

```scss
@import "risk/predictor-scores";
@import "risk/widgets";
@import "risk/timeline";
```

## Add the javascript file
Copy the javascript file in the `javascript` folder of this repo to: `app/assets/javascripts`. This is only used in the 'timeline' component - you can leave this file out if you're not using that component. 



## Copy and configure the templates
Copy the `components` folder and its contents from this repo into `app/views/`.

Edit `app/views/layout.html` - add the following lines after the other template import statements around line 33:

```nunjucks
{% from "components/predictor-score/macro.njk" import predictorScore %}
{% from "components/predictor-timeline/macro.njk" import predictorTimeline %}
{% from "components/rosh-widget/macro.njk" import roshWidget %}
{% from "components/mappa-widget/macro.njk" import riskFlagWidget %}
{% from "components/risk-flag-widget/macro.njk" import mappaWidget %}
```

## Show the widgets on a page

You can now set up a page with the widget components and pass in data for them to use. In the `examples` folder of this repo you will find a sample `routes.js` file that shows how you might set up the data and pass it into a page called 'scores'. You can also find a corresponding `scores.html` file that shows how you might then display the widgets on the page using that data. 

# Questions and updates
This repo is maintained by the Assess Risks and Needs team in MoJ Digital. If you have any questions or update requests, please contact Karen Simpson for design queries or Paul Coupe for technical queries.

Pull Requests are welcome!
