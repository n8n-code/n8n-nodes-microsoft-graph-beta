import type { INodeProperties } from 'n8n-workflow';

export const dataClassificationSensitiveTypeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitive Type"
					]
				}
			},
			"options": [
				{
					"name": "Data Classification List Sensitive Types",
					"value": "Data Classification List Sensitive Types",
					"action": "Get sensitiveTypes from dataClassification",
					"description": "Get sensitiveTypes from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/sensitiveTypes"
						}
					}
				},
				{
					"name": "Data Classification Create Sensitive Types",
					"value": "Data Classification Create Sensitive Types",
					"action": "Create new navigation property to sensitiveTypes for dataClassification",
					"description": "Create new navigation property to sensitiveTypes for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/sensitiveTypes"
						}
					}
				},
				{
					"name": "Data Classification Delete Sensitive Types",
					"value": "Data Classification Delete Sensitive Types",
					"action": "Delete navigation property sensitiveTypes for dataClassification",
					"description": "Delete navigation property sensitiveTypes for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/sensitiveTypes/{{$parameter[\"sensitiveType-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Sensitive Types",
					"value": "Data Classification Get Sensitive Types",
					"action": "Get sensitiveTypes from dataClassification",
					"description": "Get sensitiveTypes from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/sensitiveTypes/{{$parameter[\"sensitiveType-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Sensitive Types",
					"value": "Data Classification Update Sensitive Types",
					"action": "Update the navigation property sensitiveTypes in dataClassification",
					"description": "Update the navigation property sensitiveTypes in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/sensitiveTypes/{{$parameter[\"sensitiveType-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dataClassification/sensitiveTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification List Sensitive Types"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/sensitiveTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Create Sensitive Types"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/sensitiveTypes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Create Sensitive Types"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Delete Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Delete Sensitive Types"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/sensitiveTypes/{sensitiveType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Get Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Get Sensitive Types"
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
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Get Sensitive Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Update Sensitive Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitive Type"
					],
					"operation": [
						"Data Classification Update Sensitive Types"
					]
				}
			}
		},
];
