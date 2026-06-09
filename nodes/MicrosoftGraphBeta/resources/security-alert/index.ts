import type { INodeProperties } from 'n8n-workflow';

export const securityAlertDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					]
				}
			},
			"options": [
				{
					"name": "Security List Alerts",
					"value": "Security List Alerts",
					"action": "List alerts",
					"description": "Retrieve a list of alert objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/alerts"
						}
					}
				},
				{
					"name": "Security Create Alerts",
					"value": "Security Create Alerts",
					"action": "Create new navigation property to alerts for security",
					"description": "Create new navigation property to alerts for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/alerts"
						}
					}
				},
				{
					"name": "Security Get Alerts",
					"value": "Security Get Alerts",
					"action": "Get alerts from security",
					"description": "Notifications for suspicious or potential security issues in a customer’s tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/alerts/{{$parameter[\"alert-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Alerts",
					"value": "Security Update Alerts",
					"action": "Update the navigation property alerts in security",
					"description": "Update the navigation property alerts in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/alerts/{{$parameter[\"alert-id\"]}}"
						}
					}
				},
				{
					"name": "Security List Alerts v2",
					"value": "Security List Alerts v2",
					"action": "List alerts_v2",
					"description": "Get a list of alert resources that have been created to track suspicious activities in an organization. This operation lets you filter and sort through alerts to create an informed cyber security response. It exposes a collection of alerts that were flagged in your network, within the time range you specified in your environment retention policy. The most recent alerts are displayed at the top of the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/alerts_v2"
						}
					}
				},
				{
					"name": "Security Create Alerts v2",
					"value": "Security Create Alerts v2",
					"action": "Create new navigation property to alerts_v2 for security",
					"description": "Create new navigation property to alerts_v2 for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/alerts_v2"
						}
					}
				},
				{
					"name": "Security Delete Alerts v2",
					"value": "Security Delete Alerts v2",
					"action": "Delete navigation property alerts_v2 for security",
					"description": "Delete navigation property alerts_v2 for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/alerts_v2/{{$parameter[\"alert-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Alerts v2",
					"value": "Security Get Alerts v2",
					"action": "Get alerts_v2 from security",
					"description": "A collection of alerts in Microsoft 365 Defender.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/alerts_v2/{{$parameter[\"alert-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Alerts v2",
					"value": "Security Update Alerts v2",
					"action": "Update the navigation property alerts_v2 in security",
					"description": "Update the navigation property alerts_v2 in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/alerts_v2/{{$parameter[\"alert-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/alerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts"
					]
				}
			}
		},
		{
			"displayName": "POST /security/alerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Create Alerts"
					]
				}
			}
		},
		{
			"displayName": "POST /security/alerts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Create Alerts"
					]
				}
			}
		},
		{
			"displayName": "GET /security/alerts/{alert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Get Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security Get Alerts"
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
						"Security Alert"
					],
					"operation": [
						"Security Get Alerts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/alerts/{alert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Update Alerts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/alerts/{alert-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Update Alerts"
					]
				}
			}
		},
		{
			"displayName": "GET /security/alerts_v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security List Alerts v2"
					]
				}
			}
		},
		{
			"displayName": "POST /security/alerts_v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Create Alerts v2"
					]
				}
			}
		},
		{
			"displayName": "POST /security/alerts_v2<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Create Alerts v2"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/alerts_v2/{alert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Delete Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security Delete Alerts v2"
					]
				}
			}
		},
		{
			"displayName": "GET /security/alerts_v2/{alert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Get Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security Get Alerts v2"
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
						"Security Alert"
					],
					"operation": [
						"Security Get Alerts v2"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/alerts_v2/{alert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Update Alerts v2"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/alerts_v2/{alert-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Alert"
					],
					"operation": [
						"Security Update Alerts v2"
					]
				}
			}
		},
];
