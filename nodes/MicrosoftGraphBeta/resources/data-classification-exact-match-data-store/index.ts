import type { INodeProperties } from 'n8n-workflow';

export const dataClassificationExactMatchDataStoreDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					]
				}
			},
			"options": [
				{
					"name": "Data Classification List Exact Match Data Stores",
					"value": "Data Classification List Exact Match Data Stores",
					"action": "Get exactMatchDataStores from dataClassification",
					"description": "Get exactMatchDataStores from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/exactMatchDataStores"
						}
					}
				},
				{
					"name": "Data Classification Create Exact Match Data Stores",
					"value": "Data Classification Create Exact Match Data Stores",
					"action": "Create new navigation property to exactMatchDataStores for dataClassification",
					"description": "Create new navigation property to exactMatchDataStores for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/exactMatchDataStores"
						}
					}
				},
				{
					"name": "Data Classification Delete Exact Match Data Stores",
					"value": "Data Classification Delete Exact Match Data Stores",
					"action": "Delete navigation property exactMatchDataStores for dataClassification",
					"description": "Delete navigation property exactMatchDataStores for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Exact Match Data Stores",
					"value": "Data Classification Get Exact Match Data Stores",
					"action": "Get exactMatchDataStores from dataClassification",
					"description": "Get exactMatchDataStores from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Exact Match Data Stores",
					"value": "Data Classification Update Exact Match Data Stores",
					"action": "Update the navigation property exactMatchDataStores in dataClassification",
					"description": "Update the navigation property exactMatchDataStores in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores List Sessions",
					"value": "Data Classification Exact Match Data Stores List Sessions",
					"action": "Get sessions from dataClassification",
					"description": "Get sessions from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Create Sessions",
					"value": "Data Classification Exact Match Data Stores Create Sessions",
					"action": "Create new navigation property to sessions for dataClassification",
					"description": "Create new navigation property to sessions for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Delete Sessions",
					"value": "Data Classification Exact Match Data Stores Delete Sessions",
					"action": "Delete navigation property sessions for dataClassification",
					"description": "Delete navigation property sessions for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Get Sessions",
					"value": "Data Classification Exact Match Data Stores Get Sessions",
					"action": "Get sessions from dataClassification",
					"description": "Get sessions from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Update Sessions",
					"value": "Data Classification Exact Match Data Stores Update Sessions",
					"action": "Update the navigation property sessions in dataClassification",
					"description": "Update the navigation property sessions in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Sessions Delete Upload Agent",
					"value": "Data Classification Exact Match Data Stores Sessions Delete Upload Agent",
					"action": "Delete navigation property uploadAgent for dataClassification",
					"description": "Delete navigation property uploadAgent for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}/uploadAgent"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Sessions Get Upload Agent",
					"value": "Data Classification Exact Match Data Stores Sessions Get Upload Agent",
					"action": "Get uploadAgent from dataClassification",
					"description": "Get uploadAgent from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}/uploadAgent"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Sessions Update Upload Agent",
					"value": "Data Classification Exact Match Data Stores Sessions Update Upload Agent",
					"action": "Update the navigation property uploadAgent in dataClassification",
					"description": "Update the navigation property uploadAgent in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}/uploadAgent"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dataClassification/exactMatchDataStores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification List Exact Match Data Stores"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchDataStores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Create Exact Match Data Stores"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchDataStores<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Create Exact Match Data Stores"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Delete Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Delete Exact Match Data Stores"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Get Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Get Exact Match Data Stores"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Get Exact Match Data Stores"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Update Exact Match Data Stores"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Update Exact Match Data Stores"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores List Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Create Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Create Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Delete Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Delete Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Get Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Get Sessions"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Get Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Update Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Update Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Sessions Delete Upload Agent"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Sessions Delete Upload Agent"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Sessions Get Upload Agent"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Sessions Get Upload Agent"
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
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Sessions Get Upload Agent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Sessions Update Upload Agent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Exact Match Data Store"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Sessions Update Upload Agent"
					]
				}
			}
		},
];
