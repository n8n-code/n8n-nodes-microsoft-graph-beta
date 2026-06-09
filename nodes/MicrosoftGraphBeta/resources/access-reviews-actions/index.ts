import type { INodeProperties } from 'n8n-workflow';

export const accessReviewsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					]
				}
			},
			"options": [
				{
					"name": "Access Reviews Access Review Instances Access Review Apply Decisions",
					"value": "Access Reviews Access Review Instances Access Review Apply Decisions",
					"action": "Invoke action applyDecisions",
					"description": "In the Azure AD access reviews feature, apply the decisions of a completed accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.   After an access review is finished, either because it reached the end date or an administrator stopped it manually, and auto-apply wasn't configured for the review, you can call Apply to apply the changes. Until apply occurs, the decisions to remove access rights do not appear on the source resource, the users for instance retain their group memberships. By calling apply, the outcome of the review is implemented by updating the group or application. If a user's access was denied in the review, when an administrator calls this API, Azure AD removes their membership or application assignment.  After an access review is finished, and auto-apply was configured, then the status of the review will change from Completed through intermediate states and finally will change to state Applied. You should expect to see denied users, if any, being removed from the resource group membership or app assignment in a few minutes. A configured auto applying review, or selecting Apply doesn't have an effect on a group that originates in an on-premises directory or a dynamic group. If you want to change a group that originates on-premises, download the results and apply those changes to the representation of the group in that directory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/microsoft.graph.applyDecisions"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Instances Access Review Reset Decisions",
					"value": "Access Reviews Access Review Instances Access Review Reset Decisions",
					"action": "Invoke action resetDecisions",
					"description": "In the Azure AD access reviews feature, reset the decisions of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  Previous decisions are no longer recorded, but reviewers can continue to update decisions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/microsoft.graph.resetDecisions"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Instances Access Review Send Reminder",
					"value": "Access Reviews Access Review Instances Access Review Send Reminder",
					"action": "Invoke action sendReminder",
					"description": "In the Azure AD access reviews feature, send a reminder to the reviewers of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/microsoft.graph.sendReminder"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Instances Access Review Stop",
					"value": "Access Reviews Access Review Instances Access Review Stop",
					"action": "Invoke action stop",
					"description": "In the Azure AD access reviews feature, stop a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  (To prevent a recurring access review from starting future instances, update it to change its scheduled end date).  After the access review stops, reviewers can no longer give input, and the access review decisions can be applied.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/microsoft.graph.stop"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Apply Decisions",
					"value": "Access Reviews Access Review Apply Decisions",
					"action": "Invoke action applyDecisions",
					"description": "In the Azure AD access reviews feature, apply the decisions of a completed accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.   After an access review is finished, either because it reached the end date or an administrator stopped it manually, and auto-apply wasn't configured for the review, you can call Apply to apply the changes. Until apply occurs, the decisions to remove access rights do not appear on the source resource, the users for instance retain their group memberships. By calling apply, the outcome of the review is implemented by updating the group or application. If a user's access was denied in the review, when an administrator calls this API, Azure AD removes their membership or application assignment.  After an access review is finished, and auto-apply was configured, then the status of the review will change from Completed through intermediate states and finally will change to state Applied. You should expect to see denied users, if any, being removed from the resource group membership or app assignment in a few minutes. A configured auto applying review, or selecting Apply doesn't have an effect on a group that originates in an on-premises directory or a dynamic group. If you want to change a group that originates on-premises, download the results and apply those changes to the representation of the group in that directory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/microsoft.graph.applyDecisions"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Reset Decisions",
					"value": "Access Reviews Access Review Reset Decisions",
					"action": "Invoke action resetDecisions",
					"description": "In the Azure AD access reviews feature, reset the decisions of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  Previous decisions are no longer recorded, but reviewers can continue to update decisions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/microsoft.graph.resetDecisions"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Send Reminder",
					"value": "Access Reviews Access Review Send Reminder",
					"action": "Invoke action sendReminder",
					"description": "In the Azure AD access reviews feature, send a reminder to the reviewers of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/microsoft.graph.sendReminder"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Stop",
					"value": "Access Reviews Access Review Stop",
					"action": "Invoke action stop",
					"description": "In the Azure AD access reviews feature, stop a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  (To prevent a recurring access review from starting future instances, update it to change its scheduled end date).  After the access review stops, reviewers can no longer give input, and the access review decisions can be applied.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/microsoft.graph.stop"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/microsoft.graph.applyDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					],
					"operation": [
						"Access Reviews Access Review Instances Access Review Apply Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/microsoft.graph.resetDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					],
					"operation": [
						"Access Reviews Access Review Instances Access Review Reset Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/microsoft.graph.sendReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					],
					"operation": [
						"Access Reviews Access Review Instances Access Review Send Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/microsoft.graph.stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					],
					"operation": [
						"Access Reviews Access Review Instances Access Review Stop"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/microsoft.graph.applyDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					],
					"operation": [
						"Access Reviews Access Review Apply Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/microsoft.graph.resetDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					],
					"operation": [
						"Access Reviews Access Review Reset Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/microsoft.graph.sendReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					],
					"operation": [
						"Access Reviews Access Review Send Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/microsoft.graph.stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Actions"
					],
					"operation": [
						"Access Reviews Access Review Stop"
					]
				}
			}
		},
];
