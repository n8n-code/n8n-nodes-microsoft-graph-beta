import type { INodeProperties } from 'n8n-workflow';

export const usersTodoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Todo",
					"value": "Users Delete Todo",
					"action": "Delete navigation property todo for users",
					"description": "Delete navigation property todo for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo"
						}
					}
				},
				{
					"name": "Users Get Todo",
					"value": "Users Get Todo",
					"action": "Get todo from users",
					"description": "Represents the To Do services available to a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo"
						}
					}
				},
				{
					"name": "Users Update Todo",
					"value": "Users Update Todo",
					"action": "Update the navigation property todo in users",
					"description": "Update the navigation property todo in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo"
						}
					}
				},
				{
					"name": "Users Todo List Lists",
					"value": "Users Todo List Lists",
					"action": "List lists",
					"description": "Get a list of the todoTaskList objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists"
						}
					}
				},
				{
					"name": "Users Todo Create Lists",
					"value": "Users Todo Create Lists",
					"action": "Create todoTaskList",
					"description": "Create a new lists object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists"
						}
					}
				},
				{
					"name": "Users Todo Delete Lists",
					"value": "Users Todo Delete Lists",
					"action": "Delete navigation property lists for users",
					"description": "Delete navigation property lists for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Get Lists",
					"value": "Users Todo Get Lists",
					"action": "Get lists from users",
					"description": "The task lists in the users mailbox.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Update Lists",
					"value": "Users Todo Update Lists",
					"action": "Update the navigation property lists in users",
					"description": "Update the navigation property lists in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists List Extensions",
					"value": "Users Todo Lists List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the task list. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Todo Lists Create Extensions",
					"value": "Users Todo Lists Create Extensions",
					"action": "Create new navigation property to extensions for users",
					"description": "Create new navigation property to extensions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Todo Lists Delete Extensions",
					"value": "Users Todo Lists Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Get Extensions",
					"value": "Users Todo Lists Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the task list. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Update Extensions",
					"value": "Users Todo Lists Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists List Tasks",
					"value": "Users Todo Lists List Tasks",
					"action": "List tasks",
					"description": "Get the **todoTask** resources from the **tasks** navigation property of a specified todoTaskList.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Users Todo Lists Create Tasks",
					"value": "Users Todo Lists Create Tasks",
					"action": "Create todoTask",
					"description": "Create a new task object in a specified todoTaskList.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Users Todo Lists Delete Tasks",
					"value": "Users Todo Lists Delete Tasks",
					"action": "Delete navigation property tasks for users",
					"description": "Delete navigation property tasks for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Get Tasks",
					"value": "Users Todo Lists Get Tasks",
					"action": "Get tasks from users",
					"description": "The tasks in this task list. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Update Tasks",
					"value": "Users Todo Lists Update Tasks",
					"action": "Update the navigation property tasks in users",
					"description": "Update the navigation property tasks in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks List Attachment Sessions",
					"value": "Users Todo Lists Tasks List Attachment Sessions",
					"action": "Get attachmentSessions from users",
					"description": "Get attachmentSessions from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Delete Attachment Sessions",
					"value": "Users Todo Lists Tasks Delete Attachment Sessions",
					"action": "Delete navigation property attachmentSessions for users",
					"description": "Delete navigation property attachmentSessions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Get Attachment Sessions",
					"value": "Users Todo Lists Tasks Get Attachment Sessions",
					"action": "Get attachmentSessions from users",
					"description": "Get attachmentSessions from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Update Attachment Sessions",
					"value": "Users Todo Lists Tasks Update Attachment Sessions",
					"action": "Update the navigation property attachmentSessions in users",
					"description": "Update the navigation property attachmentSessions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Get Attachment Sessions Content",
					"value": "Users Todo Lists Tasks Get Attachment Sessions Content",
					"action": "Get content for the navigation property attachmentSessions from users",
					"description": "The content streams that are uploaded.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Update Attachment Sessions Content",
					"value": "Users Todo Lists Tasks Update Attachment Sessions Content",
					"action": "Update content for the navigation property attachmentSessions in users",
					"description": "The content streams that are uploaded.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachmentSessions/{{$parameter[\"attachmentSession-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks List Attachments",
					"value": "Users Todo Lists Tasks List Attachments",
					"action": "List taskFileAttachments",
					"description": "Get a list of the taskFileAttachment objects and their properties. The **contentBytes** property will not be returned in the response. Use the Get attachment API to view the **contentBytes**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Create Attachments",
					"value": "Users Todo Lists Tasks Create Attachments",
					"action": "Create taskFileAttachment",
					"description": "Add a new taskFileAttachment object to a todoTask. This operation limits the size of the attachment you can add to under 3 MB. If the size of the file attachments is more than 3 MB, create an upload session to upload the attachments.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Delete Attachments",
					"value": "Users Todo Lists Tasks Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments/{{$parameter[\"attachmentBase-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Get Attachments",
					"value": "Users Todo Lists Tasks Get Attachments",
					"action": "Get attachments from users",
					"description": "A collection of file attachments for the task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments/{{$parameter[\"attachmentBase-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Get Attachments Content",
					"value": "Users Todo Lists Tasks Get Attachments Content",
					"action": "Get media content for the navigation property attachments from users",
					"description": "Get media content for the navigation property attachments from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments/{{$parameter[\"attachmentBase-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Update Attachments Content",
					"value": "Users Todo Lists Tasks Update Attachments Content",
					"action": "Update media content for the navigation property attachments in users",
					"description": "Update media content for the navigation property attachments in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/attachments/{{$parameter[\"attachmentBase-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks List Checklist Items",
					"value": "Users Todo Lists Tasks List Checklist Items",
					"action": "Get checklistItems from users",
					"description": "A collection of smaller subtasks linked to the more complex parent task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Create Checklist Items",
					"value": "Users Todo Lists Tasks Create Checklist Items",
					"action": "Create new navigation property to checklistItems for users",
					"description": "Create new navigation property to checklistItems for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Delete Checklist Items",
					"value": "Users Todo Lists Tasks Delete Checklist Items",
					"action": "Delete navigation property checklistItems for users",
					"description": "Delete navigation property checklistItems for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems/{{$parameter[\"checklistItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Get Checklist Items",
					"value": "Users Todo Lists Tasks Get Checklist Items",
					"action": "Get checklistItems from users",
					"description": "A collection of smaller subtasks linked to the more complex parent task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems/{{$parameter[\"checklistItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Update Checklist Items",
					"value": "Users Todo Lists Tasks Update Checklist Items",
					"action": "Update the navigation property checklistItems in users",
					"description": "Update the navigation property checklistItems in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/checklistItems/{{$parameter[\"checklistItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks List Extensions",
					"value": "Users Todo Lists Tasks List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the task. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Create Extensions",
					"value": "Users Todo Lists Tasks Create Extensions",
					"action": "Create new navigation property to extensions for users",
					"description": "Create new navigation property to extensions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Delete Extensions",
					"value": "Users Todo Lists Tasks Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Get Extensions",
					"value": "Users Todo Lists Tasks Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the task. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Update Extensions",
					"value": "Users Todo Lists Tasks Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks List Linked Resources",
					"value": "Users Todo Lists Tasks List Linked Resources",
					"action": "List linkedResources",
					"description": "Get information of one or more items in a partner application, based on which a specified task was created. The information is represented in a linkedResource object for each item. It includes an external ID for the item in the partner application, and if applicable, a deep link to that item in the application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Create Linked Resources",
					"value": "Users Todo Lists Tasks Create Linked Resources",
					"action": "Create linkedResource",
					"description": "Create a linkedResource object to associate a specified task with an item in a partner application. For example, you can associate a task with an email item in Outlook that spurred the task, and you can create a **linkedResource** object to track its association. You can also create a **linkedResource** object while creating a todoTask.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Delete Linked Resources",
					"value": "Users Todo Lists Tasks Delete Linked Resources",
					"action": "Delete navigation property linkedResources for users",
					"description": "Delete navigation property linkedResources for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources/{{$parameter[\"linkedResource-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Get Linked Resources",
					"value": "Users Todo Lists Tasks Get Linked Resources",
					"action": "Get linkedResources from users",
					"description": "A collection of resources linked to the task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources/{{$parameter[\"linkedResource-id\"]}}"
						}
					}
				},
				{
					"name": "Users Todo Lists Tasks Update Linked Resources",
					"value": "Users Todo Lists Tasks Update Linked Resources",
					"action": "Update the navigation property linkedResources in users",
					"description": "Update the navigation property linkedResources in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/{{$parameter[\"todoTask-id\"]}}/linkedResources/{{$parameter[\"linkedResource-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/todo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Delete Todo"
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
						"Users Todo"
					],
					"operation": [
						"Users Delete Todo"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Get Todo"
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
						"Users Todo"
					],
					"operation": [
						"Users Get Todo"
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
						"Users Todo"
					],
					"operation": [
						"Users Get Todo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Update Todo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Update Todo"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo List Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Create Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Create Lists"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/todo/lists/{todoTaskList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Delete Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Delete Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Get Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Get Lists"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Get Lists"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Update Lists"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Update Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Delete Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Get Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Get Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Delete Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Get Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Get Tasks"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachment Sessions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachment Sessions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachment Sessions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachment Sessions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachment Sessions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachment Sessions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Attachment Sessions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Attachment Sessions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Attachment Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Attachment Sessions Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Attachment Sessions Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Attachment Sessions Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachments"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachments"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachments"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachments"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachments"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachments"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Attachments"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Attachments"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Attachments Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Create Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Create Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Checklist Items"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Checklist Items"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Extensions"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks List Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Create Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Create Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Delete Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Linked Resources"
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
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Get Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Linked Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Todo"
					],
					"operation": [
						"Users Todo Lists Tasks Update Linked Resources"
					]
				}
			}
		},
];
