# Delius risk flag (registrations) widget

## Arguments

**Component**
|Name|Type|Required|Description|
|---|---|---|---|
|flags|Risks[]|Yes|risk flags for the widget to display|

**Risks**
|Name|Type|Required|Description|
|---|---|---|---|
|description|String|Yes|description for the risk flag|

## Example
Below is a typical example of this component in use

```nunjucks
{% from "components/risk-flag-widget/macro.njk" import riskFlagWidget %}

{{ riskFlagWidget([
    { "description": "Hate Crime" },
    { "description": "Modern Day Slavery - Perpetrator" }
]) }}
```

<img src="screenshots/risk_flags_widget.png" width=30% height=30%>

**When there is no associated risk flags for the individual**

```nunjucks
{% from "components/rosh-widget/macro.njk" import roshWidget %}

{{ riskFlagWidget([]) }}
```
<img src="screenshots/risk_flags_widget_not_found.png" width=30% height=30%>

**When something went wrong**

```nunjucks
{% from "components/rosh-widget/macro.njk" import roshWidget %}

{{ riskFlagWidget(null) }}
```

<img src="screenshots/risk_flags_widget_server_error.png" width=30% height=30%>

##  Usage

### When to use
TODO

### When not to use
TODO

## Research
TODO
