import type { INodeProperties } from 'n8n-workflow';

export const usersPlannerUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Planner",
					"value": "Users Delete Planner",
					"action": "Delete navigation property planner for users",
					"description": "Delete navigation property planner for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Users Get Planner",
					"value": "Users Get Planner",
					"action": "Get plannerUser",
					"description": "Retrieve the properties and relationships of a plannerUser object. The returned properties include the user's favorite plans and recently viewed plans. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Users Update Planner",
					"value": "Users Update Planner",
					"action": "Update the navigation property planner in users",
					"description": "Update the navigation property planner in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner"
						}
					}
				},
				{
					"name": "Users Planner List All",
					"value": "Users Planner List All",
					"action": "Get all from users",
					"description": "Get all from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/all"
						}
					}
				},
				{
					"name": "Users Planner Create All",
					"value": "Users Planner Create All",
					"action": "Create new navigation property to all for users",
					"description": "Create new navigation property to all for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/all"
						}
					}
				},
				{
					"name": "Users Planner Delete All",
					"value": "Users Planner Delete All",
					"action": "Delete navigation property all for users",
					"description": "Delete navigation property all for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/all/{{$parameter[\"plannerDelta-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Get All",
					"value": "Users Planner Get All",
					"action": "Get all from users",
					"description": "Get all from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/all/{{$parameter[\"plannerDelta-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Update All",
					"value": "Users Planner Update All",
					"action": "Update the navigation property all in users",
					"description": "Update the navigation property all in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/all/{{$parameter[\"plannerDelta-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner List Favorite Plans",
					"value": "Users Planner List Favorite Plans",
					"action": "List favoritePlans",
					"description": "Retrieve a list of plannerPlans that are marked as favorite by a user. You can mark a plan as favorite by updating the plannerUser resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/favoritePlans"
						}
					}
				},
				{
					"name": "Users Planner Get Favorite Plans",
					"value": "Users Planner Get Favorite Plans",
					"action": "Get favoritePlans from users",
					"description": "Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/favoritePlans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner List Plans",
					"value": "Users Planner List Plans",
					"action": "List plans",
					"description": "Retrieve a list of **plannerplan** objects shared with a user object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans"
						}
					}
				},
				{
					"name": "Users Planner Create Plans",
					"value": "Users Planner Create Plans",
					"action": "Create new navigation property to plans for users",
					"description": "Create new navigation property to plans for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans"
						}
					}
				},
				{
					"name": "Users Planner Delete Plans",
					"value": "Users Planner Delete Plans",
					"action": "Delete navigation property plans for users",
					"description": "Delete navigation property plans for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Get Plans",
					"value": "Users Planner Get Plans",
					"action": "Get plans from users",
					"description": "Get plans from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Update Plans",
					"value": "Users Planner Update Plans",
					"action": "Update the navigation property plans in users",
					"description": "Update the navigation property plans in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans List Buckets",
					"value": "Users Planner Plans List Buckets",
					"action": "List buckets",
					"description": "Retrieve a list of plannerBucket objects contained by a plannerPlan object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets"
						}
					}
				},
				{
					"name": "Users Planner Plans Create Buckets",
					"value": "Users Planner Plans Create Buckets",
					"action": "Create new navigation property to buckets for users",
					"description": "Create new navigation property to buckets for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets"
						}
					}
				},
				{
					"name": "Users Planner Plans Delete Buckets",
					"value": "Users Planner Plans Delete Buckets",
					"action": "Delete navigation property buckets for users",
					"description": "Delete navigation property buckets for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Get Buckets",
					"value": "Users Planner Plans Get Buckets",
					"action": "Get buckets from users",
					"description": "Collection of buckets in the plan. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Update Buckets",
					"value": "Users Planner Plans Update Buckets",
					"action": "Update the navigation property buckets in users",
					"description": "Update the navigation property buckets in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets List Tasks",
					"value": "Users Planner Plans Buckets List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of plannerTask objects associated to a plannerBucket object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Create Tasks",
					"value": "Users Planner Plans Buckets Create Tasks",
					"action": "Create new navigation property to tasks for users",
					"description": "Create new navigation property to tasks for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Delete Tasks",
					"value": "Users Planner Plans Buckets Delete Tasks",
					"action": "Delete navigation property tasks for users",
					"description": "Delete navigation property tasks for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Get Tasks",
					"value": "Users Planner Plans Buckets Get Tasks",
					"action": "Get tasks from users",
					"description": "Read-only. Nullable. The collection of tasks in the bucket.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Update Tasks",
					"value": "Users Planner Plans Buckets Update Tasks",
					"action": "Update the navigation property tasks in users",
					"description": "Update the navigation property tasks in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Delete Assigned To Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for users",
					"description": "Delete navigation property assignedToTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Get Assigned To Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Update Assigned To Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in users",
					"description": "Update the navigation property assignedToTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Delete Bucket Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for users",
					"description": "Delete navigation property bucketTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Get Bucket Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Update Bucket Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in users",
					"description": "Update the navigation property bucketTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Delete Details",
					"value": "Users Planner Plans Buckets Tasks Delete Details",
					"action": "Delete navigation property details for users",
					"description": "Delete navigation property details for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Get Details",
					"value": "Users Planner Plans Buckets Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Update Details",
					"value": "Users Planner Plans Buckets Tasks Update Details",
					"action": "Update the navigation property details in users",
					"description": "Update the navigation property details in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Delete Progress Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for users",
					"description": "Delete navigation property progressTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Get Progress Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Buckets Tasks Update Progress Task Board Format",
					"value": "Users Planner Plans Buckets Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in users",
					"description": "Update the navigation property progressTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Delete Details",
					"value": "Users Planner Plans Delete Details",
					"action": "Delete navigation property details for users",
					"description": "Delete navigation property details for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans Get Details",
					"value": "Users Planner Plans Get Details",
					"action": "Get plannerPlanDetails",
					"description": "Retrieve the properties and relationships of a **plannerPlanDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans Update Details",
					"value": "Users Planner Plans Update Details",
					"action": "Update the navigation property details in users",
					"description": "Update the navigation property details in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans List Tasks",
					"value": "Users Planner Plans List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of plannerTask objects associated with a plannerPlan object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Users Planner Plans Create Tasks",
					"value": "Users Planner Plans Create Tasks",
					"action": "Create new navigation property to tasks for users",
					"description": "Create new navigation property to tasks for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Users Planner Plans Delete Tasks",
					"value": "Users Planner Plans Delete Tasks",
					"action": "Delete navigation property tasks for users",
					"description": "Delete navigation property tasks for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Get Tasks",
					"value": "Users Planner Plans Get Tasks",
					"action": "Get tasks from users",
					"description": "Collection of tasks in the plan. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Update Tasks",
					"value": "Users Planner Plans Update Tasks",
					"action": "Update the navigation property tasks in users",
					"description": "Update the navigation property tasks in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Delete Assigned To Task Board Format",
					"value": "Users Planner Plans Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for users",
					"description": "Delete navigation property assignedToTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Get Assigned To Task Board Format",
					"value": "Users Planner Plans Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Update Assigned To Task Board Format",
					"value": "Users Planner Plans Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in users",
					"description": "Update the navigation property assignedToTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Delete Bucket Task Board Format",
					"value": "Users Planner Plans Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for users",
					"description": "Delete navigation property bucketTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Get Bucket Task Board Format",
					"value": "Users Planner Plans Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Update Bucket Task Board Format",
					"value": "Users Planner Plans Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in users",
					"description": "Update the navigation property bucketTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Delete Details",
					"value": "Users Planner Plans Tasks Delete Details",
					"action": "Delete navigation property details for users",
					"description": "Delete navigation property details for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Get Details",
					"value": "Users Planner Plans Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Update Details",
					"value": "Users Planner Plans Tasks Update Details",
					"action": "Update the navigation property details in users",
					"description": "Update the navigation property details in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Delete Progress Task Board Format",
					"value": "Users Planner Plans Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for users",
					"description": "Delete navigation property progressTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Get Progress Task Board Format",
					"value": "Users Planner Plans Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Plans Tasks Update Progress Task Board Format",
					"value": "Users Planner Plans Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in users",
					"description": "Update the navigation property progressTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner List Recent Plans",
					"value": "Users Planner List Recent Plans",
					"action": "List recentPlans",
					"description": "Retrieve a list of plannerPlans recently viewed by a user. You can update recently viewed plans by updating the plannerUser resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/recentPlans"
						}
					}
				},
				{
					"name": "Users Planner Get Recent Plans",
					"value": "Users Planner Get Recent Plans",
					"action": "Get recentPlans from users",
					"description": "Read-only. Nullable. Returns the plannerPlans that have been recently viewed by the user in apps that support recent plans.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/recentPlans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner List Roster Plans",
					"value": "Users Planner List Roster Plans",
					"action": "List rosterPlans",
					"description": "Get the list of plannerPlans that are contained by the plannerRosters of which the user is a member.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/rosterPlans"
						}
					}
				},
				{
					"name": "Users Planner Get Roster Plans",
					"value": "Users Planner Get Roster Plans",
					"action": "Get rosterPlans from users",
					"description": "Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/rosterPlans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner List Tasks",
					"value": "Users Planner List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of **plannertask** objects assigned to a User.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks"
						}
					}
				},
				{
					"name": "Users Planner Create Tasks",
					"value": "Users Planner Create Tasks",
					"action": "Create new navigation property to tasks for users",
					"description": "Create new navigation property to tasks for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks"
						}
					}
				},
				{
					"name": "Users Planner Delete Tasks",
					"value": "Users Planner Delete Tasks",
					"action": "Delete navigation property tasks for users",
					"description": "Delete navigation property tasks for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Get Tasks",
					"value": "Users Planner Get Tasks",
					"action": "Get tasks from users",
					"description": "Read-only. Nullable. Returns the plannerTasks assigned to the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Update Tasks",
					"value": "Users Planner Update Tasks",
					"action": "Update the navigation property tasks in users",
					"description": "Update the navigation property tasks in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Users Planner Tasks Delete Assigned To Task Board Format",
					"value": "Users Planner Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for users",
					"description": "Delete navigation property assignedToTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Tasks Get Assigned To Task Board Format",
					"value": "Users Planner Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Tasks Update Assigned To Task Board Format",
					"value": "Users Planner Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in users",
					"description": "Update the navigation property assignedToTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Tasks Delete Bucket Task Board Format",
					"value": "Users Planner Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for users",
					"description": "Delete navigation property bucketTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Tasks Get Bucket Task Board Format",
					"value": "Users Planner Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Tasks Update Bucket Task Board Format",
					"value": "Users Planner Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in users",
					"description": "Update the navigation property bucketTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Tasks Delete Details",
					"value": "Users Planner Tasks Delete Details",
					"action": "Delete navigation property details for users",
					"description": "Delete navigation property details for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Tasks Get Details",
					"value": "Users Planner Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Tasks Update Details",
					"value": "Users Planner Tasks Update Details",
					"action": "Update the navigation property details in users",
					"description": "Update the navigation property details in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Users Planner Tasks Delete Progress Task Board Format",
					"value": "Users Planner Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for users",
					"description": "Delete navigation property progressTaskBoardFormat for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Tasks Get Progress Task Board Format",
					"value": "Users Planner Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Users Planner Tasks Update Progress Task Board Format",
					"value": "Users Planner Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in users",
					"description": "Update the navigation property progressTaskBoardFormat in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Delete Planner"
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
						"Users Planner User"
					],
					"operation": [
						"Users Delete Planner"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Get Planner"
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
						"Users Planner User"
					],
					"operation": [
						"Users Get Planner"
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
						"Users Planner User"
					],
					"operation": [
						"Users Get Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Update Planner"
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
						"Users Planner User"
					],
					"operation": [
						"Users Update Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Update Planner"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List All"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Create All"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/all<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Create All"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/all/{plannerDelta-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Delete All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Delete All"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/all/{plannerDelta-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get All"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get All"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/all/{plannerDelta-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Update All"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/all/{plannerDelta-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Update All"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/favoritePlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Favorite Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Favorite Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Favorite Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Create Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/plans<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Create Plans"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Delete Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Delete Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Update Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Update Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Create Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Create Buckets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Delete Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Delete Buckets"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Buckets"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Buckets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Update Buckets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Update Buckets"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Delete Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Get Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Get Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Delete Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Delete Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Delete Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Delete Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Buckets Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Delete Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Update Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Update Details"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/plans/{plannerPlan-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/plans/{plannerPlan-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Delete Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Delete Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Delete Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Delete Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Delete Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Plans Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/recentPlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Recent Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Recent Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Recent Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/rosterPlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Roster Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Roster Plans"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Roster Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/planner/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Delete Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Tasks"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Delete Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Assigned To Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Delete Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Bucket Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Delete Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Details"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Delete Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Progress Task Board Format"
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
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Planner User"
					],
					"operation": [
						"Users Planner Tasks Update Progress Task Board Format"
					]
				}
			}
		},
];
