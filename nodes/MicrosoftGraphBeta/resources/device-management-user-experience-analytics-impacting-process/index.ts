import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsImpactingProcessDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Impacting Process"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Experience Analytics Impacting Process",
					"value": "Device Management List User Experience Analytics Impacting Process",
					"action": "Get userExperienceAnalyticsImpactingProcess from deviceManagement",
					"description": "User experience analytics impacting process",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsImpactingProcess"
						}
					}
				},
				{
					"name": "Device Management Create User Experience Analytics Impacting Process",
					"value": "Device Management Create User Experience Analytics Impacting Process",
					"action": "Create new navigation property to userExperienceAnalyticsImpactingProcess for deviceManagement",
					"description": "Create new navigation property to userExperienceAnalyticsImpactingProcess for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsImpactingProcess"
						}
					}
				},
				{
					"name": "Device Management Delete User Experience Analytics Impacting Process",
					"value": "Device Management Delete User Experience Analytics Impacting Process",
					"action": "Delete navigation property userExperienceAnalyticsImpactingProcess for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsImpactingProcess for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsImpactingProcess/{{$parameter[\"userExperienceAnalyticsImpactingProcess-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Impacting Process",
					"value": "Device Management Get User Experience Analytics Impacting Process",
					"action": "Get userExperienceAnalyticsImpactingProcess from deviceManagement",
					"description": "User experience analytics impacting process",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsImpactingProcess/{{$parameter[\"userExperienceAnalyticsImpactingProcess-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Impacting Process",
					"value": "Device Management Update User Experience Analytics Impacting Process",
					"action": "Update the navigation property userExperienceAnalyticsImpactingProcess in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsImpactingProcess in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsImpactingProcess/{{$parameter[\"userExperienceAnalyticsImpactingProcess-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsImpactingProcess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management List User Experience Analytics Impacting Process"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsImpactingProcess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Create User Experience Analytics Impacting Process"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsImpactingProcess<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Create User Experience Analytics Impacting Process"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Impacting Process"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Get User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Get User Experience Analytics Impacting Process"
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
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Get User Experience Analytics Impacting Process"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Update User Experience Analytics Impacting Process"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Impacting Process"
					],
					"operation": [
						"Device Management Update User Experience Analytics Impacting Process"
					]
				}
			}
		},
];
