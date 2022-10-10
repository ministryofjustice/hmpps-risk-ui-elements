# MAPPA widget

## Arguments

|Name|Type|Required|Description|
|---|---|---|---|
|level|String|Yes|the MAPPA level that is displayed|
|isNominal|String|Yes|is MAPPA nominal?|
|lastUpdated|String|Yes|the MAPPA level that is displayed|

## Example
Below is a typical example of this component in use

```nunjucks
{% from "components/mappa-widget/macro.njk" import mappaWidget %}

{{ mappaWidget({
    level: "CAT 2/LEVEL 1",
    isNominal: false,
    lastUpdated: "10th October 2021"
}) }}
```

<img src="screenshots/mappa_widget.png" width=30% height=30%>

**When there is no associated risk flags for the individual**

```nunjucks
{% from "components/mappa-widget/macro.njk" import mappaWidget %}

{{ mappaWidget({}) }}
```
<img src="screenshots/mappa_widget_not_found.png" width=30% height=30%>

**When something went wrong**

```nunjucks
{% from "components/mappa-widget/macro.njk" import mappaWidget %}

{{ mappaWidget(null) }}
```

<img src="screenshots/mappa_widget_server_error.png" width=30% height=30%>

##  Usage

### When to use
TODO

### When not to use
TODO

## Research
TODO
