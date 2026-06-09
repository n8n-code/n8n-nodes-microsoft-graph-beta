import type { INodeProperties } from 'n8n-workflow';

export const meMessageDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					]
				}
			},
			"options": [
				{
					"name": "Me List Messages",
					"value": "Me List Messages",
					"action": "List messages",
					"description": "Get the messages in the signed-in user's mailbox (including the Deleted Items and Clutter folders).  Depending on the page size and mailbox data, getting messages from a mailbox can incur multiple requests. The default page size is 10 messages. Use `$top` to customize the page size, within the range of 1 and 1000. To improve the operation response time, use `$select` to specify the exact properties you need; see example 1 below. Fine-tune the values for `$select` and `$top`, especially when you must use a larger page size, as returning a page with hundreds of messages each with a full response payload may trigger the gateway timeout (HTTP 504). To get the next page of messages, simply apply the entire URL returned in `@odata.nextLink` to the next get-messages request. This URL includes any query parameters you may have specified in the initial request.  Do not try to extract the `$skip` value from the `@odata.nextLink` URL to manipulate responses. This API uses the `$skip` value to keep count of all the items it has gone through in the user's mailbox to return a page of message-type items. It's therefore possible that even in the initial response, the `$skip` value is larger than the page size. For more information, see Paging Microsoft Graph data in your app. You can filter on the messages and get only those that include a mention of the signed-in user. See an example below. \nBy default, the `GET /me/messages` operation does not return the **mentions** property. Use the `$expand` query parameter \nto find details of each mention in a message. There are two scenarios where an app can get messages in another user's mail folder:",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages"
						}
					}
				},
				{
					"name": "Me Create Messages",
					"value": "Me Create Messages",
					"action": "Create Message",
					"description": "Create a draft of a new message in either JSON or MIME format. When using JSON format, you can:\n- Include an attachment.\n- Use a mention to call out another user in the new message.\n- Update the draft later to add content to the **body** or change other message properties. When using MIME format:\n- Provide the applicable Internet message headers and the MIME content, all encoded in **base64** format in the request body.\n- /* Add any attachments and S/MIME properties to the MIME content. By default, this operation saves the draft in the Drafts folder. Send the draft message in a subsequent operation. Alternatively, send a new message in a single action, or create a draft to forward, to reply or to reply-all to an existing message.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/messages"
						}
					}
				},
				{
					"name": "Me Delete Messages",
					"value": "Me Delete Messages",
					"action": "Delete navigation property messages for me",
					"description": "Delete navigation property messages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Messages",
					"value": "Me Get Messages",
					"action": "Get messages from me",
					"description": "The messages in a mailbox or folder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Messages",
					"value": "Me Update Messages",
					"action": "Update the navigation property messages in me",
					"description": "Update the navigation property messages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Messages Content",
					"value": "Me Get Messages Content",
					"action": "Get media content for the navigation property messages from me",
					"description": "Get media content for the navigation property messages from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Update Messages Content",
					"value": "Me Update Messages Content",
					"action": "Update media content for the navigation property messages in me",
					"description": "Update media content for the navigation property messages in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Messages List Attachments",
					"value": "Me Messages List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to a message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Me Messages Create Attachments",
					"value": "Me Messages Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to a message.  An attachment can be one of the following types: All these types of attachment resources are derived from the attachment\nresource.  You can add an attachment to an existing message by posting to its attachments collection, or to a new \nmessage that is being drafted, or created and sent on the fly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Me Messages Delete Attachments",
					"value": "Me Messages Delete Attachments",
					"action": "Delete navigation property attachments for me",
					"description": "Delete navigation property attachments for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages Get Attachments",
					"value": "Me Messages Get Attachments",
					"action": "Get attachments from me",
					"description": "The fileAttachment and itemAttachment attachments for the message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages List Extensions",
					"value": "Me Messages List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Messages Create Extensions",
					"value": "Me Messages Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Messages Delete Extensions",
					"value": "Me Messages Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages Get Extensions",
					"value": "Me Messages Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages Update Extensions",
					"value": "Me Messages Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages List Mentions",
					"value": "Me Messages List Mentions",
					"action": "Get mentions from me",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Me Messages Create Mentions",
					"value": "Me Messages Create Mentions",
					"action": "Create new navigation property to mentions for me",
					"description": "Create new navigation property to mentions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Me Messages Delete Mentions",
					"value": "Me Messages Delete Mentions",
					"action": "Delete navigation property mentions for me",
					"description": "Delete navigation property mentions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages Get Mentions",
					"value": "Me Messages Get Mentions",
					"action": "Get mentions from me",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages List Multi Value Extended Properties",
					"value": "Me Messages List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Messages Create Multi Value Extended Properties",
					"value": "Me Messages Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Messages Delete Multi Value Extended Properties",
					"value": "Me Messages Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages Get Multi Value Extended Properties",
					"value": "Me Messages Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages Update Multi Value Extended Properties",
					"value": "Me Messages Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages List Single Value Extended Properties",
					"value": "Me Messages List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Messages Create Single Value Extended Properties",
					"value": "Me Messages Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Messages Delete Single Value Extended Properties",
					"value": "Me Messages Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages Get Single Value Extended Properties",
					"value": "Me Messages Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Messages Update Single Value Extended Properties",
					"value": "Me Messages Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me List Messages"
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
						"Me Message"
					],
					"operation": [
						"Me List Messages"
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
						"Me Message"
					],
					"operation": [
						"Me List Messages"
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
						"Me Message"
					],
					"operation": [
						"Me List Messages"
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
						"Me Message"
					],
					"operation": [
						"Me List Messages"
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
						"Me Message"
					],
					"operation": [
						"Me List Messages"
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
						"Me Message"
					],
					"operation": [
						"Me List Messages"
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
						"Me Message"
					],
					"operation": [
						"Me List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Delete Messages"
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
						"Me Message"
					],
					"operation": [
						"Me Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Get Messages"
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
						"Me Message"
					],
					"operation": [
						"Me Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/messages/{message-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Get Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/messages/{message-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages List Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Get Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Attachments"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages List Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Get Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Extensions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/messages/{message-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages List Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/mentions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Get Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Mentions"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Get Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Multi Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/messages/{message-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Get Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Single Value Extended Properties"
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
						"Me Message"
					],
					"operation": [
						"Me Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Message"
					],
					"operation": [
						"Me Messages Update Single Value Extended Properties"
					]
				}
			}
		},
];
