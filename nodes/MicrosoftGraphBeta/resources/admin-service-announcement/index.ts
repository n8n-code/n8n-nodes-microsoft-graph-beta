import type { INodeProperties } from 'n8n-workflow';

export const adminServiceAnnouncementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					]
				}
			},
			"options": [
				{
					"name": "Admin Delete Service Announcement",
					"value": "Admin Delete Service Announcement",
					"action": "Delete navigation property serviceAnnouncement for admin",
					"description": "Delete navigation property serviceAnnouncement for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/serviceAnnouncement"
						}
					}
				},
				{
					"name": "Admin Get Service Announcement",
					"value": "Admin Get Service Announcement",
					"action": "Get serviceAnnouncement from admin",
					"description": "A container for service communications resources. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement"
						}
					}
				},
				{
					"name": "Admin Update Service Announcement",
					"value": "Admin Update Service Announcement",
					"action": "Update the navigation property serviceAnnouncement in admin",
					"description": "Update the navigation property serviceAnnouncement in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/serviceAnnouncement"
						}
					}
				},
				{
					"name": "Admin Service Announcement List Health Overviews",
					"value": "Admin Service Announcement List Health Overviews",
					"action": "List healthOverviews",
					"description": "Retrieve the serviceHealth resources from the **healthOverviews** navigation property. This operation provides the health report of all subscribed services for a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/healthOverviews"
						}
					}
				},
				{
					"name": "Admin Service Announcement Create Health Overviews",
					"value": "Admin Service Announcement Create Health Overviews",
					"action": "Create new navigation property to healthOverviews for admin",
					"description": "Create new navigation property to healthOverviews for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/healthOverviews"
						}
					}
				},
				{
					"name": "Admin Service Announcement Delete Health Overviews",
					"value": "Admin Service Announcement Delete Health Overviews",
					"action": "Delete navigation property healthOverviews for admin",
					"description": "Delete navigation property healthOverviews for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Get Health Overviews",
					"value": "Admin Service Announcement Get Health Overviews",
					"action": "Get healthOverviews from admin",
					"description": "A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Update Health Overviews",
					"value": "Admin Service Announcement Update Health Overviews",
					"action": "Update the navigation property healthOverviews in admin",
					"description": "Update the navigation property healthOverviews in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Health Overviews List Issues",
					"value": "Admin Service Announcement Health Overviews List Issues",
					"action": "Get issues from admin",
					"description": "A collection of issues that happened on the service, with detailed information for each issue.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}/issues"
						}
					}
				},
				{
					"name": "Admin Service Announcement Health Overviews Create Issues",
					"value": "Admin Service Announcement Health Overviews Create Issues",
					"action": "Create new navigation property to issues for admin",
					"description": "Create new navigation property to issues for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}/issues"
						}
					}
				},
				{
					"name": "Admin Service Announcement Health Overviews Delete Issues",
					"value": "Admin Service Announcement Health Overviews Delete Issues",
					"action": "Delete navigation property issues for admin",
					"description": "Delete navigation property issues for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}/issues/{{$parameter[\"serviceHealthIssue-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Health Overviews Get Issues",
					"value": "Admin Service Announcement Health Overviews Get Issues",
					"action": "Get issues from admin",
					"description": "A collection of issues that happened on the service, with detailed information for each issue.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}/issues/{{$parameter[\"serviceHealthIssue-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Health Overviews Update Issues",
					"value": "Admin Service Announcement Health Overviews Update Issues",
					"action": "Update the navigation property issues in admin",
					"description": "Update the navigation property issues in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}/issues/{{$parameter[\"serviceHealthIssue-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement List Issues",
					"value": "Admin Service Announcement List Issues",
					"action": "List issues",
					"description": "Retrieve serviceHealthIssue resources from the **issues** navigation property. This operation retrieves information about all service health issues that exist for the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/issues"
						}
					}
				},
				{
					"name": "Admin Service Announcement Create Issues",
					"value": "Admin Service Announcement Create Issues",
					"action": "Create new navigation property to issues for admin",
					"description": "Create new navigation property to issues for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/issues"
						}
					}
				},
				{
					"name": "Admin Service Announcement Delete Issues",
					"value": "Admin Service Announcement Delete Issues",
					"action": "Delete navigation property issues for admin",
					"description": "Delete navigation property issues for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/serviceAnnouncement/issues/{{$parameter[\"serviceHealthIssue-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Get Issues",
					"value": "Admin Service Announcement Get Issues",
					"action": "Get issues from admin",
					"description": "A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/issues/{{$parameter[\"serviceHealthIssue-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Update Issues",
					"value": "Admin Service Announcement Update Issues",
					"action": "Update the navigation property issues in admin",
					"description": "Update the navigation property issues in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/serviceAnnouncement/issues/{{$parameter[\"serviceHealthIssue-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement List Messages",
					"value": "Admin Service Announcement List Messages",
					"action": "List messages",
					"description": "Retrieve the serviceUpdateMessage resources from the **messages** navigation property. This operation retrieves all service update messages that exist for the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/messages"
						}
					}
				},
				{
					"name": "Admin Service Announcement Create Messages",
					"value": "Admin Service Announcement Create Messages",
					"action": "Create new navigation property to messages for admin",
					"description": "Create new navigation property to messages for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/messages"
						}
					}
				},
				{
					"name": "Admin Service Announcement Delete Messages",
					"value": "Admin Service Announcement Delete Messages",
					"action": "Delete navigation property messages for admin",
					"description": "Delete navigation property messages for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Get Messages",
					"value": "Admin Service Announcement Get Messages",
					"action": "Get messages from admin",
					"description": "A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Update Messages",
					"value": "Admin Service Announcement Update Messages",
					"action": "Update the navigation property messages in admin",
					"description": "Update the navigation property messages in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages List Attachments",
					"value": "Admin Service Announcement Messages List Attachments",
					"action": "List attachments",
					"description": "Get a list of attachments associated with a service message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Create Attachments",
					"value": "Admin Service Announcement Messages Create Attachments",
					"action": "Create new navigation property to attachments for admin",
					"description": "Create new navigation property to attachments for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Delete Attachments",
					"value": "Admin Service Announcement Messages Delete Attachments",
					"action": "Delete navigation property attachments for admin",
					"description": "Delete navigation property attachments for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachments/{{$parameter[\"serviceAnnouncementAttachment-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Get Attachments",
					"value": "Admin Service Announcement Messages Get Attachments",
					"action": "Get attachments from admin",
					"description": "A collection of serviceAnnouncementAttachments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachments/{{$parameter[\"serviceAnnouncementAttachment-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Update Attachments",
					"value": "Admin Service Announcement Messages Update Attachments",
					"action": "Update the navigation property attachments in admin",
					"description": "Update the navigation property attachments in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachments/{{$parameter[\"serviceAnnouncementAttachment-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Get Attachments Content",
					"value": "Admin Service Announcement Messages Get Attachments Content",
					"action": "Get content for the navigation property attachments from admin",
					"description": "The attachment content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachments/{{$parameter[\"serviceAnnouncementAttachment-id\"]}}/content"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Update Attachments Content",
					"value": "Admin Service Announcement Messages Update Attachments Content",
					"action": "Update content for the navigation property attachments in admin",
					"description": "The attachment content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachments/{{$parameter[\"serviceAnnouncementAttachment-id\"]}}/content"
						}
					}
				},
				{
					"name": "Admin Service Announcement Get Messages Attachments Archive",
					"value": "Admin Service Announcement Get Messages Attachments Archive",
					"action": "Get attachmentsArchive for the navigation property messages from admin",
					"description": "The zip file of all attachments for a message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachmentsArchive"
						}
					}
				},
				{
					"name": "Admin Service Announcement Update Messages Attachments Archive",
					"value": "Admin Service Announcement Update Messages Attachments Archive",
					"action": "Update attachmentsArchive for the navigation property messages in admin",
					"description": "The zip file of all attachments for a message.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/admin/serviceAnnouncement/messages/{{$parameter[\"serviceUpdateMessage-id\"]}}/attachmentsArchive"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /admin/serviceAnnouncement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Delete Service Announcement"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Delete Service Announcement"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Get Service Announcement"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Get Service Announcement"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Get Service Announcement"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Update Service Announcement"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Update Service Announcement"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/healthOverviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Health Overviews"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/healthOverviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Create Health Overviews"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/healthOverviews<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Create Health Overviews"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Delete Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Delete Health Overviews"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Health Overviews"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Health Overviews"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Update Health Overviews"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Update Health Overviews"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews List Issues"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Create Issues"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Create Issues"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Delete Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Delete Issues"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Get Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Get Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Get Issues"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Update Issues"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Update Issues"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/issues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Issues"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/issues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Create Issues"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/issues<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Create Issues"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Delete Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Delete Issues"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Issues"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Issues"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Update Issues"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Update Issues"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Delete Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Messages"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Delete Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Get Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Get Attachments"
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
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Update Attachments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Update Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Get Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Update Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Messages Update Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Get Messages Attachments Archive"
					]
				}
			}
		},
		{
			"displayName": "PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Update Messages Attachments Archive"
					]
				}
			}
		},
		{
			"displayName": "PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service Announcement"
					],
					"operation": [
						"Admin Service Announcement Update Messages Attachments Archive"
					]
				}
			}
		},
];
