import type { INodeProperties } from 'n8n-workflow';

export const teamworkWorkforceIntegrationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Workforce Integration"
					]
				}
			},
			"options": [
				{
					"name": "Teamwork List Workforce Integrations",
					"value": "Teamwork List Workforce Integrations",
					"action": "List workforceIntegrations",
					"description": "Retrieve a list of workforceIntegration objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/workforceIntegrations"
						}
					}
				},
				{
					"name": "Teamwork Create Workforce Integrations",
					"value": "Teamwork Create Workforce Integrations",
					"action": "Create workforceIntegration",
					"description": "Create a new workforceIntegration object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/workforceIntegrations"
						}
					}
				},
				{
					"name": "Teamwork Delete Workforce Integrations",
					"value": "Teamwork Delete Workforce Integrations",
					"action": "Delete navigation property workforceIntegrations for teamwork",
					"description": "Delete navigation property workforceIntegrations for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/workforceIntegrations/{{$parameter[\"workforceIntegration-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Get Workforce Integrations",
					"value": "Teamwork Get Workforce Integrations",
					"action": "Get workforceIntegrations from teamwork",
					"description": "A workforce integration with shifts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/workforceIntegrations/{{$parameter[\"workforceIntegration-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Update Workforce Integrations",
					"value": "Teamwork Update Workforce Integrations",
					"action": "Update the navigation property workforceIntegrations in teamwork",
					"description": "Update the navigation property workforceIntegrations in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/workforceIntegrations/{{$parameter[\"workforceIntegration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teamwork/workforceIntegrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork List Workforce Integrations"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/workforceIntegrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Create Workforce Integrations"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/workforceIntegrations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Create Workforce Integrations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Delete Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Delete Workforce Integrations"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/workforceIntegrations/{workforceIntegration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Get Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Get Workforce Integrations"
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
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Get Workforce Integrations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Update Workforce Integrations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Workforce Integration"
					],
					"operation": [
						"Teamwork Update Workforce Integrations"
					]
				}
			}
		},
];
