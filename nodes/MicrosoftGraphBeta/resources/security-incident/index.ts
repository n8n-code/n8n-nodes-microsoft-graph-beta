import type { INodeProperties } from 'n8n-workflow';

export const securityIncidentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					]
				}
			},
			"options": [
				{
					"name": "Security List Incidents",
					"value": "Security List Incidents",
					"action": "List incidents",
					"description": "Get a list of incident objects that Microsoft 365 Defender has created to track attacks in an organization. Attacks are typically inflicted on different types of entities, such as devices, users, and mailboxes, resulting in multiple alert objects. Microsoft 365 Defender correlates alerts with the same attack techniques or the same attacker into an **incident**.  This operation allows you to filter and sort through incidents to create an informed cyber security response. It exposes a collection of incidents that were flagged in your network, within the time range you specified in your environment retention policy. The most recent incidents are displayed at the top of the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/incidents"
						}
					}
				},
				{
					"name": "Security Create Incidents",
					"value": "Security Create Incidents",
					"action": "Create new navigation property to incidents for security",
					"description": "Create new navigation property to incidents for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/incidents"
						}
					}
				},
				{
					"name": "Security Delete Incidents",
					"value": "Security Delete Incidents",
					"action": "Delete navigation property incidents for security",
					"description": "Delete navigation property incidents for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/incidents/{{$parameter[\"incident-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Incidents",
					"value": "Security Get Incidents",
					"action": "Get incidents from security",
					"description": "A collection of incidents in Microsoft 365 Defender, each of which is a set of correlated alerts and associated metadata that reflects the story of an attack.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/incidents/{{$parameter[\"incident-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Incidents",
					"value": "Security Update Incidents",
					"action": "Update the navigation property incidents in security",
					"description": "Update the navigation property incidents in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/incidents/{{$parameter[\"incident-id\"]}}"
						}
					}
				},
				{
					"name": "Security Incidents List Alerts",
					"value": "Security Incidents List Alerts",
					"action": "Get alerts from security",
					"description": "The list of related alerts. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/incidents/{{$parameter[\"incident-id\"]}}/alerts"
						}
					}
				},
				{
					"name": "Security Incidents Get Alerts",
					"value": "Security Incidents Get Alerts",
					"action": "Get alerts from security",
					"description": "The list of related alerts. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/incidents/{{$parameter[\"incident-id\"]}}/alerts/{{$parameter[\"alert-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/incidents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security List Incidents"
					]
				}
			}
		},
		{
			"displayName": "POST /security/incidents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security Create Incidents"
					]
				}
			}
		},
		{
			"displayName": "POST /security/incidents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security Create Incidents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/incidents/{incident-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security Delete Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security Delete Incidents"
					]
				}
			}
		},
		{
			"displayName": "GET /security/incidents/{incident-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security Get Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security Get Incidents"
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
						"Security Incident"
					],
					"operation": [
						"Security Get Incidents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/incidents/{incident-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security Update Incidents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/incidents/{incident-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security Update Incidents"
					]
				}
			}
		},
		{
			"displayName": "GET /security/incidents/{incident-id}/alerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents List Alerts"
					]
				}
			}
		},
		{
			"displayName": "GET /security/incidents/{incident-id}/alerts/{alert-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Incident"
					],
					"operation": [
						"Security Incidents Get Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents Get Alerts"
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
						"Security Incident"
					],
					"operation": [
						"Security Incidents Get Alerts"
					]
				}
			}
		},
];
