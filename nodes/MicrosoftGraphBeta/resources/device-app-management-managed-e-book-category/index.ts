import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementManagedEBookCategoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book Category"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Managed E Book Categories",
					"value": "Device App Management List Managed E Book Categories",
					"action": "Get managedEBookCategories from deviceAppManagement",
					"description": "The mobile eBook categories.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBookCategories"
						}
					}
				},
				{
					"name": "Device App Management Create Managed E Book Categories",
					"value": "Device App Management Create Managed E Book Categories",
					"action": "Create new navigation property to managedEBookCategories for deviceAppManagement",
					"description": "Create new navigation property to managedEBookCategories for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedEBookCategories"
						}
					}
				},
				{
					"name": "Device App Management Delete Managed E Book Categories",
					"value": "Device App Management Delete Managed E Book Categories",
					"action": "Delete navigation property managedEBookCategories for deviceAppManagement",
					"description": "Delete navigation property managedEBookCategories for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedEBookCategories/{{$parameter[\"managedEBookCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Managed E Book Categories",
					"value": "Device App Management Get Managed E Book Categories",
					"action": "Get managedEBookCategories from deviceAppManagement",
					"description": "The mobile eBook categories.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBookCategories/{{$parameter[\"managedEBookCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Managed E Book Categories",
					"value": "Device App Management Update Managed E Book Categories",
					"action": "Update the navigation property managedEBookCategories in deviceAppManagement",
					"description": "Update the navigation property managedEBookCategories in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedEBookCategories/{{$parameter[\"managedEBookCategory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBookCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management List Managed E Book Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBookCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Create Managed E Book Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBookCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Create Managed E Book Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Delete Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Delete Managed E Book Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Get Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Get Managed E Book Categories"
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
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Get Managed E Book Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Update Managed E Book Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book Category"
					],
					"operation": [
						"Device App Management Update Managed E Book Categories"
					]
				}
			}
		},
];
