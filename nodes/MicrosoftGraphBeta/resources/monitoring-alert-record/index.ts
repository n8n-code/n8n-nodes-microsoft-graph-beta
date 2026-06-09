import type { INodeProperties } from 'n8n-workflow';

export const monitoringAlertRecordDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Record"
					]
				}
			},
			"options": [
				{
					"name": "Monitoring List Alert Records",
					"value": "Monitoring List Alert Records",
					"action": "List alertRecords",
					"description": "Get a list of the alertRecord objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/monitoring/alertRecords"
						}
					}
				},
				{
					"name": "Monitoring Create Alert Records",
					"value": "Monitoring Create Alert Records",
					"action": "Create new navigation property to alertRecords for monitoring",
					"description": "Create new navigation property to alertRecords for monitoring",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/monitoring/alertRecords"
						}
					}
				},
				{
					"name": "Monitoring Delete Alert Records",
					"value": "Monitoring Delete Alert Records",
					"action": "Delete navigation property alertRecords for monitoring",
					"description": "Delete navigation property alertRecords for monitoring",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/monitoring/alertRecords/{{$parameter[\"alertRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Monitoring Get Alert Records",
					"value": "Monitoring Get Alert Records",
					"action": "Get alertRecords from monitoring",
					"description": "The collection of records of alert events.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/monitoring/alertRecords/{{$parameter[\"alertRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Monitoring Update Alert Records",
					"value": "Monitoring Update Alert Records",
					"action": "Update the navigation property alertRecords in monitoring",
					"description": "Update the navigation property alertRecords in monitoring",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/monitoring/alertRecords/{{$parameter[\"alertRecord-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /monitoring/alertRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring List Alert Records"
					]
				}
			}
		},
		{
			"displayName": "POST /monitoring/alertRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Create Alert Records"
					]
				}
			}
		},
		{
			"displayName": "POST /monitoring/alertRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Create Alert Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /monitoring/alertRecords/{alertRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Delete Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Delete Alert Records"
					]
				}
			}
		},
		{
			"displayName": "GET /monitoring/alertRecords/{alertRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Get Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Get Alert Records"
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
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Get Alert Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /monitoring/alertRecords/{alertRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Update Alert Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /monitoring/alertRecords/{alertRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Record"
					],
					"operation": [
						"Monitoring Update Alert Records"
					]
				}
			}
		},
];
