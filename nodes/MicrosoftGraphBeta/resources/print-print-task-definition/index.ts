import type { INodeProperties } from 'n8n-workflow';

export const printPrintTaskDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					]
				}
			},
			"options": [
				{
					"name": "Print List Task Definitions",
					"value": "Print List Task Definitions",
					"action": "List taskDefinitions",
					"description": "Retrieve a list of task definitions that the requesting app defined in the tenant. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/taskDefinitions"
						}
					}
				},
				{
					"name": "Print Create Task Definitions",
					"value": "Print Create Task Definitions",
					"action": "Create taskDefinition",
					"description": "Create a new task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/taskDefinitions"
						}
					}
				},
				{
					"name": "Print Delete Task Definitions",
					"value": "Print Delete Task Definitions",
					"action": "Delete navigation property taskDefinitions for print",
					"description": "Delete navigation property taskDefinitions for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Print Get Task Definitions",
					"value": "Print Get Task Definitions",
					"action": "Get taskDefinitions from print",
					"description": "Get taskDefinitions from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Print Update Task Definitions",
					"value": "Print Update Task Definitions",
					"action": "Update the navigation property taskDefinitions in print",
					"description": "Update the navigation property taskDefinitions in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Print Task Definitions List Tasks",
					"value": "Print Task Definitions List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of tasks associated with a task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Print Task Definitions Create Tasks",
					"value": "Print Task Definitions Create Tasks",
					"action": "Create new navigation property to tasks for print",
					"description": "Create new navigation property to tasks for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Print Task Definitions Delete Tasks",
					"value": "Print Task Definitions Delete Tasks",
					"action": "Delete navigation property tasks for print",
					"description": "Delete navigation property tasks for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}/tasks/{{$parameter[\"printTask-id\"]}}"
						}
					}
				},
				{
					"name": "Print Task Definitions Get Tasks",
					"value": "Print Task Definitions Get Tasks",
					"action": "Get tasks from print",
					"description": "A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}/tasks/{{$parameter[\"printTask-id\"]}}"
						}
					}
				},
				{
					"name": "Print Task Definitions Update Tasks",
					"value": "Print Task Definitions Update Tasks",
					"action": "Update the navigation property tasks in print",
					"description": "Update the navigation property tasks in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}/tasks/{{$parameter[\"printTask-id\"]}}"
						}
					}
				},
				{
					"name": "Print Task Definitions Tasks Get Definition",
					"value": "Print Task Definitions Tasks Get Definition",
					"action": "Get definition from print",
					"description": "The printTaskDefinition that was used to create this task. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}/tasks/{{$parameter[\"printTask-id\"]}}/definition"
						}
					}
				},
				{
					"name": "Print Task Definitions Tasks Get Trigger",
					"value": "Print Task Definitions Tasks Get Trigger",
					"action": "Get trigger from print",
					"description": "The printTaskTrigger that triggered this task's execution. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/taskDefinitions/{{$parameter[\"printTaskDefinition-id\"]}}/tasks/{{$parameter[\"printTask-id\"]}}/trigger"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /print/taskDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print List Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /print/taskDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Create Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /print/taskDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Create Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/taskDefinitions/{printTaskDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Delete Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Delete Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /print/taskDefinitions/{printTaskDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Get Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Get Task Definitions"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Get Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/taskDefinitions/{printTaskDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Update Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/taskDefinitions/{printTaskDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Update Task Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /print/taskDefinitions/{printTaskDefinition-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /print/taskDefinitions/{printTaskDefinition-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /print/taskDefinitions/{printTaskDefinition-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Delete Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Get Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Get Tasks"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Tasks Get Definition"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Tasks Get Definition"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Tasks Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Tasks Get Trigger"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Tasks Get Trigger"
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
						"Print Print Task Definition"
					],
					"operation": [
						"Print Task Definitions Tasks Get Trigger"
					]
				}
			}
		},
];
