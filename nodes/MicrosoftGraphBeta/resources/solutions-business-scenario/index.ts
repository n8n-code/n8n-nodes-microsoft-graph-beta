import type { INodeProperties } from 'n8n-workflow';

export const solutionsBusinessScenarioDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					]
				}
			},
			"options": [
				{
					"name": "Solutions List Business Scenarios",
					"value": "Solutions List Business Scenarios",
					"action": "List businessScenarios",
					"description": "Get a list of all businessScenario objects in an organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios"
						}
					}
				},
				{
					"name": "Solutions Create Business Scenarios",
					"value": "Solutions Create Business Scenarios",
					"action": "Create businessScenario",
					"description": "Create a new businessScenario object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/solutions/businessScenarios"
						}
					}
				},
				{
					"name": "Solutions Delete Business Scenarios",
					"value": "Solutions Delete Business Scenarios",
					"action": "Delete navigation property businessScenarios for solutions",
					"description": "Delete navigation property businessScenarios for solutions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}"
						}
					}
				},
				{
					"name": "Solutions Get Business Scenarios",
					"value": "Solutions Get Business Scenarios",
					"action": "Get businessScenarios from solutions",
					"description": "Get businessScenarios from solutions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}"
						}
					}
				},
				{
					"name": "Solutions Update Business Scenarios",
					"value": "Solutions Update Business Scenarios",
					"action": "Update the navigation property businessScenarios in solutions",
					"description": "Update the navigation property businessScenarios in solutions",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Delete Planner",
					"value": "Solutions Business Scenarios Delete Planner",
					"action": "Delete navigation property planner for solutions",
					"description": "Delete navigation property planner for solutions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Get Planner",
					"value": "Solutions Business Scenarios Get Planner",
					"action": "Get businessScenarioPlanner",
					"description": "Read the properties and relationships of a businessScenarioPlanner object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Update Planner",
					"value": "Solutions Business Scenarios Update Planner",
					"action": "Update the navigation property planner in solutions",
					"description": "Update the navigation property planner in solutions",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Delete Plan Configuration",
					"value": "Solutions Business Scenarios Planner Delete Plan Configuration",
					"action": "Delete navigation property planConfiguration for solutions",
					"description": "Delete navigation property planConfiguration for solutions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/planConfiguration"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Get Plan Configuration",
					"value": "Solutions Business Scenarios Planner Get Plan Configuration",
					"action": "Get plannerPlanConfiguration",
					"description": "Read the properties and relationships of a plannerPlanConfiguration object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/planConfiguration"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Update Plan Configuration",
					"value": "Solutions Business Scenarios Planner Update Plan Configuration",
					"action": "Update plannerPlanConfiguration",
					"description": "Update the properties of a plannerPlanConfiguration object for a businessScenario.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/planConfiguration"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Plan Configuration List Localizations",
					"value": "Solutions Business Scenarios Planner Plan Configuration List Localizations",
					"action": "List plannerPlanConfigurationLocalizations",
					"description": "Get a list of the plannerPlanConfigurationLocalization objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/planConfiguration/localizations"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Plan Configuration Create Localizations",
					"value": "Solutions Business Scenarios Planner Plan Configuration Create Localizations",
					"action": "Create plannerPlanConfigurationLocalization",
					"description": "Create a new plannerPlanConfigurationLocalization object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/planConfiguration/localizations"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Plan Configuration Delete Localizations",
					"value": "Solutions Business Scenarios Planner Plan Configuration Delete Localizations",
					"action": "Delete navigation property localizations for solutions",
					"description": "Delete navigation property localizations for solutions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/planConfiguration/localizations/{{$parameter[\"plannerPlanConfigurationLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Plan Configuration Get Localizations",
					"value": "Solutions Business Scenarios Planner Plan Configuration Get Localizations",
					"action": "Get localizations from solutions",
					"description": "Localized names for the plan configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/planConfiguration/localizations/{{$parameter[\"plannerPlanConfigurationLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Plan Configuration Update Localizations",
					"value": "Solutions Business Scenarios Planner Plan Configuration Update Localizations",
					"action": "Update the navigation property localizations in solutions",
					"description": "Update the navigation property localizations in solutions",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/planConfiguration/localizations/{{$parameter[\"plannerPlanConfigurationLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Delete Task Configuration",
					"value": "Solutions Business Scenarios Planner Delete Task Configuration",
					"action": "Delete navigation property taskConfiguration for solutions",
					"description": "Delete navigation property taskConfiguration for solutions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/taskConfiguration"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Get Task Configuration",
					"value": "Solutions Business Scenarios Planner Get Task Configuration",
					"action": "Get plannerTaskConfiguration",
					"description": "Read the properties and relationships of a plannerTaskConfiguration object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/taskConfiguration"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Update Task Configuration",
					"value": "Solutions Business Scenarios Planner Update Task Configuration",
					"action": "Update plannerTaskConfiguration",
					"description": "Update the properties of a plannerTaskConfiguration object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/taskConfiguration"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner List Tasks",
					"value": "Solutions Business Scenarios Planner List Tasks",
					"action": "List businessScenarioTasks",
					"description": "Get a list of the businessScenarioTask objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/tasks"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Create Tasks",
					"value": "Solutions Business Scenarios Planner Create Tasks",
					"action": "Create businessScenarioTask",
					"description": "Create a new businessScenarioTask object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/tasks"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Delete Tasks",
					"value": "Solutions Business Scenarios Planner Delete Tasks",
					"action": "Delete navigation property tasks for solutions",
					"description": "Delete navigation property tasks for solutions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/tasks/{{$parameter[\"businessScenarioTask-id\"]}}"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Get Tasks",
					"value": "Solutions Business Scenarios Planner Get Tasks",
					"action": "Get tasks from solutions",
					"description": "The Planner tasks for the scenario.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/tasks/{{$parameter[\"businessScenarioTask-id\"]}}"
						}
					}
				},
				{
					"name": "Solutions Business Scenarios Planner Update Tasks",
					"value": "Solutions Business Scenarios Planner Update Tasks",
					"action": "Update the navigation property tasks in solutions",
					"description": "Update the navigation property tasks in solutions",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/tasks/{{$parameter[\"businessScenarioTask-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /solutions/businessScenarios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions List Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "POST /solutions/businessScenarios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Create Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "POST /solutions/businessScenarios<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Create Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "DELETE /solutions/businessScenarios/{businessScenario-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Delete Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Delete Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "GET /solutions/businessScenarios/{businessScenario-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Get Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Get Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Get Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Update Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Update Business Scenarios"
					]
				}
			}
		},
		{
			"displayName": "DELETE /solutions/businessScenarios/{businessScenario-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Delete Planner"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Delete Planner"
					]
				}
			}
		},
		{
			"displayName": "GET /solutions/businessScenarios/{businessScenario-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Get Planner"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Get Planner"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Get Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Update Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Update Planner"
					]
				}
			}
		},
		{
			"displayName": "DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Delete Plan Configuration"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Delete Plan Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Plan Configuration"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Plan Configuration"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Plan Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Update Plan Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Update Plan Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration List Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Delete Localizations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Delete Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Plan Configuration Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Delete Task Configuration"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Delete Task Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Task Configuration"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Task Configuration"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Task Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Update Task Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Update Task Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Business Scenario"
					],
					"operation": [
						"Solutions Business Scenarios Planner Update Tasks"
					]
				}
			}
		},
];
