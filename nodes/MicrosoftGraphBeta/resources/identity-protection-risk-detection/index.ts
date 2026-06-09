import type { INodeProperties } from 'n8n-workflow';

export const identityProtectionRiskDetectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risk Detection"
					]
				}
			},
			"options": [
				{
					"name": "Identity Protection List Risk Detections",
					"value": "Identity Protection List Risk Detections",
					"action": "List riskDetection",
					"description": "Retrieve the properties of a collection of **riskDetection** objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskDetections"
						}
					}
				},
				{
					"name": "Identity Protection Create Risk Detections",
					"value": "Identity Protection Create Risk Detections",
					"action": "Create new navigation property to riskDetections for identityProtection",
					"description": "Create new navigation property to riskDetections for identityProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskDetections"
						}
					}
				},
				{
					"name": "Identity Protection Delete Risk Detections",
					"value": "Identity Protection Delete Risk Detections",
					"action": "Delete navigation property riskDetections for identityProtection",
					"description": "Delete navigation property riskDetections for identityProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityProtection/riskDetections/{{$parameter[\"riskDetection-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Get Risk Detections",
					"value": "Identity Protection Get Risk Detections",
					"action": "Get riskDetections from identityProtection",
					"description": "Risk detection in Azure AD Identity Protection and the associated information about the detection.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskDetections/{{$parameter[\"riskDetection-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Update Risk Detections",
					"value": "Identity Protection Update Risk Detections",
					"action": "Update the navigation property riskDetections in identityProtection",
					"description": "Update the navigation property riskDetections in identityProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityProtection/riskDetections/{{$parameter[\"riskDetection-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identityProtection/riskDetections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection List Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskDetections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Create Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskDetections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Create Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityProtection/riskDetections/{riskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Delete Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Delete Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "GET /identityProtection/riskDetections/{riskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Get Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Get Risk Detections"
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
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Get Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskDetections/{riskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Update Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskDetections/{riskDetection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risk Detection"
					],
					"operation": [
						"Identity Protection Update Risk Detections"
					]
				}
			}
		},
];
