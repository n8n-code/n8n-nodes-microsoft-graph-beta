import type { INodeProperties } from 'n8n-workflow';

export const dataPolicyOperationsDataPolicyOperationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Policy Operations Data Policy Operation"
					]
				}
			},
			"options": [
				{
					"name": "Data Policy Operations Data Policy Operation List Data Policy Operation",
					"value": "Data Policy Operations Data Policy Operation List Data Policy Operation",
					"action": "Get dataPolicyOperation",
					"description": "Retrieve the properties of the dataPolicyOperation object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataPolicyOperations"
						}
					}
				},
				{
					"name": "Data Policy Operations Data Policy Operation Create Data Policy Operation",
					"value": "Data Policy Operations Data Policy Operation Create Data Policy Operation",
					"action": "Add new entity to dataPolicyOperations",
					"description": "Add new entity to dataPolicyOperations",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataPolicyOperations"
						}
					}
				},
				{
					"name": "Data Policy Operations Data Policy Operation Delete Data Policy Operation",
					"value": "Data Policy Operations Data Policy Operation Delete Data Policy Operation",
					"action": "Delete entity from dataPolicyOperations",
					"description": "Delete entity from dataPolicyOperations",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataPolicyOperations/{{$parameter[\"dataPolicyOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Data Policy Operations Data Policy Operation Get Data Policy Operation",
					"value": "Data Policy Operations Data Policy Operation Get Data Policy Operation",
					"action": "Get dataPolicyOperation",
					"description": "Retrieve the properties of the dataPolicyOperation object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataPolicyOperations/{{$parameter[\"dataPolicyOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Data Policy Operations Data Policy Operation Update Data Policy Operation",
					"value": "Data Policy Operations Data Policy Operation Update Data Policy Operation",
					"action": "Update entity in dataPolicyOperations",
					"description": "Update entity in dataPolicyOperations",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataPolicyOperations/{{$parameter[\"dataPolicyOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dataPolicyOperations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation List Data Policy Operation"
					]
				}
			}
		},
		{
			"displayName": "POST /dataPolicyOperations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Create Data Policy Operation"
					]
				}
			}
		},
		{
			"displayName": "POST /dataPolicyOperations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Create Data Policy Operation"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataPolicyOperations/{dataPolicyOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Delete Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Delete Data Policy Operation"
					]
				}
			}
		},
		{
			"displayName": "GET /dataPolicyOperations/{dataPolicyOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Get Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Get Data Policy Operation"
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
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Get Data Policy Operation"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataPolicyOperations/{dataPolicyOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Update Data Policy Operation"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataPolicyOperations/{dataPolicyOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Policy Operations Data Policy Operation"
					],
					"operation": [
						"Data Policy Operations Data Policy Operation Update Data Policy Operation"
					]
				}
			}
		},
];
