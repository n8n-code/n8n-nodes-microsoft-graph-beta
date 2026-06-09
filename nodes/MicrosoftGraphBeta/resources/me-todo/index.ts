import type { INodeProperties } from 'n8n-workflow';

export const meTodoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Todo",
					"value": "Me Delete Todo",
					"action": "Delete navigation property todo for me",
					"description": "Delete navigation property todo for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo"
						}
					}
				},
				{
					"name": "Me Get Todo",
					"value": "Me Get Todo",
					"action": "Get todo from me",
					"description": "Represents the To Do services available to a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo"
						}
					}
				},
				{
					"name": "Me Update Todo",
					"value": "Me Update Todo",
					"action": "Update the navigation property todo in me",
					"description": "Update the navigation property todo in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/todo"
						}
					}
				},
				{
					"name": "Me Todo List Lists",
					"value": "Me Todo List Lists",
					"action": "List lists",
					"description": "Get a list of the todoTaskList objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists"
						}
					}
				},
				{
					"name": "Me Todo Create Lists",
					"value": "Me Todo Create Lists",
					"action": "Create todoTaskList",
					"description": "Create a new lists object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/todo/lists"
						}
					}
				},
				{
					"name": "Me Todo Delete Lists",
					"value": "Me Todo Delete Lists",
					"action": "Delete navigation property lists for me",
					"description": "Delete navigation property lists for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Get Lists",
					"value": "Me Todo Get Lists",
					"action": "Get lists from me",
					"description": "The task lists in the users mailbox.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Update Lists",
					"value": "Me Todo Update Lists",
					"action": "Update the navigation property lists in me",
					"description": "Update the navigation property lists in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists List Extensions",
					"value": "Me Todo Lists List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the task list. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Todo Lists Create Extensions",
					"value": "Me Todo Lists Create Extensions",
					"action": "Create new navigation property to extensions for me",
					"description": "Create new navigation property to extensions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Todo Lists Delete Extensions",
					"value": "Me Todo Lists Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Get Extensions",
					"value": "Me Todo Lists Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the task list. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Update Extensions",
					"value": "Me Todo Lists Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists List Tasks",
					"value": "Me Todo Lists List Tasks",
					"action": "List tasks",
					"description": "Get the **todoTask** resources from the **tasks** navigation property of a specified todoTaskList.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Me Todo Lists Create Tasks",
					"value": "Me Todo Lists Create Tasks",
					"action": "Create todoTask",
					"description": "Create a new task object in a specified todoTaskList.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Me Todo Lists Delete Tasks",
					"value": "Me Todo Lists Delete Tasks",
					"action": "Delete navigation property tasks for me",
					"description": "Delete navigation property tasks for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Get Tasks",
					"value": "Me Todo Lists Get Tasks",
					"action": "Get tasks from me",
					"description": "The tasks in this task list. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Update Tasks",
					"value": "Me Todo Lists Update Tasks",
					"action": "Update the navigation property tasks in me",
					"description": "Update the navigation property tasks in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks List Attachment Sessions",
					"value": "Me Todo Lists Tasks List Attachment Sessions",
					"action": "Get attachmentSessions from me",
					"description": "Get attachmentSessions from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Delete Attachment Sessions",
					"value": "Me Todo Lists Tasks Delete Attachment Sessions",
					"action": "Delete navigation property attachmentSessions for me",
					"description": "Delete navigation property attachmentSessions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Get Attachment Sessions",
					"value": "Me Todo Lists Tasks Get Attachment Sessions",
					"action": "Get attachmentSessions from me",
					"description": "Get attachmentSessions from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Update Attachment Sessions",
					"value": "Me Todo Lists Tasks Update Attachment Sessions",
					"action": "Update the navigation property attachmentSessions in me",
					"description": "Update the navigation property attachmentSessions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Get Attachment Sessions Content",
					"value": "Me Todo Lists Tasks Get Attachment Sessions Content",
					"action": "Get content for the navigation property attachmentSessions from me",
					"description": "The content streams that are uploaded.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Update Attachment Sessions Content",
					"value": "Me Todo Lists Tasks Update Attachment Sessions Content",
					"action": "Update content for the navigation property attachmentSessions in me",
					"description": "The content streams that are uploaded.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks List Attachments",
					"value": "Me Todo Lists Tasks List Attachments",
					"action": "List taskFileAttachments",
					"description": "Get a list of the taskFileAttachment objects and their properties. The **contentBytes** property will not be returned in the response. Use the Get attachment API to view the **contentBytes**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Create Attachments",
					"value": "Me Todo Lists Tasks Create Attachments",
					"action": "Create taskFileAttachment",
					"description": "Add a new taskFileAttachment object to a todoTask. This operation limits the size of the attachment you can add to under 3 MB. If the size of the file attachments is more than 3 MB, create an upload session to upload the attachments.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Delete Attachments",
					"value": "Me Todo Lists Tasks Delete Attachments",
					"action": "Delete navigation property attachments for me",
					"description": "Delete navigation property attachments for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments/{{$parameter[\"attachmentBase-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Get Attachments",
					"value": "Me Todo Lists Tasks Get Attachments",
					"action": "Get attachments from me",
					"description": "A collection of file attachments for the task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments/{{$parameter[\"attachmentBase-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Get Attachments Content",
					"value": "Me Todo Lists Tasks Get Attachments Content",
					"action": "Get media content for the navigation property attachments from me",
					"description": "Get media content for the navigation property attachments from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments/{{$parameter[\"attachmentBase-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Update Attachments Content",
					"value": "Me Todo Lists Tasks Update Attachments Content",
					"action": "Update media content for the navigation property attachments in me",
					"description": "Update media content for the navigation property attachments in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments/{{$parameter[\"attachmentBase-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks List Checklist Items",
					"value": "Me Todo Lists Tasks List Checklist Items",
					"action": "Get checklistItems from me",
					"description": "A collection of smaller subtasks linked to the more complex parent task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Create Checklist Items",
					"value": "Me Todo Lists Tasks Create Checklist Items",
					"action": "Create new navigation property to checklistItems for me",
					"description": "Create new navigation property to checklistItems for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Delete Checklist Items",
					"value": "Me Todo Lists Tasks Delete Checklist Items",
					"action": "Delete navigation property checklistItems for me",
					"description": "Delete navigation property checklistItems for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems/{{$parameter[\"checklistItem-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Get Checklist Items",
					"value": "Me Todo Lists Tasks Get Checklist Items",
					"action": "Get checklistItems from me",
					"description": "A collection of smaller subtasks linked to the more complex parent task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems/{{$parameter[\"checklistItem-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Update Checklist Items",
					"value": "Me Todo Lists Tasks Update Checklist Items",
					"action": "Update the navigation property checklistItems in me",
					"description": "Update the navigation property checklistItems in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems/{{$parameter[\"checklistItem-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks List Extensions",
					"value": "Me Todo Lists Tasks List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the task. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Create Extensions",
					"value": "Me Todo Lists Tasks Create Extensions",
					"action": "Create new navigation property to extensions for me",
					"description": "Create new navigation property to extensions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Delete Extensions",
					"value": "Me Todo Lists Tasks Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Get Extensions",
					"value": "Me Todo Lists Tasks Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the task. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Update Extensions",
					"value": "Me Todo Lists Tasks Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks List Linked Resources",
					"value": "Me Todo Lists Tasks List Linked Resources",
					"action": "List linkedResources",
					"description": "Get information of one or more items in a partner application, based on which a specified task was created. The information is represented in a linkedResource object for each item. It includes an external ID for the item in the partner application, and if applicable, a deep link to that item in the application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Create Linked Resources",
					"value": "Me Todo Lists Tasks Create Linked Resources",
					"action": "Create linkedResource",
					"description": "Create a linkedResource object to associate a specified task with an item in a partner application. For example, you can associate a task with an email item in Outlook that spurred the task, and you can create a **linkedResource** object to track its association. You can also create a **linkedResource** object while creating a todoTask.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Delete Linked Resources",
					"value": "Me Todo Lists Tasks Delete Linked Resources",
					"action": "Delete navigation property linkedResources for me",
					"description": "Delete navigation property linkedResources for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources/{{$parameter[\"linkedResource-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Get Linked Resources",
					"value": "Me Todo Lists Tasks Get Linked Resources",
					"action": "Get linkedResources from me",
					"description": "A collection of resources linked to the task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources/{{$parameter[\"linkedResource-id\"]}}"
						}
					}
				},
				{
					"name": "Me Todo Lists Tasks Update Linked Resources",
					"value": "Me Todo Lists Tasks Update Linked Resources",
					"action": "Update the navigation property linkedResources in me",
					"description": "Update the navigation property linkedResources in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources/{{$parameter[\"linkedResource-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/todo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Delete Todo"
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
						"Me Todo"
					],
					"operation": [
						"Me Delete Todo"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Get Todo"
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
						"Me Todo"
					],
					"operation": [
						"Me Get Todo"
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
						"Me Todo"
					],
					"operation": [
						"Me Get Todo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Update Todo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Update Todo"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo List Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Create Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Create Lists"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/todo/lists/{todoTaskList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Delete Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Delete Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Get Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Get Lists"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Get Lists"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Update Lists"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Update Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Delete Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Get Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Get Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Delete Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Get Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Get Tasks"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachment Sessions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachment Sessions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachment Sessions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachment Sessions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachment Sessions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachment Sessions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Attachment Sessions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Attachment Sessions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Attachment Sessions Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Attachment Sessions Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Attachment Sessions Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachments"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachments"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachments"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachments"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachments"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachments"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Attachments"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Attachments"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Create Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Create Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Checklist Items"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Extensions"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks List Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Create Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Create Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Delete Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Linked Resources"
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
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Get Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Todo"
					],
					"operation": [
						"Me Todo Lists Tasks Update Linked Resources"
					]
				}
			}
		},
];
