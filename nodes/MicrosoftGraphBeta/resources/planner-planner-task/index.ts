import type { INodeProperties } from 'n8n-workflow';

export const plannerPlannerTaskDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					]
				}
			},
			"options": [
				{
					"name": "Planner List Tasks",
					"value": "Planner List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of **plannertask** objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/tasks"
						}
					}
				},
				{
					"name": "Planner Create Tasks",
					"value": "Planner Create Tasks",
					"action": "Create plannerTask",
					"description": "Create a new **plannerTask**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/planner/tasks"
						}
					}
				},
				{
					"name": "Planner Delete Tasks",
					"value": "Planner Delete Tasks",
					"action": "Delete navigation property tasks for planner",
					"description": "Delete navigation property tasks for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Get Tasks",
					"value": "Planner Get Tasks",
					"action": "Get tasks from planner",
					"description": "Read-only. Nullable. Returns a collection of the specified tasks",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Update Tasks",
					"value": "Planner Update Tasks",
					"action": "Update the navigation property tasks in planner",
					"description": "Update the navigation property tasks in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Tasks Delete Assigned To Task Board Format",
					"value": "Planner Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for planner",
					"description": "Delete navigation property assignedToTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Tasks Get Assigned To Task Board Format",
					"value": "Planner Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Tasks Update Assigned To Task Board Format",
					"value": "Planner Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in planner",
					"description": "Update the navigation property assignedToTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Tasks Delete Bucket Task Board Format",
					"value": "Planner Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for planner",
					"description": "Delete navigation property bucketTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Tasks Get Bucket Task Board Format",
					"value": "Planner Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Tasks Update Bucket Task Board Format",
					"value": "Planner Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in planner",
					"description": "Update the navigation property bucketTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Tasks Delete Details",
					"value": "Planner Tasks Delete Details",
					"action": "Delete navigation property details for planner",
					"description": "Delete navigation property details for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Tasks Get Details",
					"value": "Planner Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Tasks Update Details",
					"value": "Planner Tasks Update Details",
					"action": "Update the navigation property details in planner",
					"description": "Update the navigation property details in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Tasks Delete Progress Task Board Format",
					"value": "Planner Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for planner",
					"description": "Delete navigation property progressTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Tasks Get Progress Task Board Format",
					"value": "Planner Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Tasks Update Progress Task Board Format",
					"value": "Planner Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in planner",
					"description": "Update the navigation property progressTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /planner/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Delete Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Get Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Get Tasks"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "ETag value.",
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Delete Assigned To Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Assigned To Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Assigned To Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "ETag value.",
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Delete Bucket Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Bucket Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Bucket Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "ETag value.",
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Delete Details"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Details"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Details"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "ETag value.",
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Delete Progress Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Progress Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Progress Task Board Format"
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "ETag value.",
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
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Task"
					],
					"operation": [
						"Planner Tasks Update Progress Task Board Format"
					]
				}
			}
		},
];
