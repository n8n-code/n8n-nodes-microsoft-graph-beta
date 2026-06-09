import type { INodeProperties } from 'n8n-workflow';

export const teamsTemplatesTeamsTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Templates Teams Template"
					]
				}
			},
			"options": [
				{
					"name": "Teams Templates Teams Template List Teams Template",
					"value": "Teams Templates Teams Template List Teams Template",
					"action": "Get entities from teamsTemplates",
					"description": "Get entities from teamsTemplates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamsTemplates"
						}
					}
				},
				{
					"name": "Teams Templates Teams Template Create Teams Template",
					"value": "Teams Templates Teams Template Create Teams Template",
					"action": "Add new entity to teamsTemplates",
					"description": "Add new entity to teamsTemplates",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamsTemplates"
						}
					}
				},
				{
					"name": "Teams Templates Teams Template Delete Teams Template",
					"value": "Teams Templates Teams Template Delete Teams Template",
					"action": "Delete entity from teamsTemplates",
					"description": "Delete entity from teamsTemplates",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamsTemplates/{{$parameter[\"teamsTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Templates Teams Template Get Teams Template",
					"value": "Teams Templates Teams Template Get Teams Template",
					"action": "Get entity from teamsTemplates by key",
					"description": "Get entity from teamsTemplates by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamsTemplates/{{$parameter[\"teamsTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Templates Teams Template Update Teams Template",
					"value": "Teams Templates Teams Template Update Teams Template",
					"action": "Update entity in teamsTemplates",
					"description": "Update entity in teamsTemplates",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamsTemplates/{{$parameter[\"teamsTemplate-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teamsTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template List Teams Template"
					]
				}
			}
		},
		{
			"displayName": "POST /teamsTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Create Teams Template"
					]
				}
			}
		},
		{
			"displayName": "POST /teamsTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Create Teams Template"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamsTemplates/{teamsTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Delete Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Delete Teams Template"
					]
				}
			}
		},
		{
			"displayName": "GET /teamsTemplates/{teamsTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Get Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Get Teams Template"
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
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Get Teams Template"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamsTemplates/{teamsTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Update Teams Template"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamsTemplates/{teamsTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Templates Teams Template"
					],
					"operation": [
						"Teams Templates Teams Template Update Teams Template"
					]
				}
			}
		},
];
