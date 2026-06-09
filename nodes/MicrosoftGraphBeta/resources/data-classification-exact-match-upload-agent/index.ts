import type { INodeProperties } from 'n8n-workflow';

export const dataClassificationExactMatchUploadAgentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Upload Agent"
					]
				}
			},
			"options": [
				{
					"name": "Data Classification List Exact Match Upload Agents",
					"value": "Data Classification List Exact Match Upload Agents",
					"action": "Get exactMatchUploadAgents from dataClassification",
					"description": "Get exactMatchUploadAgents from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/exactMatchUploadAgents"
						}
					}
				},
				{
					"name": "Data Classification Create Exact Match Upload Agents",
					"value": "Data Classification Create Exact Match Upload Agents",
					"action": "Create new navigation property to exactMatchUploadAgents for dataClassification",
					"description": "Create new navigation property to exactMatchUploadAgents for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/exactMatchUploadAgents"
						}
					}
				},
				{
					"name": "Data Classification Delete Exact Match Upload Agents",
					"value": "Data Classification Delete Exact Match Upload Agents",
					"action": "Delete navigation property exactMatchUploadAgents for dataClassification",
					"description": "Delete navigation property exactMatchUploadAgents for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/exactMatchUploadAgents/{{$parameter[\"exactMatchUploadAgent-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Exact Match Upload Agents",
					"value": "Data Classification Get Exact Match Upload Agents",
					"action": "Get exactMatchUploadAgents from dataClassification",
					"description": "Get exactMatchUploadAgents from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/exactMatchUploadAgents/{{$parameter[\"exactMatchUploadAgent-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Exact Match Upload Agents",
					"value": "Data Classification Update Exact Match Upload Agents",
					"action": "Update the navigation property exactMatchUploadAgents in dataClassification",
					"description": "Update the navigation property exactMatchUploadAgents in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/exactMatchUploadAgents/{{$parameter[\"exactMatchUploadAgent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dataClassification/exactMatchUploadAgents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification List Exact Match Upload Agents"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchUploadAgents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Create Exact Match Upload Agents"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchUploadAgents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Create Exact Match Upload Agents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Delete Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Delete Exact Match Upload Agents"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Get Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Get Exact Match Upload Agents"
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
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Get Exact Match Upload Agents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Update Exact Match Upload Agents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Upload Agent"
					],
					"operation": [
						"Data Classification Update Exact Match Upload Agents"
					]
				}
			}
		},
];
