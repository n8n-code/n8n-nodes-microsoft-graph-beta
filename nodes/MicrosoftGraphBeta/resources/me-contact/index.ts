import type { INodeProperties } from 'n8n-workflow';

export const meContactDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					]
				}
			},
			"options": [
				{
					"name": "Me List Contacts",
					"value": "Me List Contacts",
					"action": "List contacts",
					"description": "Get contacts in the user's mailbox. There are two scenarios where an app can get contacts in another user's contact folder:",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts"
						}
					}
				},
				{
					"name": "Me Create Contacts",
					"value": "Me Create Contacts",
					"action": "Create contact",
					"description": "Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contacts"
						}
					}
				},
				{
					"name": "Me Delete Contacts",
					"value": "Me Delete Contacts",
					"action": "Delete navigation property contacts for me",
					"description": "Delete navigation property contacts for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Contacts",
					"value": "Me Get Contacts",
					"action": "Get contacts from me",
					"description": "The user's contacts. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Contacts",
					"value": "Me Update Contacts",
					"action": "Update the navigation property contacts in me",
					"description": "Update the navigation property contacts in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts List Extensions",
					"value": "Me Contacts List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Contacts Create Extensions",
					"value": "Me Contacts Create Extensions",
					"action": "Create new navigation property to extensions for me",
					"description": "Create new navigation property to extensions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Contacts Delete Extensions",
					"value": "Me Contacts Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts Get Extensions",
					"value": "Me Contacts Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts Update Extensions",
					"value": "Me Contacts Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts List Multi Value Extended Properties",
					"value": "Me Contacts List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contacts Create Multi Value Extended Properties",
					"value": "Me Contacts Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contacts Delete Multi Value Extended Properties",
					"value": "Me Contacts Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts Get Multi Value Extended Properties",
					"value": "Me Contacts Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts Update Multi Value Extended Properties",
					"value": "Me Contacts Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts Get Photo",
					"value": "Me Contacts Get Photo",
					"action": "Get photo from me",
					"description": "Optional contact picture. You can get or set a photo for a contact.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Me Contacts Update Photo",
					"value": "Me Contacts Update Photo",
					"action": "Update the navigation property photo in me",
					"description": "Update the navigation property photo in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Me Contacts Get Photo Content",
					"value": "Me Contacts Get Photo Content",
					"action": "Get media content for the navigation property photo from me",
					"description": "Get media content for the navigation property photo from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Me Contacts Update Photo Content",
					"value": "Me Contacts Update Photo Content",
					"action": "Update media content for the navigation property photo in me",
					"description": "Update media content for the navigation property photo in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Me Contacts List Single Value Extended Properties",
					"value": "Me Contacts List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contacts Create Single Value Extended Properties",
					"value": "Me Contacts Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contacts Delete Single Value Extended Properties",
					"value": "Me Contacts Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts Get Single Value Extended Properties",
					"value": "Me Contacts Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contacts Update Single Value Extended Properties",
					"value": "Me Contacts Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me List Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me List Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me List Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me List Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me List Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me List Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me List Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me List Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contacts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Delete Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me Delete Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Get Contacts"
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
						"Me Contact"
					],
					"operation": [
						"Me Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contacts/{contact-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Delete Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Extensions"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contacts/{contact-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Delete Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Multi Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Photo"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/contacts/{contact-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contacts/{contact-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Delete Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Single Value Extended Properties"
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
						"Me Contact"
					],
					"operation": [
						"Me Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact"
					],
					"operation": [
						"Me Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
];
