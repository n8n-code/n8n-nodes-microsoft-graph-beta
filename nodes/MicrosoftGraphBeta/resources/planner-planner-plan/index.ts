import type { INodeProperties } from 'n8n-workflow';

export const plannerPlannerPlanDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					]
				}
			},
			"options": [
				{
					"name": "Planner List Plans",
					"value": "Planner List Plans",
					"action": "List plans",
					"description": "Retrieve a list of **plannerplan** objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans"
						}
					}
				},
				{
					"name": "Planner Create Plans",
					"value": "Planner Create Plans",
					"action": "Create plannerPlan",
					"description": "Create a new **plannerPlan**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/planner/plans"
						}
					}
				},
				{
					"name": "Planner Delete Plans",
					"value": "Planner Delete Plans",
					"action": "Delete navigation property plans for planner",
					"description": "Delete navigation property plans for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Get Plans",
					"value": "Planner Get Plans",
					"action": "Get plans from planner",
					"description": "Read-only. Nullable. Returns a collection of the specified plans",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Update Plans",
					"value": "Planner Update Plans",
					"action": "Update the navigation property plans in planner",
					"description": "Update the navigation property plans in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans List Buckets",
					"value": "Planner Plans List Buckets",
					"action": "List buckets",
					"description": "Retrieve a list of plannerBucket objects contained by a plannerPlan object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets"
						}
					}
				},
				{
					"name": "Planner Plans Create Buckets",
					"value": "Planner Plans Create Buckets",
					"action": "Create new navigation property to buckets for planner",
					"description": "Create new navigation property to buckets for planner",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets"
						}
					}
				},
				{
					"name": "Planner Plans Delete Buckets",
					"value": "Planner Plans Delete Buckets",
					"action": "Delete navigation property buckets for planner",
					"description": "Delete navigation property buckets for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Get Buckets",
					"value": "Planner Plans Get Buckets",
					"action": "Get buckets from planner",
					"description": "Collection of buckets in the plan. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Update Buckets",
					"value": "Planner Plans Update Buckets",
					"action": "Update the navigation property buckets in planner",
					"description": "Update the navigation property buckets in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Buckets List Tasks",
					"value": "Planner Plans Buckets List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of plannerTask objects associated to a plannerBucket object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Create Tasks",
					"value": "Planner Plans Buckets Create Tasks",
					"action": "Create new navigation property to tasks for planner",
					"description": "Create new navigation property to tasks for planner",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Delete Tasks",
					"value": "Planner Plans Buckets Delete Tasks",
					"action": "Delete navigation property tasks for planner",
					"description": "Delete navigation property tasks for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Get Tasks",
					"value": "Planner Plans Buckets Get Tasks",
					"action": "Get tasks from planner",
					"description": "Read-only. Nullable. The collection of tasks in the bucket.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Update Tasks",
					"value": "Planner Plans Buckets Update Tasks",
					"action": "Update the navigation property tasks in planner",
					"description": "Update the navigation property tasks in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Delete Assigned To Task Board Format",
					"value": "Planner Plans Buckets Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for planner",
					"description": "Delete navigation property assignedToTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Get Assigned To Task Board Format",
					"value": "Planner Plans Buckets Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Update Assigned To Task Board Format",
					"value": "Planner Plans Buckets Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in planner",
					"description": "Update the navigation property assignedToTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Delete Bucket Task Board Format",
					"value": "Planner Plans Buckets Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for planner",
					"description": "Delete navigation property bucketTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Get Bucket Task Board Format",
					"value": "Planner Plans Buckets Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Update Bucket Task Board Format",
					"value": "Planner Plans Buckets Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in planner",
					"description": "Update the navigation property bucketTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Delete Details",
					"value": "Planner Plans Buckets Tasks Delete Details",
					"action": "Delete navigation property details for planner",
					"description": "Delete navigation property details for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Get Details",
					"value": "Planner Plans Buckets Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Update Details",
					"value": "Planner Plans Buckets Tasks Update Details",
					"action": "Update the navigation property details in planner",
					"description": "Update the navigation property details in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Delete Progress Task Board Format",
					"value": "Planner Plans Buckets Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for planner",
					"description": "Delete navigation property progressTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Get Progress Task Board Format",
					"value": "Planner Plans Buckets Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Buckets Tasks Update Progress Task Board Format",
					"value": "Planner Plans Buckets Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in planner",
					"description": "Update the navigation property progressTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Delete Details",
					"value": "Planner Plans Delete Details",
					"action": "Delete navigation property details for planner",
					"description": "Delete navigation property details for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans Get Details",
					"value": "Planner Plans Get Details",
					"action": "Get plannerPlanDetails",
					"description": "Retrieve the properties and relationships of a **plannerPlanDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans Update Details",
					"value": "Planner Plans Update Details",
					"action": "Update the navigation property details in planner",
					"description": "Update the navigation property details in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans List Tasks",
					"value": "Planner Plans List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of plannerTask objects associated with a plannerPlan object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Planner Plans Create Tasks",
					"value": "Planner Plans Create Tasks",
					"action": "Create new navigation property to tasks for planner",
					"description": "Create new navigation property to tasks for planner",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Planner Plans Delete Tasks",
					"value": "Planner Plans Delete Tasks",
					"action": "Delete navigation property tasks for planner",
					"description": "Delete navigation property tasks for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Get Tasks",
					"value": "Planner Plans Get Tasks",
					"action": "Get tasks from planner",
					"description": "Collection of tasks in the plan. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Update Tasks",
					"value": "Planner Plans Update Tasks",
					"action": "Update the navigation property tasks in planner",
					"description": "Update the navigation property tasks in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Delete Assigned To Task Board Format",
					"value": "Planner Plans Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for planner",
					"description": "Delete navigation property assignedToTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Get Assigned To Task Board Format",
					"value": "Planner Plans Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Update Assigned To Task Board Format",
					"value": "Planner Plans Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in planner",
					"description": "Update the navigation property assignedToTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Delete Bucket Task Board Format",
					"value": "Planner Plans Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for planner",
					"description": "Delete navigation property bucketTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Get Bucket Task Board Format",
					"value": "Planner Plans Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Update Bucket Task Board Format",
					"value": "Planner Plans Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in planner",
					"description": "Update the navigation property bucketTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Delete Details",
					"value": "Planner Plans Tasks Delete Details",
					"action": "Delete navigation property details for planner",
					"description": "Delete navigation property details for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Get Details",
					"value": "Planner Plans Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Update Details",
					"value": "Planner Plans Tasks Update Details",
					"action": "Update the navigation property details in planner",
					"description": "Update the navigation property details in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Delete Progress Task Board Format",
					"value": "Planner Plans Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for planner",
					"description": "Delete navigation property progressTaskBoardFormat for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Get Progress Task Board Format",
					"value": "Planner Plans Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Planner Plans Tasks Update Progress Task Board Format",
					"value": "Planner Plans Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in planner",
					"description": "Update the navigation property progressTaskBoardFormat in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /planner/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner List Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Create Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/plans<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Create Plans"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Delete Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Delete Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Get Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Get Plans"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Get Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Update Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Update Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/plans/{plannerPlan-id}/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Create Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/plans/{plannerPlan-id}/buckets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Create Buckets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Delete Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Delete Buckets"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Buckets"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Buckets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Update Buckets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Update Buckets"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Delete Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Get Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Get Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Delete Assigned To Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Assigned To Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Assigned To Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Assigned To Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Delete Bucket Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Bucket Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Bucket Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Bucket Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Delete Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Delete Progress Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Progress Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Progress Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Progress Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Buckets Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Delete Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Update Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Update Details"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/plans/{plannerPlan-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/plans/{plannerPlan-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Delete Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Tasks"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Delete Assigned To Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Assigned To Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Assigned To Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Assigned To Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Delete Bucket Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Bucket Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Bucket Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Bucket Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Delete Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Details"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Delete Progress Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Progress Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Progress Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Progress Task Board Format"
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
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Plan"
					],
					"operation": [
						"Planner Plans Tasks Update Progress Task Board Format"
					]
				}
			}
		},
];
