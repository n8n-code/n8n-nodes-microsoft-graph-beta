import type { INodeProperties } from 'n8n-workflow';

export const employeeExperienceLearningProviderDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					]
				}
			},
			"options": [
				{
					"name": "Employee Experience List Learning Providers",
					"value": "Employee Experience List Learning Providers",
					"action": "List learningProviders",
					"description": "Get a list of the learningProvider resources registered in Viva Learning for a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/employeeExperience/learningProviders"
						}
					}
				},
				{
					"name": "Employee Experience Create Learning Providers",
					"value": "Employee Experience Create Learning Providers",
					"action": "Create learningProvider",
					"description": "Create a new learningProvider object and register it with Viva Learning using the specified display name and logos for different themes.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/employeeExperience/learningProviders"
						}
					}
				},
				{
					"name": "Employee Experience Delete Learning Providers",
					"value": "Employee Experience Delete Learning Providers",
					"action": "Delete navigation property learningProviders for employeeExperience",
					"description": "Delete navigation property learningProviders for employeeExperience",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/employeeExperience/learningProviders/{{$parameter[\"learningProvider-id\"]}}"
						}
					}
				},
				{
					"name": "Employee Experience Get Learning Providers",
					"value": "Employee Experience Get Learning Providers",
					"action": "Get learningProviders from employeeExperience",
					"description": "A collection of learning providers.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/employeeExperience/learningProviders/{{$parameter[\"learningProvider-id\"]}}"
						}
					}
				},
				{
					"name": "Employee Experience Update Learning Providers",
					"value": "Employee Experience Update Learning Providers",
					"action": "Update the navigation property learningProviders in employeeExperience",
					"description": "Update the navigation property learningProviders in employeeExperience",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/employeeExperience/learningProviders/{{$parameter[\"learningProvider-id\"]}}"
						}
					}
				},
				{
					"name": "Employee Experience Learning Providers List Learning Contents",
					"value": "Employee Experience Learning Providers List Learning Contents",
					"action": "List learningContents",
					"description": "Get a list of the learningContent resources and their properties. This list represents the metadata of the specified provider's content in Viva Learning.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/employeeExperience/learningProviders/{{$parameter[\"learningProvider-id\"]}}/learningContents"
						}
					}
				},
				{
					"name": "Employee Experience Learning Providers Create Learning Contents",
					"value": "Employee Experience Learning Providers Create Learning Contents",
					"action": "Create new navigation property to learningContents for employeeExperience",
					"description": "Create new navigation property to learningContents for employeeExperience",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/employeeExperience/learningProviders/{{$parameter[\"learningProvider-id\"]}}/learningContents"
						}
					}
				},
				{
					"name": "Employee Experience Learning Providers Delete Learning Contents",
					"value": "Employee Experience Learning Providers Delete Learning Contents",
					"action": "Delete navigation property learningContents for employeeExperience",
					"description": "Delete navigation property learningContents for employeeExperience",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/employeeExperience/learningProviders/{{$parameter[\"learningProvider-id\"]}}/learningContents/{{$parameter[\"learningContent-id\"]}}"
						}
					}
				},
				{
					"name": "Employee Experience Learning Providers Get Learning Contents",
					"value": "Employee Experience Learning Providers Get Learning Contents",
					"action": "Get learningContents from employeeExperience",
					"description": "Learning catalog items for the provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/employeeExperience/learningProviders/{{$parameter[\"learningProvider-id\"]}}/learningContents/{{$parameter[\"learningContent-id\"]}}"
						}
					}
				},
				{
					"name": "Employee Experience Learning Providers Update Learning Contents",
					"value": "Employee Experience Learning Providers Update Learning Contents",
					"action": "Update the navigation property learningContents in employeeExperience",
					"description": "Update the navigation property learningContents in employeeExperience",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/employeeExperience/learningProviders/{{$parameter[\"learningProvider-id\"]}}/learningContents/{{$parameter[\"learningContent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /employeeExperience/learningProviders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience List Learning Providers"
					]
				}
			}
		},
		{
			"displayName": "POST /employeeExperience/learningProviders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Create Learning Providers"
					]
				}
			}
		},
		{
			"displayName": "POST /employeeExperience/learningProviders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Create Learning Providers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /employeeExperience/learningProviders/{learningProvider-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Delete Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Delete Learning Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /employeeExperience/learningProviders/{learningProvider-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Get Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Get Learning Providers"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Get Learning Providers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /employeeExperience/learningProviders/{learningProvider-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Update Learning Providers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /employeeExperience/learningProviders/{learningProvider-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Update Learning Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers List Learning Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Create Learning Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Create Learning Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Delete Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Delete Learning Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Get Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Get Learning Contents"
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
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Get Learning Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Update Learning Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Learning Provider"
					],
					"operation": [
						"Employee Experience Learning Providers Update Learning Contents"
					]
				}
			}
		},
];
