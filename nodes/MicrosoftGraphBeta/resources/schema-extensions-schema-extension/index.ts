import type { INodeProperties } from 'n8n-workflow';

export const schemaExtensionsSchemaExtensionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Schema Extensions Schema Extension"
					]
				}
			},
			"options": [
				{
					"name": "Schema Extensions Schema Extension List Schema Extension",
					"value": "Schema Extensions Schema Extension List Schema Extension",
					"action": "List schemaExtensions",
					"description": "Get a list of schemaExtension objects in your tenant. The schema extensions can be `InDevelopment`, `Available`, or `Deprecated` and includes schema extensions:\n+ Created by any apps you own in the current tenant.\n+ Owned by other apps that are marked as `Available`.\n+ Created by other developers from other tenants and marked as `Available`. This is different from other APIs that only return tenant-specific data. Extension data created based on schema extension definitions is tenant-specific and can only be accessed by apps explicitly granted permission. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/schemaExtensions"
						}
					}
				},
				{
					"name": "Schema Extensions Schema Extension Create Schema Extension",
					"value": "Schema Extensions Schema Extension Create Schema Extension",
					"action": "Create schemaExtension",
					"description": "Create a new schemaExtension definition and its associated schema extension property to extend a supporting resource type. Schema extensions let you add strongly-typed custom data to a resource. The app that creates a schema extension is the owner app. Depending on the \nstate of the extension, the owner app, and only the owner app, may update or delete the extension.  See examples of how to define a schema extension that describes a training course, \nuse the schema extension definition to create a new group with training course data, and \nadd training course data to an existing group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/schemaExtensions"
						}
					}
				},
				{
					"name": "Schema Extensions Schema Extension Delete Schema Extension",
					"value": "Schema Extensions Schema Extension Delete Schema Extension",
					"action": "Delete schemaExtension",
					"description": "Delete the definition of a schema extension. Only the app that created the schema extension (owner app) can delete the schema extension definition, and only when the extension is in the `InDevelopment` state. Deleting a schema extension definition does not affect accessing custom data that has been added to resource instances based on that definition.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/schemaExtensions/{{$parameter[\"schemaExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Schema Extensions Schema Extension Get Schema Extension",
					"value": "Schema Extensions Schema Extension Get Schema Extension",
					"action": "Get schemaExtension",
					"description": "Get the properties of the specified schemaExtension definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/schemaExtensions/{{$parameter[\"schemaExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Schema Extensions Schema Extension Update Schema Extension",
					"value": "Schema Extensions Schema Extension Update Schema Extension",
					"action": "Update schemaExtension",
					"description": "Update properties in the definition of the specified schemaExtension. Additive updates to the extension can only be made when the extension is in the `InDevelopment` or `Available` status. This means custom properties or target resource types cannot be removed from the definition, but new custom properties can be added and the description of the extension changed. The update applies to all the resources that are included in the **targetTypes** property of the extension. These resources are among the supporting resource types. For delegated flows, the signed-in user can update a schema extension as long as the **owner** property of the extension is set to the **appId** of an application the signed-in user owns. That application can be the one that initially created the extension, or some other application owned by the signed-in user.  This criteria for the **owner** property allows a signed-in user to make updates through other applications they don't own, such as Microsoft Graph Explorer. When using Graph Explorer to update a **schemaExtension** resource, include the **owner** property in the PATCH request body. For more information, see the Extensions section in Known issues with Microsoft Graph.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/schemaExtensions/{{$parameter[\"schemaExtension-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /schemaExtensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension List Schema Extension"
					]
				}
			}
		},
		{
			"displayName": "POST /schemaExtensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Create Schema Extension"
					]
				}
			}
		},
		{
			"displayName": "POST /schemaExtensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Create Schema Extension"
					]
				}
			}
		},
		{
			"displayName": "DELETE /schemaExtensions/{schemaExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Delete Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Delete Schema Extension"
					]
				}
			}
		},
		{
			"displayName": "GET /schemaExtensions/{schemaExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Get Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Get Schema Extension"
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
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Get Schema Extension"
					]
				}
			}
		},
		{
			"displayName": "PATCH /schemaExtensions/{schemaExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Update Schema Extension"
					]
				}
			}
		},
		{
			"displayName": "PATCH /schemaExtensions/{schemaExtension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema Extensions Schema Extension"
					],
					"operation": [
						"Schema Extensions Schema Extension Update Schema Extension"
					]
				}
			}
		},
];
