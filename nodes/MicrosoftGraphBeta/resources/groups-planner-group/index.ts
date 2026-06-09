import type { INodeProperties } from 'n8n-workflow';

export const groupsPlannerGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					]
				}
			},
			"options": [
				{
					"name": "Groups Delete Planner",
					"value": "Groups Delete Planner",
					"action": "Delete navigation property planner for groups",
					"description": "Delete navigation property planner for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Groups Get Planner",
					"value": "Groups Get Planner",
					"action": "Get planner from groups",
					"description": "Selective Planner services available to the group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Groups Update Planner",
					"value": "Groups Update Planner",
					"action": "Update the navigation property planner in groups",
					"description": "Update the navigation property planner in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Groups Planner List Plans",
					"value": "Groups Planner List Plans",
					"action": "List plans",
					"description": "Retrieve a list of **plannerPlan** objects owned by a group object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans"
						}
					}
				},
				{
					"name": "Groups Planner Create Plans",
					"value": "Groups Planner Create Plans",
					"action": "Create new navigation property to plans for groups",
					"description": "Create new navigation property to plans for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans"
						}
					}
				},
				{
					"name": "Groups Planner Delete Plans",
					"value": "Groups Planner Delete Plans",
					"action": "Delete navigation property plans for groups",
					"description": "Delete navigation property plans for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Get Plans",
					"value": "Groups Planner Get Plans",
					"action": "Get plans from groups",
					"description": "Read-only. Nullable. Returns the plannerPlans owned by the group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Update Plans",
					"value": "Groups Planner Update Plans",
					"action": "Update the navigation property plans in groups",
					"description": "Update the navigation property plans in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans List Buckets",
					"value": "Groups Planner Plans List Buckets",
					"action": "List buckets",
					"description": "Retrieve a list of plannerBucket objects contained by a plannerPlan object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets"
						}
					}
				},
				{
					"name": "Groups Planner Plans Create Buckets",
					"value": "Groups Planner Plans Create Buckets",
					"action": "Create new navigation property to buckets for groups",
					"description": "Create new navigation property to buckets for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets"
						}
					}
				},
				{
					"name": "Groups Planner Plans Delete Buckets",
					"value": "Groups Planner Plans Delete Buckets",
					"action": "Delete navigation property buckets for groups",
					"description": "Delete navigation property buckets for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Get Buckets",
					"value": "Groups Planner Plans Get Buckets",
					"action": "Get buckets from groups",
					"description": "Collection of buckets in the plan. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Update Buckets",
					"value": "Groups Planner Plans Update Buckets",
					"action": "Update the navigation property buckets in groups",
					"description": "Update the navigation property buckets in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets List Tasks",
					"value": "Groups Planner Plans Buckets List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of plannerTask objects associated to a plannerBucket object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Create Tasks",
					"value": "Groups Planner Plans Buckets Create Tasks",
					"action": "Create new navigation property to tasks for groups",
					"description": "Create new navigation property to tasks for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Delete Tasks",
					"value": "Groups Planner Plans Buckets Delete Tasks",
					"action": "Delete navigation property tasks for groups",
					"description": "Delete navigation property tasks for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Get Tasks",
					"value": "Groups Planner Plans Buckets Get Tasks",
					"action": "Get tasks from groups",
					"description": "Read-only. Nullable. The collection of tasks in the bucket.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Update Tasks",
					"value": "Groups Planner Plans Buckets Update Tasks",
					"action": "Update the navigation property tasks in groups",
					"description": "Update the navigation property tasks in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Delete Assigned To Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for groups",
					"description": "Delete navigation property assignedToTaskBoardFormat for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Get Assigned To Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Update Assigned To Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in groups",
					"description": "Update the navigation property assignedToTaskBoardFormat in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Delete Bucket Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for groups",
					"description": "Delete navigation property bucketTaskBoardFormat for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Get Bucket Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Update Bucket Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in groups",
					"description": "Update the navigation property bucketTaskBoardFormat in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Delete Details",
					"value": "Groups Planner Plans Buckets Tasks Delete Details",
					"action": "Delete navigation property details for groups",
					"description": "Delete navigation property details for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Get Details",
					"value": "Groups Planner Plans Buckets Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Update Details",
					"value": "Groups Planner Plans Buckets Tasks Update Details",
					"action": "Update the navigation property details in groups",
					"description": "Update the navigation property details in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Delete Progress Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for groups",
					"description": "Delete navigation property progressTaskBoardFormat for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Get Progress Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Buckets Tasks Update Progress Task Board Format",
					"value": "Groups Planner Plans Buckets Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in groups",
					"description": "Update the navigation property progressTaskBoardFormat in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Delete Details",
					"value": "Groups Planner Plans Delete Details",
					"action": "Delete navigation property details for groups",
					"description": "Delete navigation property details for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans Get Details",
					"value": "Groups Planner Plans Get Details",
					"action": "Get plannerPlanDetails",
					"description": "Retrieve the properties and relationships of a **plannerPlanDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans Update Details",
					"value": "Groups Planner Plans Update Details",
					"action": "Update the navigation property details in groups",
					"description": "Update the navigation property details in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans List Tasks",
					"value": "Groups Planner Plans List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of plannerTask objects associated with a plannerPlan object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Groups Planner Plans Create Tasks",
					"value": "Groups Planner Plans Create Tasks",
					"action": "Create new navigation property to tasks for groups",
					"description": "Create new navigation property to tasks for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Groups Planner Plans Delete Tasks",
					"value": "Groups Planner Plans Delete Tasks",
					"action": "Delete navigation property tasks for groups",
					"description": "Delete navigation property tasks for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Get Tasks",
					"value": "Groups Planner Plans Get Tasks",
					"action": "Get tasks from groups",
					"description": "Collection of tasks in the plan. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Update Tasks",
					"value": "Groups Planner Plans Update Tasks",
					"action": "Update the navigation property tasks in groups",
					"description": "Update the navigation property tasks in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Delete Assigned To Task Board Format",
					"value": "Groups Planner Plans Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for groups",
					"description": "Delete navigation property assignedToTaskBoardFormat for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Get Assigned To Task Board Format",
					"value": "Groups Planner Plans Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Update Assigned To Task Board Format",
					"value": "Groups Planner Plans Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in groups",
					"description": "Update the navigation property assignedToTaskBoardFormat in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Delete Bucket Task Board Format",
					"value": "Groups Planner Plans Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for groups",
					"description": "Delete navigation property bucketTaskBoardFormat for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Get Bucket Task Board Format",
					"value": "Groups Planner Plans Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Update Bucket Task Board Format",
					"value": "Groups Planner Plans Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in groups",
					"description": "Update the navigation property bucketTaskBoardFormat in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Delete Details",
					"value": "Groups Planner Plans Tasks Delete Details",
					"action": "Delete navigation property details for groups",
					"description": "Delete navigation property details for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Get Details",
					"value": "Groups Planner Plans Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Update Details",
					"value": "Groups Planner Plans Tasks Update Details",
					"action": "Update the navigation property details in groups",
					"description": "Update the navigation property details in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Delete Progress Task Board Format",
					"value": "Groups Planner Plans Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for groups",
					"description": "Delete navigation property progressTaskBoardFormat for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Get Progress Task Board Format",
					"value": "Groups Planner Plans Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Groups Planner Plans Tasks Update Progress Task Board Format",
					"value": "Groups Planner Plans Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in groups",
					"description": "Update the navigation property progressTaskBoardFormat in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Delete Planner"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Delete Planner"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Get Planner"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Get Planner"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Get Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Update Planner"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Update Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Update Planner"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner List Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/planner/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Create Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/planner/plans<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Create Plans"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Delete Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Delete Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Get Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Get Plans"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Get Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Update Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Update Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Create Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Create Buckets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Delete Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Delete Buckets"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Buckets"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Buckets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Update Buckets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Update Buckets"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Delete Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Get Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Get Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Delete Assigned To Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Assigned To Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Assigned To Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Assigned To Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Delete Bucket Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Bucket Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Bucket Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Bucket Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Delete Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Delete Progress Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Progress Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Progress Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Progress Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Buckets Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Delete Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Update Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Update Details"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Delete Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Tasks"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Delete Assigned To Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Assigned To Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Assigned To Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Assigned To Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Delete Bucket Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Bucket Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Bucket Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Bucket Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Delete Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Details"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Delete Progress Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Progress Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Progress Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Progress Task Board Format"
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
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Planner Group"
					],
					"operation": [
						"Groups Planner Plans Tasks Update Progress Task Board Format"
					]
				}
			}
		},
];
