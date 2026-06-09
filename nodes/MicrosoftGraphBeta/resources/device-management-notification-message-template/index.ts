import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementNotificationMessageTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Notification Message Templates",
					"value": "Device Management List Notification Message Templates",
					"action": "Get notificationMessageTemplates from deviceManagement",
					"description": "The Notification Message Templates.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/notificationMessageTemplates"
						}
					}
				},
				{
					"name": "Device Management Create Notification Message Templates",
					"value": "Device Management Create Notification Message Templates",
					"action": "Create new navigation property to notificationMessageTemplates for deviceManagement",
					"description": "Create new navigation property to notificationMessageTemplates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/notificationMessageTemplates"
						}
					}
				},
				{
					"name": "Device Management Delete Notification Message Templates",
					"value": "Device Management Delete Notification Message Templates",
					"action": "Delete navigation property notificationMessageTemplates for deviceManagement",
					"description": "Delete navigation property notificationMessageTemplates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Notification Message Templates",
					"value": "Device Management Get Notification Message Templates",
					"action": "Get notificationMessageTemplates from deviceManagement",
					"description": "The Notification Message Templates.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Notification Message Templates",
					"value": "Device Management Update Notification Message Templates",
					"action": "Update the navigation property notificationMessageTemplates in deviceManagement",
					"description": "Update the navigation property notificationMessageTemplates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Notification Message Templates List Localized Notification Messages",
					"value": "Device Management Notification Message Templates List Localized Notification Messages",
					"action": "Get localizedNotificationMessages from deviceManagement",
					"description": "The list of localized messages for this Notification Message Template.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}/localizedNotificationMessages"
						}
					}
				},
				{
					"name": "Device Management Notification Message Templates Create Localized Notification Messages",
					"value": "Device Management Notification Message Templates Create Localized Notification Messages",
					"action": "Create new navigation property to localizedNotificationMessages for deviceManagement",
					"description": "Create new navigation property to localizedNotificationMessages for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}/localizedNotificationMessages"
						}
					}
				},
				{
					"name": "Device Management Notification Message Templates Delete Localized Notification Messages",
					"value": "Device Management Notification Message Templates Delete Localized Notification Messages",
					"action": "Delete navigation property localizedNotificationMessages for deviceManagement",
					"description": "Delete navigation property localizedNotificationMessages for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}/localizedNotificationMessages/{{$parameter[\"localizedNotificationMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Notification Message Templates Get Localized Notification Messages",
					"value": "Device Management Notification Message Templates Get Localized Notification Messages",
					"action": "Get localizedNotificationMessages from deviceManagement",
					"description": "The list of localized messages for this Notification Message Template.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}/localizedNotificationMessages/{{$parameter[\"localizedNotificationMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Notification Message Templates Update Localized Notification Messages",
					"value": "Device Management Notification Message Templates Update Localized Notification Messages",
					"action": "Update the navigation property localizedNotificationMessages in deviceManagement",
					"description": "Update the navigation property localizedNotificationMessages in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}/localizedNotificationMessages/{{$parameter[\"localizedNotificationMessage-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/notificationMessageTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management List Notification Message Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/notificationMessageTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Create Notification Message Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/notificationMessageTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Create Notification Message Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Delete Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Delete Notification Message Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Get Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Get Notification Message Templates"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Get Notification Message Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Update Notification Message Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Update Notification Message Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates List Localized Notification Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Create Localized Notification Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Create Localized Notification Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Delete Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Delete Localized Notification Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Get Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Get Localized Notification Messages"
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
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Get Localized Notification Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Update Localized Notification Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Notification Message Template"
					],
					"operation": [
						"Device Management Notification Message Templates Update Localized Notification Messages"
					]
				}
			}
		},
];
