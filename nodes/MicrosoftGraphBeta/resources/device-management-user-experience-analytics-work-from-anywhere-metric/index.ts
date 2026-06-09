import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsWorkFromAnywhereMetricDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Work From Anywhere Metrics",
					"value": "Device Management List User Experience Analytics Work From Anywhere Metrics",
					"action": "Get userExperienceAnalyticsWorkFromAnywhereMetrics from deviceManagement",
					"description": "User experience analytics work from anywhere metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Work From Anywhere Metrics",
					"value": "Device Management Create User Experience Analytics Work From Anywhere Metrics",
					"action": "Create new navigation property to userExperienceAnalyticsWorkFromAnywhereMetrics for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsWorkFromAnywhereMetrics for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Work From Anywhere Metrics",
					"value": "Device Management Delete User Experience Analytics Work From Anywhere Metrics",
					"action": "Delete navigation property userExperienceAnalyticsWorkFromAnywhereMetrics for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsWorkFromAnywhereMetrics for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereMetric-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Work From Anywhere Metrics",
					"value": "Device Management Get User Experience Analytics Work From Anywhere Metrics",
					"action": "Get userExperienceAnalyticsWorkFromAnywhereMetrics from deviceManagement",
					"description": "User experience analytics work from anywhere metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereMetric-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Work From Anywhere Metrics",
					"value": "Device Management Update User Experience Analytics Work From Anywhere Metrics",
					"action": "Update the navigation property userExperienceAnalyticsWorkFromAnywhereMetrics in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsWorkFromAnywhereMetrics in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereMetric-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices",
					"value": "Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices",
					"action": "Get metricDevices from deviceManagement",
					"description": "The work from anywhere metric devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereMetric-id\"]}}/metricDevices"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Work From Anywhere Metrics Create Metric Devices",
					"value": "Device Management User Experience Analytics Work From Anywhere Metrics Create Metric Devices",
					"action": "Create new navigation property to metricDevices for deviceManagement",
					"description": "Create new navigation property to metricDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereMetric-id\"]}}/metricDevices"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Work From Anywhere Metrics Delete Metric Devices",
					"value": "Device Management User Experience Analytics Work From Anywhere Metrics Delete Metric Devices",
					"action": "Delete navigation property metricDevices for deviceManagement",
					"description": "Delete navigation property metricDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereMetric-id\"]}}/metricDevices/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Work From Anywhere Metrics Get Metric Devices",
					"value": "Device Management User Experience Analytics Work From Anywhere Metrics Get Metric Devices",
					"action": "Get metricDevices from deviceManagement",
					"description": "The work from anywhere metric devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereMetric-id\"]}}/metricDevices/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Work From Anywhere Metrics Update Metric Devices",
					"value": "Device Management User Experience Analytics Work From Anywhere Metrics Update Metric Devices",
					"action": "Update the navigation property metricDevices in deviceManagement",
					"description": "Update the navigation property metricDevices in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereMetric-id\"]}}/metricDevices/{{$parameter[\"userExperienceAnalyticsWorkFromAnywhereDevice-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management List User Experience Analytics Work From Anywhere Metrics"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Create User Experience Analytics Work From Anywhere Metrics"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Create User Experience Analytics Work From Anywhere Metrics"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Work From Anywhere Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Get User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Get User Experience Analytics Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Get User Experience Analytics Work From Anywhere Metrics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Update User Experience Analytics Work From Anywhere Metrics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management Update User Experience Analytics Work From Anywhere Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics List Metric Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Create Metric Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Create Metric Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Delete Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Delete Metric Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Get Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Get Metric Devices"
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
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Get Metric Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Update Metric Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Metric"
					],
					"operation": [
						"Device Management User Experience Analytics Work From Anywhere Metrics Update Metric Devices"
					]
				}
			}
		},
];
