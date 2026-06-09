import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsBaselineDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Baselines",
					"value": "Device Management List User Experience Analytics Baselines",
					"action": "Get userExperienceAnalyticsBaselines from deviceManagement",
					"description": "User experience analytics baselines",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Baselines",
					"value": "Device Management Create User Experience Analytics Baselines",
					"action": "Create new navigation property to userExperienceAnalyticsBaselines for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsBaselines for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Baselines",
					"value": "Device Management Delete User Experience Analytics Baselines",
					"action": "Delete navigation property userExperienceAnalyticsBaselines for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsBaselines for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Baselines",
					"value": "Device Management Get User Experience Analytics Baselines",
					"action": "Get userExperienceAnalyticsBaselines from deviceManagement",
					"description": "User experience analytics baselines",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Baselines",
					"value": "Device Management Update User Experience Analytics Baselines",
					"action": "Update the navigation property userExperienceAnalyticsBaselines in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsBaselines in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Baselines Get App Health Metrics",
					"value": "Device Management User Experience Analytics Baselines Get App Health Metrics",
					"action": "Get appHealthMetrics from deviceManagement",
					"description": "The user experience analytics app health metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}/appHealthMetrics"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Baselines Get Battery Health Metrics",
					"value": "Device Management User Experience Analytics Baselines Get Battery Health Metrics",
					"action": "Get batteryHealthMetrics from deviceManagement",
					"description": "The user experience analytics battery health metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}/batteryHealthMetrics"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Baselines Get Best Practices Metrics",
					"value": "Device Management User Experience Analytics Baselines Get Best Practices Metrics",
					"action": "Get bestPracticesMetrics from deviceManagement",
					"description": "The user experience analytics best practices metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}/bestPracticesMetrics"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Baselines Get Device Boot Performance Metrics",
					"value": "Device Management User Experience Analytics Baselines Get Device Boot Performance Metrics",
					"action": "Get deviceBootPerformanceMetrics from deviceManagement",
					"description": "The user experience analytics device boot performance metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}/deviceBootPerformanceMetrics"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Baselines Get Reboot Analytics Metrics",
					"value": "Device Management User Experience Analytics Baselines Get Reboot Analytics Metrics",
					"action": "Get rebootAnalyticsMetrics from deviceManagement",
					"description": "The user experience analytics reboot analytics metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}/rebootAnalyticsMetrics"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Baselines Get Resource Performance Metrics",
					"value": "Device Management User Experience Analytics Baselines Get Resource Performance Metrics",
					"action": "Get resourcePerformanceMetrics from deviceManagement",
					"description": "The user experience analytics resource performance metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}/resourcePerformanceMetrics"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Baselines Get Work From Anywhere Metrics",
					"value": "Device Management User Experience Analytics Baselines Get Work From Anywhere Metrics",
					"action": "Get workFromAnywhereMetrics from deviceManagement",
					"description": "The user experience analytics work from anywhere metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBaselines/{{$parameter[\"userExperienceAnalyticsBaseline-id\"]}}/workFromAnywhereMetrics"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management List User Experience Analytics Baselines"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBaselines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Create User Experience Analytics Baselines"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsBaselines<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Create User Experience Analytics Baselines"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Baselines"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Get User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Get User Experience Analytics Baselines"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Get User Experience Analytics Baselines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Update User Experience Analytics Baselines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management Update User Experience Analytics Baselines"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/appHealthMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get App Health Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get App Health Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get App Health Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/batteryHealthMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Battery Health Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Battery Health Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Battery Health Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Best Practices Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Best Practices Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Best Practices Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Device Boot Performance Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Device Boot Performance Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Device Boot Performance Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Reboot Analytics Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Reboot Analytics Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Reboot Analytics Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Resource Performance Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Resource Performance Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Resource Performance Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/workFromAnywhereMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Work From Anywhere Metrics"
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
						"Device Management User Experience Analytics Baseline"
					],
					"operation": [
						"Device Management User Experience Analytics Baselines Get Work From Anywhere Metrics"
					]
				}
			}
		},
];
