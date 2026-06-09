import type { INodeProperties } from 'n8n-workflow';

export const usersContactDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					]
				}
			},
			"options": [
				{
					"name": "Users List Contacts",
					"value": "Users List Contacts",
					"action": "List contacts",
					"description": "Get contacts in the user's mailbox. There are two scenarios where an app can get contacts in another user's contact folder:",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts"
						}
					}
				},
				{
					"name": "Users Create Contacts",
					"value": "Users Create Contacts",
					"action": "Create contact",
					"description": "Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts"
						}
					}
				},
				{
					"name": "Users Delete Contacts",
					"value": "Users Delete Contacts",
					"action": "Delete navigation property contacts for users",
					"description": "Delete navigation property contacts for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Contacts",
					"value": "Users Get Contacts",
					"action": "Get contacts from users",
					"description": "The user's contacts. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Contacts",
					"value": "Users Update Contacts",
					"action": "Update the navigation property contacts in users",
					"description": "Update the navigation property contacts in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts List Extensions",
					"value": "Users Contacts List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Contacts Create Extensions",
					"value": "Users Contacts Create Extensions",
					"action": "Create new navigation property to extensions for users",
					"description": "Create new navigation property to extensions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Contacts Delete Extensions",
					"value": "Users Contacts Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts Get Extensions",
					"value": "Users Contacts Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts Update Extensions",
					"value": "Users Contacts Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts List Multi Value Extended Properties",
					"value": "Users Contacts List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contacts Create Multi Value Extended Properties",
					"value": "Users Contacts Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contacts Delete Multi Value Extended Properties",
					"value": "Users Contacts Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts Get Multi Value Extended Properties",
					"value": "Users Contacts Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts Update Multi Value Extended Properties",
					"value": "Users Contacts Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts Get Photo",
					"value": "Users Contacts Get Photo",
					"action": "Get photo from users",
					"description": "Optional contact picture. You can get or set a photo for a contact.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Users Contacts Update Photo",
					"value": "Users Contacts Update Photo",
					"action": "Update the navigation property photo in users",
					"description": "Update the navigation property photo in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Users Contacts Get Photo Content",
					"value": "Users Contacts Get Photo Content",
					"action": "Get media content for the navigation property photo from users",
					"description": "Get media content for the navigation property photo from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Users Contacts Update Photo Content",
					"value": "Users Contacts Update Photo Content",
					"action": "Update media content for the navigation property photo in users",
					"description": "Update media content for the navigation property photo in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Users Contacts List Single Value Extended Properties",
					"value": "Users Contacts List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contacts Create Single Value Extended Properties",
					"value": "Users Contacts Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contacts Delete Single Value Extended Properties",
					"value": "Users Contacts Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts Get Single Value Extended Properties",
					"value": "Users Contacts Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contacts Update Single Value Extended Properties",
					"value": "Users Contacts Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users List Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users List Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users List Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users List Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users List Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users List Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users List Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users List Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contacts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Delete Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users Delete Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Get Contacts"
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
						"Users Contact"
					],
					"operation": [
						"Users Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contacts/{contact-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Delete Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Extensions"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contacts/{contact-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Delete Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Multi Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Photo"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/contacts/{contact-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contacts/{contact-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Delete Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Single Value Extended Properties"
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
						"Users Contact"
					],
					"operation": [
						"Users Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact"
					],
					"operation": [
						"Users Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
];
