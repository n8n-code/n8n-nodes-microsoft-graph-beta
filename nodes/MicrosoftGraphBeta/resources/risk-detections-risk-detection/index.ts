import type { INodeProperties } from 'n8n-workflow';

export const riskDetectionsRiskDetectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Detections Risk Detection"
					]
				}
			},
			"options": [
				{
					"name": "Risk Detections Risk Detection List Risk Detection",
					"value": "Risk Detections Risk Detection List Risk Detection",
					"action": "Get riskDetection",
					"description": "Retrieve the properties of a **riskDetection** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/riskDetections"
						}
					}
				},
				{
					"name": "Risk Detections Risk Detection Create Risk Detection",
					"value": "Risk Detections Risk Detection Create Risk Detection",
					"action": "Add new entity to riskDetections",
					"description": "Add new entity to riskDetections",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/riskDetections"
						}
					}
				},
				{
					"name": "Risk Detections Risk Detection Delete Risk Detection",
					"value": "Risk Detections Risk Detection Delete Risk Detection",
					"action": "Delete entity from riskDetections",
					"description": "Delete entity from riskDetections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/riskDetections/{{$parameter[\"riskDetection-id\"]}}"
						}
					}
				},
				{
					"name": "Risk Detections Risk Detection Get Risk Detection",
					"value": "Risk Detections Risk Detection Get Risk Detection",
					"action": "Get entity from riskDetections by key",
					"description": "Get entity from riskDetections by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/riskDetections/{{$parameter[\"riskDetection-id\"]}}"
						}
					}
				},
				{
					"name": "Risk Detections Risk Detection Update Risk Detection",
					"value": "Risk Detections Risk Detection Update Risk Detection",
					"action": "Update entity in riskDetections",
					"description": "Update entity in riskDetections",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/riskDetections/{{$parameter[\"riskDetection-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /riskDetections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection List Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection List Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection List Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection List Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection List Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection List Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection List Risk Detection"
					]
				}
			}
		},
		{
			"displayName": "POST /riskDetections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Create Risk Detection"
					]
				}
			}
		},
		{
			"displayName": "POST /riskDetections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Create Risk Detection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /riskDetections/{riskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Delete Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Delete Risk Detection"
					]
				}
			}
		},
		{
			"displayName": "GET /riskDetections/{riskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Get Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Get Risk Detection"
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
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Get Risk Detection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /riskDetections/{riskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Update Risk Detection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /riskDetections/{riskDetection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Detections Risk Detection"
					],
					"operation": [
						"Risk Detections Risk Detection Update Risk Detection"
					]
				}
			}
		},
];
