import type { INodeProperties } from 'n8n-workflow';

export const applicationsExtensionPropertyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Extension Property"
					]
				}
			},
			"options": [
				{
					"name": "Applications List Extension Properties",
					"value": "Applications List Extension Properties",
					"action": "List extensionProperties (directory extensions)",
					"description": "Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/extensionProperties"
						}
					}
				},
				{
					"name": "Applications Create Extension Properties",
					"value": "Applications Create Extension Properties",
					"action": "Create extensionProperty (directory extension)",
					"description": "Create a new directory extension definition, represented by an extensionProperty object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/extensionProperties"
						}
					}
				},
				{
					"name": "Applications Delete Extension Properties",
					"value": "Applications Delete Extension Properties",
					"action": "Delete navigation property extensionProperties for applications",
					"description": "Delete navigation property extensionProperties for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/extensionProperties/{{$parameter[\"extensionProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Get Extension Properties",
					"value": "Applications Get Extension Properties",
					"action": "Get extensionProperties from applications",
					"description": "Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/extensionProperties/{{$parameter[\"extensionProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Update Extension Properties",
					"value": "Applications Update Extension Properties",
					"action": "Update the navigation property extensionProperties in applications",
					"description": "Update the navigation property extensionProperties in applications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/extensionProperties/{{$parameter[\"extensionProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /applications/{application-id}/extensionProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications List Extension Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/extensionProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Extension Property"
					],
					"operation": [
						"Applications Create Extension Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/extensionProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Extension Property"
					],
					"operation": [
						"Applications Create Extension Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Extension Property"
					],
					"operation": [
						"Applications Delete Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications Delete Extension Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/extensionProperties/{extensionProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Extension Property"
					],
					"operation": [
						"Applications Get Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications Get Extension Properties"
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
						"Applications Extension Property"
					],
					"operation": [
						"Applications Get Extension Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Extension Property"
					],
					"operation": [
						"Applications Update Extension Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Extension Property"
					],
					"operation": [
						"Applications Update Extension Properties"
					]
				}
			}
		},
];
