import type { INodeProperties } from 'n8n-workflow';

export const identityProtectionServicePrincipalRiskDetectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Service Principal Risk Detection"
					]
				}
			},
			"options": [
				{
					"name": "Identity Protection List Service Principal Risk Detections",
					"value": "Identity Protection List Service Principal Risk Detections",
					"action": "List servicePrincipalRiskDetections",
					"description": "Retrieve the properties of a collection of servicePrincipalRiskDetection objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/servicePrincipalRiskDetections"
						}
					}
				},
				{
					"name": "Identity Protection Create Service Principal Risk Detections",
					"value": "Identity Protection Create Service Principal Risk Detections",
					"action": "Create new navigation property to servicePrincipalRiskDetections for identityProtection",
					"description": "Create new navigation property to servicePrincipalRiskDetections for identityProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/servicePrincipalRiskDetections"
						}
					}
				},
				{
					"name": "Identity Protection Delete Service Principal Risk Detections",
					"value": "Identity Protection Delete Service Principal Risk Detections",
					"action": "Delete navigation property servicePrincipalRiskDetections for identityProtection",
					"description": "Delete navigation property servicePrincipalRiskDetections for identityProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityProtection/servicePrincipalRiskDetections/{{$parameter[\"servicePrincipalRiskDetection-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Get Service Principal Risk Detections",
					"value": "Identity Protection Get Service Principal Risk Detections",
					"action": "Get servicePrincipalRiskDetections from identityProtection",
					"description": "Represents information about detected at-risk service principals in an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/servicePrincipalRiskDetections/{{$parameter[\"servicePrincipalRiskDetection-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Update Service Principal Risk Detections",
					"value": "Identity Protection Update Service Principal Risk Detections",
					"action": "Update the navigation property servicePrincipalRiskDetections in identityProtection",
					"description": "Update the navigation property servicePrincipalRiskDetections in identityProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityProtection/servicePrincipalRiskDetections/{{$parameter[\"servicePrincipalRiskDetection-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identityProtection/servicePrincipalRiskDetections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection List Service Principal Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/servicePrincipalRiskDetections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Create Service Principal Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/servicePrincipalRiskDetections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Create Service Principal Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Delete Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Delete Service Principal Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Get Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Get Service Principal Risk Detections"
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
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Get Service Principal Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Update Service Principal Risk Detections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Service Principal Risk Detection"
					],
					"operation": [
						"Identity Protection Update Service Principal Risk Detections"
					]
				}
			}
		},
];
