import type { INodeProperties } from 'n8n-workflow';

export const usersInformationProtectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Information Protection",
					"value": "Users Delete Information Protection",
					"action": "Delete navigation property informationProtection for users",
					"description": "Delete navigation property informationProtection for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection"
						}
					}
				},
				{
					"name": "Users Get Information Protection",
					"value": "Users Get Information Protection",
					"action": "Get informationProtection from users",
					"description": "Get informationProtection from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection"
						}
					}
				},
				{
					"name": "Users Update Information Protection",
					"value": "Users Update Information Protection",
					"action": "Update the navigation property informationProtection in users",
					"description": "Update the navigation property informationProtection in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection"
						}
					}
				},
				{
					"name": "Users Information Protection Get Bitlocker",
					"value": "Users Information Protection Get Bitlocker",
					"action": "Get bitlocker from users",
					"description": "Get bitlocker from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/bitlocker"
						}
					}
				},
				{
					"name": "Users Information Protection Bitlocker List Recovery Keys",
					"value": "Users Information Protection Bitlocker List Recovery Keys",
					"action": "List recoveryKeys",
					"description": "Get a list of the bitlockerRecoveryKey objects and their properties.  This operation does not return the **key** property. For information about how to read the **key** property, see Get bitlockerRecoveryKey.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/bitlocker/recoveryKeys"
						}
					}
				},
				{
					"name": "Users Information Protection Bitlocker Get Recovery Keys",
					"value": "Users Information Protection Bitlocker Get Recovery Keys",
					"action": "Get recoveryKeys from users",
					"description": "The recovery keys associated with the bitlocker entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/bitlocker/recoveryKeys/{{$parameter[\"bitlockerRecoveryKey-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection List Data Loss Prevention Policies",
					"value": "Users Information Protection List Data Loss Prevention Policies",
					"action": "Get dataLossPreventionPolicies from users",
					"description": "Get dataLossPreventionPolicies from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/dataLossPreventionPolicies"
						}
					}
				},
				{
					"name": "Users Information Protection Create Data Loss Prevention Policies",
					"value": "Users Information Protection Create Data Loss Prevention Policies",
					"action": "Create new navigation property to dataLossPreventionPolicies for users",
					"description": "Create new navigation property to dataLossPreventionPolicies for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/dataLossPreventionPolicies"
						}
					}
				},
				{
					"name": "Users Information Protection Delete Data Loss Prevention Policies",
					"value": "Users Information Protection Delete Data Loss Prevention Policies",
					"action": "Delete navigation property dataLossPreventionPolicies for users",
					"description": "Delete navigation property dataLossPreventionPolicies for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Get Data Loss Prevention Policies",
					"value": "Users Information Protection Get Data Loss Prevention Policies",
					"action": "Get dataLossPreventionPolicies from users",
					"description": "Get dataLossPreventionPolicies from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Update Data Loss Prevention Policies",
					"value": "Users Information Protection Update Data Loss Prevention Policies",
					"action": "Update the navigation property dataLossPreventionPolicies in users",
					"description": "Update the navigation property dataLossPreventionPolicies in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection List Sensitivity Labels",
					"value": "Users Information Protection List Sensitivity Labels",
					"action": "Get sensitivityLabels from users",
					"description": "Get sensitivityLabels from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Users Information Protection Create Sensitivity Labels",
					"value": "Users Information Protection Create Sensitivity Labels",
					"action": "Create new navigation property to sensitivityLabels for users",
					"description": "Create new navigation property to sensitivityLabels for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Users Information Protection Delete Sensitivity Labels",
					"value": "Users Information Protection Delete Sensitivity Labels",
					"action": "Delete navigation property sensitivityLabels for users",
					"description": "Delete navigation property sensitivityLabels for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Get Sensitivity Labels",
					"value": "Users Information Protection Get Sensitivity Labels",
					"action": "Get sensitivityLabels from users",
					"description": "Get sensitivityLabels from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Update Sensitivity Labels",
					"value": "Users Information Protection Update Sensitivity Labels",
					"action": "Update the navigation property sensitivityLabels in users",
					"description": "Update the navigation property sensitivityLabels in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Sensitivity Labels List Sublabels",
					"value": "Users Information Protection Sensitivity Labels List Sublabels",
					"action": "Get sublabels from users",
					"description": "Get sublabels from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels"
						}
					}
				},
				{
					"name": "Users Information Protection Sensitivity Labels Create Sublabels",
					"value": "Users Information Protection Sensitivity Labels Create Sublabels",
					"action": "Create new navigation property to sublabels for users",
					"description": "Create new navigation property to sublabels for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels"
						}
					}
				},
				{
					"name": "Users Information Protection Sensitivity Labels Delete Sublabels",
					"value": "Users Information Protection Sensitivity Labels Delete Sublabels",
					"action": "Delete navigation property sublabels for users",
					"description": "Delete navigation property sublabels for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Sensitivity Labels Get Sublabels",
					"value": "Users Information Protection Sensitivity Labels Get Sublabels",
					"action": "Get sublabels from users",
					"description": "Get sublabels from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Sensitivity Labels Update Sublabels",
					"value": "Users Information Protection Sensitivity Labels Update Sublabels",
					"action": "Update the navigation property sublabels in users",
					"description": "Update the navigation property sublabels in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Delete Sensitivity Policy Settings",
					"value": "Users Information Protection Delete Sensitivity Policy Settings",
					"action": "Delete navigation property sensitivityPolicySettings for users",
					"description": "Delete navigation property sensitivityPolicySettings for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityPolicySettings"
						}
					}
				},
				{
					"name": "Users Information Protection Get Sensitivity Policy Settings",
					"value": "Users Information Protection Get Sensitivity Policy Settings",
					"action": "Get sensitivityPolicySettings from users",
					"description": "Get sensitivityPolicySettings from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityPolicySettings"
						}
					}
				},
				{
					"name": "Users Information Protection Update Sensitivity Policy Settings",
					"value": "Users Information Protection Update Sensitivity Policy Settings",
					"action": "Update the navigation property sensitivityPolicySettings in users",
					"description": "Update the navigation property sensitivityPolicySettings in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/sensitivityPolicySettings"
						}
					}
				},
				{
					"name": "Users Information Protection List Threat Assessment Requests",
					"value": "Users Information Protection List Threat Assessment Requests",
					"action": "List threatAssessmentRequests",
					"description": "Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests"
						}
					}
				},
				{
					"name": "Users Information Protection Create Threat Assessment Requests",
					"value": "Users Information Protection Create Threat Assessment Requests",
					"action": "Create threatAssessmentRequest",
					"description": "Create a new threat assessment request. A threat assessment request can be one of the following types:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests"
						}
					}
				},
				{
					"name": "Users Information Protection Delete Threat Assessment Requests",
					"value": "Users Information Protection Delete Threat Assessment Requests",
					"action": "Delete navigation property threatAssessmentRequests for users",
					"description": "Delete navigation property threatAssessmentRequests for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Get Threat Assessment Requests",
					"value": "Users Information Protection Get Threat Assessment Requests",
					"action": "Get threatAssessmentRequests from users",
					"description": "Get threatAssessmentRequests from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Update Threat Assessment Requests",
					"value": "Users Information Protection Update Threat Assessment Requests",
					"action": "Update the navigation property threatAssessmentRequests in users",
					"description": "Update the navigation property threatAssessmentRequests in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Threat Assessment Requests List Results",
					"value": "Users Information Protection Threat Assessment Requests List Results",
					"action": "Get results from users",
					"description": "A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results"
						}
					}
				},
				{
					"name": "Users Information Protection Threat Assessment Requests Create Results",
					"value": "Users Information Protection Threat Assessment Requests Create Results",
					"action": "Create new navigation property to results for users",
					"description": "Create new navigation property to results for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results"
						}
					}
				},
				{
					"name": "Users Information Protection Threat Assessment Requests Delete Results",
					"value": "Users Information Protection Threat Assessment Requests Delete Results",
					"action": "Delete navigation property results for users",
					"description": "Delete navigation property results for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Threat Assessment Requests Get Results",
					"value": "Users Information Protection Threat Assessment Requests Get Results",
					"action": "Get results from users",
					"description": "A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				},
				{
					"name": "Users Information Protection Threat Assessment Requests Update Results",
					"value": "Users Information Protection Threat Assessment Requests Update Results",
					"action": "Update the navigation property results in users",
					"description": "Update the navigation property results in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Delete Information Protection"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Delete Information Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Get Information Protection"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Get Information Protection"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Get Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/bitlocker",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Bitlocker"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Bitlocker"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Bitlocker"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker List Recovery Keys"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker Get Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker Get Recovery Keys"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Bitlocker Get Recovery Keys"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/dataLossPreventionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/dataLossPreventionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Create Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/dataLossPreventionPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Create Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Delete Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Delete Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Data Loss Prevention Policies"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Update Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Update Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/sensitivityLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Delete Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Sensitivity Labels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Create Sublabels"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Create Sublabels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Delete Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Delete Sublabels"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Get Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Get Sublabels"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Get Sublabels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Update Sublabels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Sensitivity Labels Update Sublabels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Delete Sensitivity Policy Settings"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Delete Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Sensitivity Policy Settings"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Sensitivity Policy Settings"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Update Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Update Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/threatAssessmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection List Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/threatAssessmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Create Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/threatAssessmentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Create Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Delete Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Delete Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Threat Assessment Requests"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Get Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Update Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Update Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests List Results"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Create Results"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Create Results"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Delete Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Delete Results"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Get Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Get Results"
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
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Get Results"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Update Results"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Information Protection"
					],
					"operation": [
						"Users Information Protection Threat Assessment Requests Update Results"
					]
				}
			}
		},
];
