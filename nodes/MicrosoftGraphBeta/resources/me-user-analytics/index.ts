import type { INodeProperties } from 'n8n-workflow';

export const meUserAnalyticsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Analytics",
					"value": "Me Delete Analytics",
					"action": "Delete navigation property analytics for me",
					"description": "Delete navigation property analytics for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/analytics"
						}
					}
				},
				{
					"name": "Me Get Analytics",
					"value": "Me Get Analytics",
					"action": "Get analytics from me",
					"description": "Get analytics from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/analytics"
						}
					}
				},
				{
					"name": "Me Update Analytics",
					"value": "Me Update Analytics",
					"action": "Update the navigation property analytics in me",
					"description": "Update the navigation property analytics in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/analytics"
						}
					}
				},
				{
					"name": "Me Analytics List Activity Statistics",
					"value": "Me Analytics List Activity Statistics",
					"action": "Get activityStatistics from me",
					"description": "The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/analytics/activityStatistics"
						}
					}
				},
				{
					"name": "Me Analytics Create Activity Statistics",
					"value": "Me Analytics Create Activity Statistics",
					"action": "Create new navigation property to activityStatistics for me",
					"description": "Create new navigation property to activityStatistics for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/analytics/activityStatistics"
						}
					}
				},
				{
					"name": "Me Analytics Delete Activity Statistics",
					"value": "Me Analytics Delete Activity Statistics",
					"action": "Delete navigation property activityStatistics for me",
					"description": "Delete navigation property activityStatistics for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/analytics/activityStatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				},
				{
					"name": "Me Analytics Get Activity Statistics",
					"value": "Me Analytics Get Activity Statistics",
					"action": "Get activityStatistics from me",
					"description": "The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/analytics/activityStatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				},
				{
					"name": "Me Analytics Update Activity Statistics",
					"value": "Me Analytics Update Activity Statistics",
					"action": "Update the navigation property activityStatistics in me",
					"description": "Update the navigation property activityStatistics in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/analytics/activityStatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Delete Analytics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Delete Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /me/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Get Analytics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Get Analytics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Update Analytics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/analytics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Update Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /me/analytics/activityStatistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics List Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "POST /me/analytics/activityStatistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Create Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "POST /me/analytics/activityStatistics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Create Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/analytics/activityStatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Delete Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Delete Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "GET /me/analytics/activityStatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Get Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Get Activity Statistics"
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
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Get Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/analytics/activityStatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Update Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/analytics/activityStatistics/{activityStatistics-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Analytics"
					],
					"operation": [
						"Me Analytics Update Activity Statistics"
					]
				}
			}
		},
];
