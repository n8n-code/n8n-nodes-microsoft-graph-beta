import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementMobileAppCategoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App Category"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Mobile App Categories",
					"value": "Device App Management List Mobile App Categories",
					"action": "Get mobileAppCategories from deviceAppManagement",
					"description": "The mobile app categories.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppCategories"
						}
					}
				},
				{
					"name": "Device App Management Create Mobile App Categories",
					"value": "Device App Management Create Mobile App Categories",
					"action": "Create new navigation property to mobileAppCategories for deviceAppManagement",
					"description": "Create new navigation property to mobileAppCategories for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileAppCategories"
						}
					}
				},
				{
					"name": "Device App Management Delete Mobile App Categories",
					"value": "Device App Management Delete Mobile App Categories",
					"action": "Delete navigation property mobileAppCategories for deviceAppManagement",
					"description": "Delete navigation property mobileAppCategories for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileAppCategories/{{$parameter[\"mobileAppCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Mobile App Categories",
					"value": "Device App Management Get Mobile App Categories",
					"action": "Get mobileAppCategories from deviceAppManagement",
					"description": "The mobile app categories.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileAppCategories/{{$parameter[\"mobileAppCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Mobile App Categories",
					"value": "Device App Management Update Mobile App Categories",
					"action": "Update the navigation property mobileAppCategories in deviceAppManagement",
					"description": "Update the navigation property mobileAppCategories in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileAppCategories/{{$parameter[\"mobileAppCategory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management List Mobile App Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Create Mobile App Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Create Mobile App Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Delete Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Delete Mobile App Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Get Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Get Mobile App Categories"
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
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Get Mobile App Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Update Mobile App Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App Category"
					],
					"operation": [
						"Device App Management Update Mobile App Categories"
					]
				}
			}
		},
];
