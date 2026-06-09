import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsCategoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete User Experience Analytics App Health Overview",
					"value": "Device Management Delete User Experience Analytics App Health Overview",
					"action": "Delete navigation property userExperienceAnalyticsAppHealthOverview for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsAppHealthOverview for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthOverview"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics App Health Overview",
					"value": "Device Management Get User Experience Analytics App Health Overview",
					"action": "Get userExperienceAnalyticsAppHealthOverview from deviceManagement",
					"description": "User experience analytics appHealth overview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthOverview"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics App Health Overview",
					"value": "Device Management Update User Experience Analytics App Health Overview",
					"action": "Update the navigation property userExperienceAnalyticsAppHealthOverview in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsAppHealthOverview in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthOverview"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics App Health Overview List Metric Values",
					"value": "Device Management User Experience Analytics App Health Overview List Metric Values",
					"action": "Get metricValues from deviceManagement",
					"description": "The metric values for the user experience analytics category.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics App Health Overview Create Metric Values",
					"value": "Device Management User Experience Analytics App Health Overview Create Metric Values",
					"action": "Create new navigation property to metricValues for deviceManagement",
					"description": "Create new navigation property to metricValues for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics App Health Overview Delete Metric Values",
					"value": "Device Management User Experience Analytics App Health Overview Delete Metric Values",
					"action": "Delete navigation property metricValues for deviceManagement",
					"description": "Delete navigation property metricValues for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{{$parameter[\"userExperienceAnalyticsMetric-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics App Health Overview Get Metric Values",
					"value": "Device Management User Experience Analytics App Health Overview Get Metric Values",
					"action": "Get metricValues from deviceManagement",
					"description": "The metric values for the user experience analytics category.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{{$parameter[\"userExperienceAnalyticsMetric-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics App Health Overview Update Metric Values",
					"value": "Device Management User Experience Analytics App Health Overview Update Metric Values",
					"action": "Update the navigation property metricValues in deviceManagement",
					"description": "Update the navigation property metricValues in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{{$parameter[\"userExperienceAnalyticsMetric-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management List User Experience Analytics Categories",
					"value": "Device Management List User Experience Analytics Categories",
					"action": "Get userExperienceAnalyticsCategories from deviceManagement",
					"description": "User experience analytics categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Categories",
					"value": "Device Management Create User Experience Analytics Categories",
					"action": "Create new navigation property to userExperienceAnalyticsCategories for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Categories",
					"value": "Device Management Delete User Experience Analytics Categories",
					"action": "Delete navigation property userExperienceAnalyticsCategories for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories/{{$parameter[\"userExperienceAnalyticsCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Categories",
					"value": "Device Management Get User Experience Analytics Categories",
					"action": "Get userExperienceAnalyticsCategories from deviceManagement",
					"description": "User experience analytics categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories/{{$parameter[\"userExperienceAnalyticsCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Categories",
					"value": "Device Management Update User Experience Analytics Categories",
					"action": "Update the navigation property userExperienceAnalyticsCategories in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsCategories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories/{{$parameter[\"userExperienceAnalyticsCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Categories List Metric Values",
					"value": "Device Management User Experience Analytics Categories List Metric Values",
					"action": "Get metricValues from deviceManagement",
					"description": "The metric values for the user experience analytics category.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories/{{$parameter[\"userExperienceAnalyticsCategory-id\"]}}/metricValues"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Categories Create Metric Values",
					"value": "Device Management User Experience Analytics Categories Create Metric Values",
					"action": "Create new navigation property to metricValues for deviceManagement",
					"description": "Create new navigation property to metricValues for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories/{{$parameter[\"userExperienceAnalyticsCategory-id\"]}}/metricValues"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Categories Delete Metric Values",
					"value": "Device Management User Experience Analytics Categories Delete Metric Values",
					"action": "Delete navigation property metricValues for deviceManagement",
					"description": "Delete navigation property metricValues for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories/{{$parameter[\"userExperienceAnalyticsCategory-id\"]}}/metricValues/{{$parameter[\"userExperienceAnalyticsMetric-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Categories Get Metric Values",
					"value": "Device Management User Experience Analytics Categories Get Metric Values",
					"action": "Get metricValues from deviceManagement",
					"description": "The metric values for the user experience analytics category.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories/{{$parameter[\"userExperienceAnalyticsCategory-id\"]}}/metricValues/{{$parameter[\"userExperienceAnalyticsMetric-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Categories Update Metric Values",
					"value": "Device Management User Experience Analytics Categories Update Metric Values",
					"action": "Update the navigation property metricValues in deviceManagement",
					"description": "Update the navigation property metricValues in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsCategories/{{$parameter[\"userExperienceAnalyticsCategory-id\"]}}/metricValues/{{$parameter[\"userExperienceAnalyticsMetric-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Overview"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Delete User Experience Analytics App Health Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Overview"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Overview"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Get User Experience Analytics App Health Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Update User Experience Analytics App Health Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview List Metric Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Create Metric Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Create Metric Values"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Delete Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Delete Metric Values"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Get Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Get Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Get Metric Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Update Metric Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics App Health Overview Update Metric Values"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management List User Experience Analytics Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Create User Experience Analytics Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Create User Experience Analytics Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Get User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Get User Experience Analytics Categories"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Get User Experience Analytics Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Update User Experience Analytics Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management Update User Experience Analytics Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories List Metric Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Create Metric Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Create Metric Values"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Delete Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Delete Metric Values"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Get Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Get Metric Values"
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
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Get Metric Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Update Metric Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Category"
					],
					"operation": [
						"Device Management User Experience Analytics Categories Update Metric Values"
					]
				}
			}
		},
];
