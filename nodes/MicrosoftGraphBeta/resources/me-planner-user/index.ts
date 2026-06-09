import type { INodeProperties } from 'n8n-workflow';

export const mePlannerUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Planner",
					"value": "Me Delete Planner",
					"action": "Delete navigation property planner for me",
					"description": "Delete navigation property planner for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner"
						}
					}
				},
				{
					"name": "Me Get Planner",
					"value": "Me Get Planner",
					"action": "Get plannerUser",
					"description": "Retrieve the properties and relationships of a plannerUser object. The returned properties include the user's favorite plans and recently viewed plans. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner"
						}
					}
				},
				{
					"name": "Me Update Planner",
					"value": "Me Update Planner",
					"action": "Update the navigation property planner in me",
					"description": "Update the navigation property planner in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner"
						}
					}
				},
				{
					"name": "Me Planner List All",
					"value": "Me Planner List All",
					"action": "Get all from me",
					"description": "Get all from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/all"
						}
					}
				},
				{
					"name": "Me Planner Create All",
					"value": "Me Planner Create All",
					"action": "Create new navigation property to all for me",
					"description": "Create new navigation property to all for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/planner/all"
						}
					}
				},
				{
					"name": "Me Planner Delete All",
					"value": "Me Planner Delete All",
					"action": "Delete navigation property all for me",
					"description": "Delete navigation property all for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/all/{{$parameter[\"plannerDelta-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Get All",
					"value": "Me Planner Get All",
					"action": "Get all from me",
					"description": "Get all from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/all/{{$parameter[\"plannerDelta-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Update All",
					"value": "Me Planner Update All",
					"action": "Update the navigation property all in me",
					"description": "Update the navigation property all in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/all/{{$parameter[\"plannerDelta-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner List Favorite Plans",
					"value": "Me Planner List Favorite Plans",
					"action": "List favoritePlans",
					"description": "Retrieve a list of plannerPlans that are marked as favorite by a user. You can mark a plan as favorite by updating the plannerUser resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/favoritePlans"
						}
					}
				},
				{
					"name": "Me Planner Get Favorite Plans",
					"value": "Me Planner Get Favorite Plans",
					"action": "Get favoritePlans from me",
					"description": "Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/favoritePlans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner List Plans",
					"value": "Me Planner List Plans",
					"action": "List plans",
					"description": "Retrieve a list of **plannerplan** objects shared with a user object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans"
						}
					}
				},
				{
					"name": "Me Planner Create Plans",
					"value": "Me Planner Create Plans",
					"action": "Create new navigation property to plans for me",
					"description": "Create new navigation property to plans for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/planner/plans"
						}
					}
				},
				{
					"name": "Me Planner Delete Plans",
					"value": "Me Planner Delete Plans",
					"action": "Delete navigation property plans for me",
					"description": "Delete navigation property plans for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Get Plans",
					"value": "Me Planner Get Plans",
					"action": "Get plans from me",
					"description": "Get plans from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Update Plans",
					"value": "Me Planner Update Plans",
					"action": "Update the navigation property plans in me",
					"description": "Update the navigation property plans in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans List Buckets",
					"value": "Me Planner Plans List Buckets",
					"action": "List buckets",
					"description": "Retrieve a list of plannerBucket objects contained by a plannerPlan object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets"
						}
					}
				},
				{
					"name": "Me Planner Plans Create Buckets",
					"value": "Me Planner Plans Create Buckets",
					"action": "Create new navigation property to buckets for me",
					"description": "Create new navigation property to buckets for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets"
						}
					}
				},
				{
					"name": "Me Planner Plans Delete Buckets",
					"value": "Me Planner Plans Delete Buckets",
					"action": "Delete navigation property buckets for me",
					"description": "Delete navigation property buckets for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Get Buckets",
					"value": "Me Planner Plans Get Buckets",
					"action": "Get buckets from me",
					"description": "Collection of buckets in the plan. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Update Buckets",
					"value": "Me Planner Plans Update Buckets",
					"action": "Update the navigation property buckets in me",
					"description": "Update the navigation property buckets in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets List Tasks",
					"value": "Me Planner Plans Buckets List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of plannerTask objects associated to a plannerBucket object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Create Tasks",
					"value": "Me Planner Plans Buckets Create Tasks",
					"action": "Create new navigation property to tasks for me",
					"description": "Create new navigation property to tasks for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Delete Tasks",
					"value": "Me Planner Plans Buckets Delete Tasks",
					"action": "Delete navigation property tasks for me",
					"description": "Delete navigation property tasks for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Get Tasks",
					"value": "Me Planner Plans Buckets Get Tasks",
					"action": "Get tasks from me",
					"description": "Read-only. Nullable. The collection of tasks in the bucket.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Update Tasks",
					"value": "Me Planner Plans Buckets Update Tasks",
					"action": "Update the navigation property tasks in me",
					"description": "Update the navigation property tasks in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Delete Assigned To Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for me",
					"description": "Delete navigation property assignedToTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Get Assigned To Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Update Assigned To Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in me",
					"description": "Update the navigation property assignedToTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Delete Bucket Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for me",
					"description": "Delete navigation property bucketTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Get Bucket Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Update Bucket Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in me",
					"description": "Update the navigation property bucketTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Delete Details",
					"value": "Me Planner Plans Buckets Tasks Delete Details",
					"action": "Delete navigation property details for me",
					"description": "Delete navigation property details for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Get Details",
					"value": "Me Planner Plans Buckets Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Update Details",
					"value": "Me Planner Plans Buckets Tasks Update Details",
					"action": "Update the navigation property details in me",
					"description": "Update the navigation property details in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Delete Progress Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for me",
					"description": "Delete navigation property progressTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Get Progress Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Buckets Tasks Update Progress Task Board Format",
					"value": "Me Planner Plans Buckets Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in me",
					"description": "Update the navigation property progressTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/buckets/{{$parameter[\"plannerBucket-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Delete Details",
					"value": "Me Planner Plans Delete Details",
					"action": "Delete navigation property details for me",
					"description": "Delete navigation property details for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans Get Details",
					"value": "Me Planner Plans Get Details",
					"action": "Get plannerPlanDetails",
					"description": "Retrieve the properties and relationships of a **plannerPlanDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans Update Details",
					"value": "Me Planner Plans Update Details",
					"action": "Update the navigation property details in me",
					"description": "Update the navigation property details in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans List Tasks",
					"value": "Me Planner Plans List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of plannerTask objects associated with a plannerPlan object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Me Planner Plans Create Tasks",
					"value": "Me Planner Plans Create Tasks",
					"action": "Create new navigation property to tasks for me",
					"description": "Create new navigation property to tasks for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Me Planner Plans Delete Tasks",
					"value": "Me Planner Plans Delete Tasks",
					"action": "Delete navigation property tasks for me",
					"description": "Delete navigation property tasks for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Get Tasks",
					"value": "Me Planner Plans Get Tasks",
					"action": "Get tasks from me",
					"description": "Collection of tasks in the plan. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Update Tasks",
					"value": "Me Planner Plans Update Tasks",
					"action": "Update the navigation property tasks in me",
					"description": "Update the navigation property tasks in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Delete Assigned To Task Board Format",
					"value": "Me Planner Plans Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for me",
					"description": "Delete navigation property assignedToTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Get Assigned To Task Board Format",
					"value": "Me Planner Plans Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Update Assigned To Task Board Format",
					"value": "Me Planner Plans Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in me",
					"description": "Update the navigation property assignedToTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Delete Bucket Task Board Format",
					"value": "Me Planner Plans Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for me",
					"description": "Delete navigation property bucketTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Get Bucket Task Board Format",
					"value": "Me Planner Plans Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Update Bucket Task Board Format",
					"value": "Me Planner Plans Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in me",
					"description": "Update the navigation property bucketTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Delete Details",
					"value": "Me Planner Plans Tasks Delete Details",
					"action": "Delete navigation property details for me",
					"description": "Delete navigation property details for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Get Details",
					"value": "Me Planner Plans Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Update Details",
					"value": "Me Planner Plans Tasks Update Details",
					"action": "Update the navigation property details in me",
					"description": "Update the navigation property details in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Delete Progress Task Board Format",
					"value": "Me Planner Plans Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for me",
					"description": "Delete navigation property progressTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Get Progress Task Board Format",
					"value": "Me Planner Plans Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Plans Tasks Update Progress Task Board Format",
					"value": "Me Planner Plans Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in me",
					"description": "Update the navigation property progressTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/plans/{{$parameter[\"plannerPlan-id\"]}}/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner List Recent Plans",
					"value": "Me Planner List Recent Plans",
					"action": "List recentPlans",
					"description": "Retrieve a list of plannerPlans recently viewed by a user. You can update recently viewed plans by updating the plannerUser resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/recentPlans"
						}
					}
				},
				{
					"name": "Me Planner Get Recent Plans",
					"value": "Me Planner Get Recent Plans",
					"action": "Get recentPlans from me",
					"description": "Read-only. Nullable. Returns the plannerPlans that have been recently viewed by the user in apps that support recent plans.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/recentPlans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner List Roster Plans",
					"value": "Me Planner List Roster Plans",
					"action": "List rosterPlans",
					"description": "Get the list of plannerPlans that are contained by the plannerRosters of which the user is a member.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/rosterPlans"
						}
					}
				},
				{
					"name": "Me Planner Get Roster Plans",
					"value": "Me Planner Get Roster Plans",
					"action": "Get rosterPlans from me",
					"description": "Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/rosterPlans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner List Tasks",
					"value": "Me Planner List Tasks",
					"action": "List tasks",
					"description": "Retrieve a list of **plannertask** objects assigned to a User.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/tasks"
						}
					}
				},
				{
					"name": "Me Planner Create Tasks",
					"value": "Me Planner Create Tasks",
					"action": "Create new navigation property to tasks for me",
					"description": "Create new navigation property to tasks for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/planner/tasks"
						}
					}
				},
				{
					"name": "Me Planner Delete Tasks",
					"value": "Me Planner Delete Tasks",
					"action": "Delete navigation property tasks for me",
					"description": "Delete navigation property tasks for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Get Tasks",
					"value": "Me Planner Get Tasks",
					"action": "Get tasks from me",
					"description": "Read-only. Nullable. Returns the plannerTasks assigned to the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Update Tasks",
					"value": "Me Planner Update Tasks",
					"action": "Update the navigation property tasks in me",
					"description": "Update the navigation property tasks in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}"
						}
					}
				},
				{
					"name": "Me Planner Tasks Delete Assigned To Task Board Format",
					"value": "Me Planner Tasks Delete Assigned To Task Board Format",
					"action": "Delete navigation property assignedToTaskBoardFormat for me",
					"description": "Delete navigation property assignedToTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Tasks Get Assigned To Task Board Format",
					"value": "Me Planner Tasks Get Assigned To Task Board Format",
					"action": "Get plannerAssignedToTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerAssignedToTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Tasks Update Assigned To Task Board Format",
					"value": "Me Planner Tasks Update Assigned To Task Board Format",
					"action": "Update the navigation property assignedToTaskBoardFormat in me",
					"description": "Update the navigation property assignedToTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/assignedToTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Tasks Delete Bucket Task Board Format",
					"value": "Me Planner Tasks Delete Bucket Task Board Format",
					"action": "Delete navigation property bucketTaskBoardFormat for me",
					"description": "Delete navigation property bucketTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Tasks Get Bucket Task Board Format",
					"value": "Me Planner Tasks Get Bucket Task Board Format",
					"action": "Get plannerBucketTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerBucketTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Tasks Update Bucket Task Board Format",
					"value": "Me Planner Tasks Update Bucket Task Board Format",
					"action": "Update the navigation property bucketTaskBoardFormat in me",
					"description": "Update the navigation property bucketTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/bucketTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Tasks Delete Details",
					"value": "Me Planner Tasks Delete Details",
					"action": "Delete navigation property details for me",
					"description": "Delete navigation property details for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Tasks Get Details",
					"value": "Me Planner Tasks Get Details",
					"action": "Get plannerTaskDetails",
					"description": "Retrieve the properties and relationships of a **plannerTaskDetails** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Tasks Update Details",
					"value": "Me Planner Tasks Update Details",
					"action": "Update the navigation property details in me",
					"description": "Update the navigation property details in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/details"
						}
					}
				},
				{
					"name": "Me Planner Tasks Delete Progress Task Board Format",
					"value": "Me Planner Tasks Delete Progress Task Board Format",
					"action": "Delete navigation property progressTaskBoardFormat for me",
					"description": "Delete navigation property progressTaskBoardFormat for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Tasks Get Progress Task Board Format",
					"value": "Me Planner Tasks Get Progress Task Board Format",
					"action": "Get plannerProgressTaskBoardTaskFormat",
					"description": "Retrieve the properties and relationships of **plannerProgressTaskBoardTaskFormat** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				},
				{
					"name": "Me Planner Tasks Update Progress Task Board Format",
					"value": "Me Planner Tasks Update Progress Task Board Format",
					"action": "Update the navigation property progressTaskBoardFormat in me",
					"description": "Update the navigation property progressTaskBoardFormat in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/planner/tasks/{{$parameter[\"plannerTask-id\"]}}/progressTaskBoardFormat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Delete Planner"
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
						"Me Planner User"
					],
					"operation": [
						"Me Delete Planner"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Get Planner"
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
						"Me Planner User"
					],
					"operation": [
						"Me Get Planner"
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
						"Me Planner User"
					],
					"operation": [
						"Me Get Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Update Planner"
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
						"Me Planner User"
					],
					"operation": [
						"Me Update Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Update Planner"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List All"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Create All"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/all<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Create All"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/all/{plannerDelta-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Delete All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Delete All"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/all/{plannerDelta-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get All"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get All"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/all/{plannerDelta-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Update All"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/all/{plannerDelta-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Update All"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/favoritePlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Favorite Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/favoritePlans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Favorite Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Favorite Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Create Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/plans<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Create Plans"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Delete Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Delete Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Update Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Update Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/plans/{plannerPlan-id}/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Create Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/plans/{plannerPlan-id}/buckets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Create Buckets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Delete Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Delete Buckets"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Buckets"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Buckets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Update Buckets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Update Buckets"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Delete Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Get Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Get Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Delete Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Delete Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Delete Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Delete Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Buckets Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Delete Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Update Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Update Details"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/plans/{plannerPlan-id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/plans/{plannerPlan-id}/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Delete Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Delete Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Delete Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Delete Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Delete Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Plans Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/recentPlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Recent Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/recentPlans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Recent Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Recent Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/rosterPlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Roster Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/rosterPlans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Roster Plans"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Roster Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner List Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/planner/tasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Create Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Delete Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Delete Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Tasks"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Update Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Delete Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Delete Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Assigned To Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Assigned To Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Delete Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Delete Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Bucket Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Bucket Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Delete Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Delete Details"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Details"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}/details<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Delete Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Delete Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Get Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Progress Task Board Format"
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
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Progress Task Board Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Planner User"
					],
					"operation": [
						"Me Planner Tasks Update Progress Task Board Format"
					]
				}
			}
		},
];
