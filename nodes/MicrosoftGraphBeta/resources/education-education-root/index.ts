import type { INodeProperties } from 'n8n-workflow';

export const educationEducationRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					]
				}
			},
			"options": [
				{
					"name": "Education Education Root Get Education Root",
					"value": "Education Education Root Get Education Root",
					"action": "Get education",
					"description": "Get education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education"
						}
					}
				},
				{
					"name": "Education Education Root Update Education Root",
					"value": "Education Education Root Update Education Root",
					"action": "Update education",
					"description": "Update education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /education",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Get Education Root"
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
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Get Education Root"
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
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Get Education Root"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Update Education Root"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Update Education Root"
					]
				}
			}
		},
		{
			"displayName": "Classes",
			"name": "classes",
			"type": "json",
			"default": "[\n  {\n    \"assignmentCategories\": [\n      {}\n    ],\n    \"assignmentDefaults\": {},\n    \"assignmentSettings\": {},\n    \"assignments\": [\n      {\n        \"addToCalendarAction\": {},\n        \"addedStudentAction\": {},\n        \"assignTo\": {},\n        \"categories\": [\n          {}\n        ],\n        \"createdBy\": {\n          \"application\": {},\n          \"device\": {},\n          \"user\": {}\n        },\n        \"grading\": {},\n        \"instructions\": {},\n        \"lastModifiedBy\": {},\n        \"resources\": [\n          {\n            \"resource\": {\n              \"createdBy\": {},\n              \"lastModifiedBy\": {}\n            }\n          }\n        ],\n        \"rubric\": {\n          \"createdBy\": {},\n          \"description\": {},\n          \"grading\": {},\n          \"lastModifiedBy\": {},\n          \"levels\": [\n            {\n              \"description\": {},\n              \"grading\": {}\n            }\n          ],\n          \"qualities\": [\n            {\n              \"criteria\": [\n                {\n                  \"description\": {}\n                }\n              ],\n              \"description\": {}\n            }\n          ]\n        },\n        \"submissions\": [\n          {\n            \"outcomes\": [\n              {\n                \"lastModifiedBy\": {}\n              }\n            ],\n            \"reassignedBy\": {},\n            \"recipient\": {},\n            \"resources\": [\n              {\n                \"resource\": {}\n              }\n            ],\n            \"returnedBy\": {},\n            \"submittedBy\": {},\n            \"submittedResources\": [\n              {}\n            ],\n            \"unsubmittedBy\": {}\n          }\n        ]\n      }\n    ],\n    \"course\": {},\n    \"createdBy\": {},\n    \"group\": {\n      \"@odata.type\": \"#microsoft.graph.group\",\n      \"acceptedSenders\": [\n        {}\n      ],\n      \"appRoleAssignments\": [\n        {}\n      ],\n      \"assignedLabels\": [\n        {}\n      ],\n      \"assignedLicenses\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"calendar\": {\n        \"allowedOnlineMeetingProviders\": [\n          null\n        ],\n        \"calendarPermissions\": [\n          {\n            \"allowedRoles\": [\n              null\n            ],\n            \"emailAddress\": {},\n            \"role\": {}\n          }\n        ],\n        \"calendarView\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.event\",\n            \"categories\": [\n              null\n            ],\n            \"attachments\": [\n              {}\n            ],\n            \"attendees\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.attendee\",\n                \"emailAddress\": {},\n                \"proposedNewTime\": {\n                  \"end\": {},\n                  \"start\": {}\n                },\n                \"status\": {}\n              }\n            ],\n            \"body\": {\n              \"contentType\": {}\n            },\n            \"calendar\": {},\n            \"cancelledOccurrences\": [\n              null\n            ],\n            \"end\": {},\n            \"exceptionOccurrences\": [\n              {}\n            ],\n            \"extensions\": [\n              {}\n            ],\n            \"instances\": [\n              {}\n            ],\n            \"location\": {\n              \"address\": {},\n              \"coordinates\": {}\n            },\n            \"locations\": [\n              {}\n            ],\n            \"multiValueExtendedProperties\": [\n              {\n                \"value\": [\n                  null\n                ]\n              }\n            ],\n            \"onlineMeeting\": {\n              \"phones\": [\n                {}\n              ],\n              \"tollFreeNumbers\": [\n                null\n              ]\n            },\n            \"onlineMeetingProvider\": {},\n            \"organizer\": {},\n            \"recurrence\": {\n              \"pattern\": {\n                \"daysOfWeek\": [\n                  null\n                ],\n                \"firstDayOfWeek\": {}\n              },\n              \"range\": {}\n            },\n            \"responseStatus\": {},\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"start\": {}\n          }\n        ],\n        \"defaultOnlineMeetingProvider\": {},\n        \"events\": [\n          {}\n        ],\n        \"multiValueExtendedProperties\": [\n          {}\n        ],\n        \"owner\": {},\n        \"singleValueExtendedProperties\": [\n          {}\n        ]\n      },\n      \"calendarView\": [\n        {}\n      ],\n      \"conversations\": [\n        {\n          \"threads\": [\n            {\n              \"ccRecipients\": [\n                {}\n              ],\n              \"posts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.post\",\n                  \"attachments\": [\n                    {}\n                  ],\n                  \"body\": {},\n                  \"extensions\": [\n                    {}\n                  ],\n                  \"from\": {},\n                  \"importance\": {},\n                  \"inReplyTo\": {},\n                  \"mentions\": [\n                    {\n                      \"createdBy\": {},\n                      \"mentioned\": {}\n                    }\n                  ],\n                  \"multiValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"newParticipants\": [\n                    {}\n                  ],\n                  \"sender\": {},\n                  \"singleValueExtendedProperties\": [\n                    {}\n                  ]\n                }\n              ],\n              \"toRecipients\": [\n                {}\n              ],\n              \"uniqueSenders\": [\n                null\n              ]\n            }\n          ],\n          \"uniqueSenders\": [\n            null\n          ]\n        }\n      ],\n      \"createdOnBehalfOf\": {},\n      \"drive\": {\n        \"@odata.type\": \"#microsoft.graph.drive\",\n        \"createdBy\": {},\n        \"createdByUser\": {\n          \"@odata.type\": \"#microsoft.graph.user\",\n          \"activities\": [\n            {\n              \"contentInfo\": {},\n              \"historyItems\": [\n                {\n                  \"activity\": {}\n                }\n              ],\n              \"status\": {},\n              \"visualElements\": {\n                \"attribution\": {},\n                \"content\": {}\n              }\n            }\n          ],\n          \"agreementAcceptances\": [\n            {}\n          ],\n          \"analytics\": {\n            \"activityStatistics\": [\n              {}\n            ],\n            \"settings\": {}\n          },\n          \"appConsentRequestsForApproval\": [\n            {\n              \"pendingScopes\": [\n                {}\n              ],\n              \"userConsentRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.userConsentRequest\",\n                  \"createdBy\": {},\n                  \"approval\": {\n                    \"steps\": [\n                      {\n                        \"reviewedBy\": {}\n                      }\n                    ]\n                  }\n                }\n              ]\n            }\n          ],\n          \"appRoleAssignedResources\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.servicePrincipal\",\n              \"addIns\": [\n                {\n                  \"properties\": [\n                    {}\n                  ]\n                }\n              ],\n              \"alternativeNames\": [\n                null\n              ],\n              \"appManagementPolicies\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.appManagementPolicy\",\n                  \"appliesTo\": [\n                    {}\n                  ],\n                  \"restrictions\": {\n                    \"keyCredentials\": [\n                      {}\n                    ],\n                    \"passwordCredentials\": [\n                      {}\n                    ]\n                  }\n                }\n              ],\n              \"appRoleAssignedTo\": [\n                {}\n              ],\n              \"appRoleAssignments\": [\n                {}\n              ],\n              \"appRoles\": [\n                {\n                  \"allowedMemberTypes\": [\n                    null\n                  ]\n                }\n              ],\n              \"claimsMappingPolicies\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.claimsMappingPolicy\",\n                  \"appliesTo\": [\n                    {}\n                  ],\n                  \"definition\": [\n                    null\n                  ]\n                }\n              ],\n              \"createdObjects\": [\n                {}\n              ],\n              \"customSecurityAttributes\": {},\n              \"delegatedPermissionClassifications\": [\n                {}\n              ],\n              \"endpoints\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.endpoint\"\n                }\n              ],\n              \"federatedIdentityCredentials\": [\n                {\n                  \"audiences\": [\n                    null\n                  ]\n                }\n              ],\n              \"homeRealmDiscoveryPolicies\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.homeRealmDiscoveryPolicy\"\n                }\n              ],\n              \"info\": {},\n              \"keyCredentials\": [\n                {}\n              ],\n              \"licenseDetails\": [\n                {\n                  \"servicePlans\": [\n                    {}\n                  ]\n                }\n              ],\n              \"memberOf\": [\n                {}\n              ],\n              \"notificationEmailAddresses\": [\n                null\n              ],\n              \"oauth2PermissionGrants\": [\n                {}\n              ],\n              \"ownedObjects\": [\n                {}\n              ],\n              \"owners\": [\n                {}\n              ],\n              \"passwordCredentials\": [\n                {}\n              ],\n              \"passwordSingleSignOnSettings\": {\n                \"fields\": [\n                  {}\n                ]\n              },\n              \"publishedPermissionScopes\": [\n                {}\n              ],\n              \"replyUrls\": [\n                null\n              ],\n              \"samlSingleSignOnSettings\": {},\n              \"servicePrincipalNames\": [\n                null\n              ],\n              \"synchronization\": {\n                \"jobs\": [\n                  {\n                    \"schedule\": {},\n                    \"schema\": {\n                      \"directories\": [\n                        {\n                          \"objects\": [\n                            {\n                              \"attributes\": [\n                                {\n                                  \"apiExpressions\": [\n                                    {}\n                                  ],\n                                  \"metadata\": [\n                                    {}\n                                  ],\n                                  \"referencedObjects\": [\n                                    {}\n                                  ]\n                                }\n                              ],\n                              \"metadata\": [\n                                {}\n                              ],\n                              \"supportedApis\": [\n                                null\n                              ]\n                            }\n                          ]\n                        }\n                      ],\n                      \"synchronizationRules\": [\n                        {\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"objectMappings\": [\n                            {\n                              \"attributeMappings\": [\n                                {\n                                  \"source\": {\n                                    \"parameters\": [\n                                      {\n                                        \"value\": {}\n                                      }\n                                    ]\n                                  }\n                                }\n                              ],\n                              \"metadata\": [\n                                {}\n                              ],\n                              \"scope\": {\n                                \"categoryFilterGroups\": [\n                                  {\n                                    \"clauses\": [\n                                      {\n                                        \"targetOperand\": {\n                                          \"values\": [\n                                            null\n                                          ]\n                                        }\n                                      }\n                                    ]\n                                  }\n                                ],\n                                \"groups\": [\n                                  {}\n                                ],\n                                \"inputFilterGroups\": [\n                                  {}\n                                ]\n                              }\n                            }\n                          ]\n                        }\n                      ]\n                    },\n                    \"status\": {\n                      \"lastExecution\": {\n                        \"error\": {}\n                      },\n                      \"lastSuccessfulExecution\": {},\n                      \"lastSuccessfulExecutionWithExports\": {},\n                      \"progress\": [\n                        {}\n                      ],\n                      \"quarantine\": {\n                        \"error\": {}\n                      },\n                      \"synchronizedEntryCountByType\": [\n                        {}\n                      ]\n                    },\n                    \"synchronizationJobSettings\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"secrets\": [\n                  {}\n                ],\n                \"templates\": [\n                  {\n                    \"metadata\": [\n                      {}\n                    ],\n                    \"schema\": {}\n                  }\n                ]\n              },\n              \"tags\": [\n                null\n              ],\n              \"tokenIssuancePolicies\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.tokenIssuancePolicy\"\n                }\n              ],\n              \"tokenLifetimePolicies\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.tokenLifetimePolicy\"\n                }\n              ],\n              \"transitiveMemberOf\": [\n                {}\n              ],\n              \"verifiedPublisher\": {}\n            }\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"approvals\": [\n            {}\n          ],\n          \"assignedLicenses\": [\n            {}\n          ],\n          \"assignedPlans\": [\n            {}\n          ],\n          \"authentication\": {\n            \"emailMethods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.emailAuthenticationMethod\"\n              }\n            ],\n            \"fido2Methods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.fido2AuthenticationMethod\",\n                \"attestationCertificates\": [\n                  null\n                ]\n              }\n            ],\n            \"methods\": [\n              {}\n            ],\n            \"microsoftAuthenticatorMethods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.microsoftAuthenticatorAuthenticationMethod\",\n                \"device\": {\n                  \"@odata.type\": \"#microsoft.graph.device\",\n                  \"alternativeSecurityIds\": [\n                    {}\n                  ],\n                  \"commands\": [\n                    {\n                      \"payload\": {},\n                      \"responsepayload\": {}\n                    }\n                  ],\n                  \"extensionAttributes\": {},\n                  \"extensions\": [\n                    {}\n                  ],\n                  \"hostnames\": [\n                    null\n                  ],\n                  \"memberOf\": [\n                    {}\n                  ],\n                  \"physicalIds\": [\n                    null\n                  ],\n                  \"registeredOwners\": [\n                    {}\n                  ],\n                  \"registeredUsers\": [\n                    {}\n                  ],\n                  \"systemLabels\": [\n                    null\n                  ],\n                  \"transitiveMemberOf\": [\n                    {}\n                  ],\n                  \"usageRights\": [\n                    {}\n                  ]\n                }\n              }\n            ],\n            \"operations\": [\n              {}\n            ],\n            \"passwordMethods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.passwordAuthenticationMethod\"\n              }\n            ],\n            \"passwordlessMicrosoftAuthenticatorMethods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod\",\n                \"device\": {}\n              }\n            ],\n            \"phoneMethods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.phoneAuthenticationMethod\"\n              }\n            ],\n            \"softwareOathMethods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.softwareOathAuthenticationMethod\"\n              }\n            ],\n            \"temporaryAccessPassMethods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.temporaryAccessPassAuthenticationMethod\"\n              }\n            ],\n            \"windowsHelloForBusinessMethods\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.windowsHelloForBusinessAuthenticationMethod\",\n                \"device\": {}\n              }\n            ]\n          },\n          \"authorizationInfo\": {\n            \"certificateUserIds\": [\n              null\n            ]\n          },\n          \"businessPhones\": [\n            null\n          ],\n          \"calendar\": {},\n          \"calendarGroups\": [\n            {\n              \"calendars\": [\n                {}\n              ]\n            }\n          ],\n          \"calendarView\": [\n            {}\n          ],\n          \"calendars\": [\n            {}\n          ],\n          \"chats\": [\n            {\n              \"installedApps\": [\n                {\n                  \"teamsApp\": {\n                    \"appDefinitions\": [\n                      {\n                        \"bot\": {},\n                        \"colorIcon\": {\n                          \"hostedContent\": {}\n                        },\n                        \"createdBy\": {},\n                        \"outlineIcon\": {}\n                      }\n                    ]\n                  },\n                  \"teamsAppDefinition\": {}\n                }\n              ],\n              \"lastMessagePreview\": {\n                \"body\": {},\n                \"eventDetail\": {},\n                \"from\": {\n                  \"@odata.type\": \"#microsoft.graph.chatMessageFromIdentitySet\"\n                }\n              },\n              \"members\": [\n                {\n                  \"roles\": [\n                    null\n                  ]\n                }\n              ],\n              \"messages\": [\n                {\n                  \"attachments\": [\n                    {}\n                  ],\n                  \"body\": {},\n                  \"channelIdentity\": {},\n                  \"eventDetail\": {},\n                  \"from\": {},\n                  \"hostedContents\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.chatMessageHostedContent\"\n                    }\n                  ],\n                  \"mentions\": [\n                    {\n                      \"mentioned\": {\n                        \"@odata.type\": \"#microsoft.graph.chatMessageMentionedIdentitySet\",\n                        \"conversation\": {\n                          \"@odata.type\": \"#microsoft.graph.teamworkConversationIdentity\"\n                        },\n                        \"tag\": {\n                          \"@odata.type\": \"#microsoft.graph.teamworkTagIdentity\"\n                        }\n                      }\n                    }\n                  ],\n                  \"messageHistory\": [\n                    {\n                      \"reaction\": {\n                        \"user\": {\n                          \"@odata.type\": \"#microsoft.graph.chatMessageReactionIdentitySet\"\n                        }\n                      }\n                    }\n                  ],\n                  \"messageType\": {},\n                  \"onBehalfOf\": {},\n                  \"policyViolation\": {\n                    \"policyTip\": {\n                      \"matchedConditionDescriptions\": [\n                        null\n                      ]\n                    }\n                  },\n                  \"reactions\": [\n                    {}\n                  ],\n                  \"replies\": [\n                    {}\n                  ]\n                }\n              ],\n              \"onlineMeetingInfo\": {\n                \"organizer\": {\n                  \"@odata.type\": \"#microsoft.graph.teamworkUserIdentity\"\n                }\n              },\n              \"operations\": [\n                {\n                  \"error\": {}\n                }\n              ],\n              \"permissionGrants\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.resourceSpecificPermissionGrant\"\n                }\n              ],\n              \"pinnedMessages\": [\n                {\n                  \"message\": {}\n                }\n              ],\n              \"tabs\": [\n                {\n                  \"configuration\": {},\n                  \"teamsApp\": {}\n                }\n              ],\n              \"viewpoint\": {}\n            }\n          ],\n          \"cloudPCs\": [\n            {\n              \"connectivityResult\": {\n                \"failedHealthCheckItems\": [\n                  {}\n                ]\n              },\n              \"lastLoginResult\": {},\n              \"lastRemoteActionResult\": {\n                \"statusDetails\": {\n                  \"additionalInformation\": [\n                    {}\n                  ]\n                }\n              },\n              \"partnerAgentInstallResults\": [\n                {}\n              ],\n              \"statusDetails\": {}\n            }\n          ],\n          \"contactFolders\": [\n            {\n              \"childFolders\": [\n                {}\n              ],\n              \"contacts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.contact\",\n                  \"children\": [\n                    null\n                  ],\n                  \"emailAddresses\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.typedEmailAddress\"\n                    }\n                  ],\n                  \"extensions\": [\n                    {}\n                  ],\n                  \"flag\": {\n                    \"completedDateTime\": {},\n                    \"dueDateTime\": {},\n                    \"startDateTime\": {}\n                  },\n                  \"imAddresses\": [\n                    null\n                  ],\n                  \"multiValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"phones\": [\n                    {}\n                  ],\n                  \"photo\": {},\n                  \"postalAddresses\": [\n                    {}\n                  ],\n                  \"singleValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"websites\": [\n                    {}\n                  ]\n                }\n              ],\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"singleValueExtendedProperties\": [\n                {}\n              ]\n            }\n          ],\n          \"contacts\": [\n            {}\n          ],\n          \"createdObjects\": [\n            {}\n          ],\n          \"customSecurityAttributes\": {},\n          \"deviceEnrollmentConfigurations\": [\n            {\n              \"assignments\": [\n                {\n                  \"target\": {}\n                }\n              ],\n              \"roleScopeTagIds\": [\n                null\n              ]\n            }\n          ],\n          \"deviceKeys\": [\n            {}\n          ],\n          \"deviceManagementTroubleshootingEvents\": [\n            {\n              \"additionalInformation\": [\n                {}\n              ],\n              \"troubleshootingErrorDetails\": {\n                \"resources\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"devices\": [\n            {}\n          ],\n          \"directReports\": [\n            {}\n          ],\n          \"drive\": {},\n          \"drives\": [\n            {}\n          ],\n          \"employeeOrgData\": {},\n          \"events\": [\n            {}\n          ],\n          \"extensions\": [\n            {}\n          ],\n          \"followedSites\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.site\",\n              \"analytics\": {\n                \"allTime\": {\n                  \"access\": {},\n                  \"activities\": [\n                    {\n                      \"access\": {},\n                      \"actor\": {},\n                      \"driveItem\": {\n                        \"@odata.type\": \"#microsoft.graph.driveItem\",\n                        \"activities\": [\n                          {\n                            \"action\": {\n                              \"comment\": {\n                                \"parentAuthor\": {},\n                                \"participants\": [\n                                  {}\n                                ]\n                              },\n                              \"create\": {},\n                              \"delete\": {},\n                              \"edit\": {},\n                              \"mention\": {\n                                \"mentionees\": [\n                                  {}\n                                ]\n                              },\n                              \"move\": {},\n                              \"rename\": {},\n                              \"restore\": {},\n                              \"share\": {\n                                \"recipients\": [\n                                  {}\n                                ]\n                              },\n                              \"version\": {}\n                            },\n                            \"actor\": {},\n                            \"driveItem\": {},\n                            \"listItem\": {\n                              \"@odata.type\": \"#microsoft.graph.listItem\",\n                              \"activities\": [\n                                {}\n                              ],\n                              \"analytics\": {},\n                              \"contentType\": {},\n                              \"deleted\": {},\n                              \"documentSetVersions\": [\n                                {\n                                  \"@odata.type\": \"#microsoft.graph.documentSetVersion\",\n                                  \"lastModifiedBy\": {},\n                                  \"publication\": {},\n                                  \"fields\": {},\n                                  \"createdBy\": {},\n                                  \"items\": [\n                                    {}\n                                  ]\n                                }\n                              ],\n                              \"driveItem\": {},\n                              \"fields\": {},\n                              \"sharepointIds\": {},\n                              \"versions\": [\n                                {}\n                              ]\n                            },\n                            \"times\": {}\n                          }\n                        ],\n                        \"analytics\": {},\n                        \"audio\": {},\n                        \"bundle\": {\n                          \"album\": {}\n                        },\n                        \"children\": [\n                          {}\n                        ],\n                        \"deleted\": {},\n                        \"file\": {\n                          \"hashes\": {}\n                        },\n                        \"fileSystemInfo\": {},\n                        \"folder\": {\n                          \"view\": {}\n                        },\n                        \"image\": {},\n                        \"listItem\": {},\n                        \"location\": {},\n                        \"malware\": {},\n                        \"media\": {\n                          \"mediaSource\": {}\n                        },\n                        \"package\": {},\n                        \"pendingOperations\": {\n                          \"pendingContentUpdate\": {}\n                        },\n                        \"permissions\": [\n                          {\n                            \"grantedTo\": {},\n                            \"grantedToIdentities\": [\n                              {}\n                            ],\n                            \"grantedToIdentitiesV2\": [\n                              {\n                                \"@odata.type\": \"#microsoft.graph.sharePointIdentitySet\",\n                                \"group\": {},\n                                \"siteGroup\": {\n                                  \"@odata.type\": \"#microsoft.graph.sharePointIdentity\"\n                                },\n                                \"siteUser\": {}\n                              }\n                            ],\n                            \"grantedToV2\": {},\n                            \"inheritedFrom\": {\n                              \"sharepointIds\": {}\n                            },\n                            \"invitation\": {\n                              \"invitedBy\": {}\n                            },\n                            \"link\": {\n                              \"application\": {}\n                            },\n                            \"roles\": [\n                              null\n                            ]\n                          }\n                        ],\n                        \"photo\": {},\n                        \"publication\": {},\n                        \"remoteItem\": {\n                          \"createdBy\": {},\n                          \"file\": {},\n                          \"fileSystemInfo\": {},\n                          \"folder\": {},\n                          \"image\": {},\n                          \"lastModifiedBy\": {},\n                          \"package\": {},\n                          \"parentReference\": {},\n                          \"shared\": {\n                            \"owner\": {},\n                            \"sharedBy\": {}\n                          },\n                          \"sharepointIds\": {},\n                          \"specialFolder\": {},\n                          \"video\": {}\n                        },\n                        \"root\": {},\n                        \"searchResult\": {},\n                        \"shared\": {},\n                        \"sharepointIds\": {},\n                        \"source\": {},\n                        \"specialFolder\": {},\n                        \"subscriptions\": [\n                          {}\n                        ],\n                        \"thumbnails\": [\n                          {\n                            \"large\": {},\n                            \"medium\": {},\n                            \"small\": {},\n                            \"source\": {}\n                          }\n                        ],\n                        \"versions\": [\n                          {\n                            \"@odata.type\": \"#microsoft.graph.driveItemVersion\"\n                          }\n                        ],\n                        \"video\": {},\n                        \"workbook\": {\n                          \"application\": {},\n                          \"comments\": [\n                            {\n                              \"replies\": [\n                                {}\n                              ]\n                            }\n                          ],\n                          \"functions\": {},\n                          \"names\": [\n                            {\n                              \"value\": {},\n                              \"worksheet\": {\n                                \"charts\": [\n                                  {\n                                    \"axes\": {\n                                      \"categoryAxis\": {\n                                        \"format\": {\n                                          \"font\": {},\n                                          \"line\": {}\n                                        },\n                                        \"majorGridlines\": {\n                                          \"format\": {\n                                            \"line\": {}\n                                          }\n                                        },\n                                        \"majorUnit\": {},\n                                        \"maximum\": {},\n                                        \"minimum\": {},\n                                        \"minorGridlines\": {},\n                                        \"minorUnit\": {},\n                                        \"title\": {\n                                          \"format\": {\n                                            \"font\": {}\n                                          }\n                                        }\n                                      },\n                                      \"seriesAxis\": {},\n                                      \"valueAxis\": {}\n                                    },\n                                    \"dataLabels\": {\n                                      \"format\": {\n                                        \"fill\": {},\n                                        \"font\": {}\n                                      }\n                                    },\n                                    \"format\": {\n                                      \"fill\": {},\n                                      \"font\": {}\n                                    },\n                                    \"legend\": {\n                                      \"format\": {\n                                        \"fill\": {},\n                                        \"font\": {}\n                                      }\n                                    },\n                                    \"series\": [\n                                      {\n                                        \"format\": {\n                                          \"fill\": {},\n                                          \"line\": {}\n                                        },\n                                        \"points\": [\n                                          {\n                                            \"format\": {\n                                              \"fill\": {}\n                                            },\n                                            \"value\": {}\n                                          }\n                                        ]\n                                      }\n                                    ],\n                                    \"title\": {\n                                      \"format\": {\n                                        \"fill\": {},\n                                        \"font\": {}\n                                      }\n                                    },\n                                    \"worksheet\": {}\n                                  }\n                                ],\n                                \"names\": [\n                                  {}\n                                ],\n                                \"pivotTables\": [\n                                  {\n                                    \"worksheet\": {}\n                                  }\n                                ],\n                                \"protection\": {\n                                  \"options\": {}\n                                },\n                                \"tables\": [\n                                  {\n                                    \"columns\": [\n                                      {\n                                        \"filter\": {\n                                          \"criteria\": {\n                                            \"icon\": {},\n                                            \"values\": {}\n                                          }\n                                        },\n                                        \"values\": {}\n                                      }\n                                    ],\n                                    \"rows\": [\n                                      {\n                                        \"values\": {}\n                                      }\n                                    ],\n                                    \"sort\": {\n                                      \"fields\": [\n                                        {\n                                          \"icon\": {}\n                                        }\n                                      ]\n                                    },\n                                    \"worksheet\": {}\n                                  }\n                                ]\n                              }\n                            }\n                          ],\n                          \"operations\": [\n                            {\n                              \"error\": {\n                                \"innerError\": {}\n                              }\n                            }\n                          ],\n                          \"tables\": [\n                            {}\n                          ],\n                          \"worksheets\": [\n                            {}\n                          ]\n                        }\n                      }\n                    }\n                  ],\n                  \"create\": {},\n                  \"delete\": {},\n                  \"edit\": {},\n                  \"incompleteData\": {},\n                  \"move\": {}\n                },\n                \"itemActivityStats\": [\n                  {}\n                ],\n                \"lastSevenDays\": {}\n              },\n              \"columns\": [\n                {\n                  \"boolean\": {},\n                  \"calculated\": {},\n                  \"choice\": {\n                    \"choices\": [\n                      null\n                    ]\n                  },\n                  \"contentApprovalStatus\": {},\n                  \"currency\": {},\n                  \"dateTime\": {},\n                  \"defaultValue\": {},\n                  \"geolocation\": {},\n                  \"hyperlinkOrPicture\": {},\n                  \"lookup\": {},\n                  \"number\": {},\n                  \"personOrGroup\": {},\n                  \"sourceColumn\": {},\n                  \"sourceContentType\": {},\n                  \"term\": {\n                    \"parentTerm\": {\n                      \"children\": [\n                        {}\n                      ],\n                      \"descriptions\": [\n                        {}\n                      ],\n                      \"labels\": [\n                        {}\n                      ],\n                      \"properties\": [\n                        {}\n                      ],\n                      \"relations\": [\n                        {\n                          \"fromTerm\": {},\n                          \"set\": {\n                            \"children\": [\n                              {}\n                            ],\n                            \"localizedNames\": [\n                              {}\n                            ],\n                            \"parentGroup\": {\n                              \"sets\": [\n                                {}\n                              ]\n                            },\n                            \"properties\": [\n                              {}\n                            ],\n                            \"relations\": [\n                              {}\n                            ],\n                            \"terms\": [\n                              {}\n                            ]\n                          },\n                          \"toTerm\": {}\n                        }\n                      ],\n                      \"set\": {}\n                    },\n                    \"termSet\": {}\n                  },\n                  \"text\": {},\n                  \"thumbnail\": {},\n                  \"validation\": {\n                    \"descriptions\": [\n                      {}\n                    ]\n                  }\n                }\n              ],\n              \"contentTypes\": [\n                {\n                  \"associatedHubsUrls\": [\n                    null\n                  ],\n                  \"base\": {},\n                  \"baseTypes\": [\n                    {}\n                  ],\n                  \"columnLinks\": [\n                    {}\n                  ],\n                  \"columnPositions\": [\n                    {}\n                  ],\n                  \"columns\": [\n                    {}\n                  ],\n                  \"documentSet\": {\n                    \"allowedContentTypes\": [\n                      {}\n                    ],\n                    \"defaultContents\": [\n                      {\n                        \"contentType\": {}\n                      }\n                    ],\n                    \"sharedColumns\": [\n                      {}\n                    ],\n                    \"welcomePageColumns\": [\n                      {}\n                    ]\n                  },\n                  \"documentTemplate\": {},\n                  \"inheritedFrom\": {},\n                  \"order\": {}\n                }\n              ],\n              \"deleted\": {},\n              \"drive\": {},\n              \"drives\": [\n                {}\n              ],\n              \"externalColumns\": [\n                {}\n              ],\n              \"informationProtection\": {\n                \"bitlocker\": {\n                  \"recoveryKeys\": [\n                    {}\n                  ]\n                },\n                \"dataLossPreventionPolicies\": [\n                  {}\n                ],\n                \"policy\": {\n                  \"labels\": [\n                    {\n                      \"parent\": {\n                        \"parent\": {}\n                      }\n                    }\n                  ]\n                },\n                \"sensitivityLabels\": [\n                  {\n                    \"assignedPolicies\": [\n                      {}\n                    ],\n                    \"autoLabeling\": {\n                      \"sensitiveTypeIds\": [\n                        null\n                      ]\n                    },\n                    \"labelActions\": [\n                      {}\n                    ],\n                    \"sublabels\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"sensitivityPolicySettings\": {\n                  \"applicableTo\": {}\n                },\n                \"threatAssessmentRequests\": [\n                  {\n                    \"createdBy\": {},\n                    \"results\": [\n                      {}\n                    ]\n                  }\n                ]\n              },\n              \"items\": [\n                {}\n              ],\n              \"lists\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.list\",\n                  \"activities\": [\n                    {}\n                  ],\n                  \"columns\": [\n                    {}\n                  ],\n                  \"contentTypes\": [\n                    {}\n                  ],\n                  \"drive\": {},\n                  \"items\": [\n                    {}\n                  ],\n                  \"list\": {},\n                  \"operations\": [\n                    {\n                      \"error\": {\n                        \"details\": [\n                          {}\n                        ],\n                        \"innerError\": {\n                          \"details\": [\n                            {}\n                          ]\n                        }\n                      }\n                    }\n                  ],\n                  \"sharepointIds\": {},\n                  \"subscriptions\": [\n                    {}\n                  ],\n                  \"system\": {}\n                }\n              ],\n              \"onenote\": {\n                \"notebooks\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.notebook\",\n                    \"createdBy\": {},\n                    \"lastModifiedBy\": {},\n                    \"links\": {\n                      \"oneNoteClientUrl\": {},\n                      \"oneNoteWebUrl\": {}\n                    },\n                    \"sectionGroups\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.sectionGroup\",\n                        \"parentNotebook\": {},\n                        \"parentSectionGroup\": {},\n                        \"sectionGroups\": [\n                          {}\n                        ],\n                        \"sections\": [\n                          {\n                            \"@odata.type\": \"#microsoft.graph.onenoteSection\",\n                            \"links\": {\n                              \"oneNoteClientUrl\": {},\n                              \"oneNoteWebUrl\": {}\n                            },\n                            \"pages\": [\n                              {\n                                \"@odata.type\": \"#microsoft.graph.onenotePage\",\n                                \"links\": {\n                                  \"oneNoteClientUrl\": {},\n                                  \"oneNoteWebUrl\": {}\n                                },\n                                \"parentNotebook\": {},\n                                \"parentSection\": {},\n                                \"userTags\": [\n                                  null\n                                ]\n                              }\n                            ],\n                            \"parentNotebook\": {},\n                            \"parentSectionGroup\": {}\n                          }\n                        ]\n                      }\n                    ],\n                    \"sections\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"operations\": [\n                  {\n                    \"error\": {}\n                  }\n                ],\n                \"pages\": [\n                  {}\n                ],\n                \"resources\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.onenoteResource\"\n                  }\n                ],\n                \"sectionGroups\": [\n                  {}\n                ],\n                \"sections\": [\n                  {}\n                ]\n              },\n              \"operations\": [\n                {}\n              ],\n              \"pages\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.sitePage\",\n                  \"canvasLayout\": {\n                    \"horizontalSections\": [\n                      {\n                        \"columns\": [\n                          {\n                            \"webparts\": [\n                              {}\n                            ]\n                          }\n                        ]\n                      }\n                    ],\n                    \"verticalSection\": {\n                      \"emphasis\": {},\n                      \"webparts\": [\n                        {}\n                      ]\n                    }\n                  },\n                  \"contentType\": {},\n                  \"publishingState\": {},\n                  \"reactions\": {},\n                  \"titleArea\": {\n                    \"serverProcessedContent\": {\n                      \"componentDependencies\": [\n                        {}\n                      ],\n                      \"customMetadata\": [\n                        {\n                          \"value\": {}\n                        }\n                      ],\n                      \"htmlStrings\": [\n                        {}\n                      ],\n                      \"imageSources\": [\n                        {}\n                      ],\n                      \"links\": [\n                        {}\n                      ],\n                      \"searchablePlainTexts\": [\n                        {}\n                      ]\n                    }\n                  },\n                  \"webParts\": [\n                    {}\n                  ]\n                }\n              ],\n              \"permissions\": [\n                {}\n              ],\n              \"root\": {},\n              \"settings\": {},\n              \"sharepointIds\": {},\n              \"siteCollection\": {\n                \"root\": {}\n              },\n              \"sites\": [\n                {}\n              ],\n              \"termStore\": {\n                \"groups\": [\n                  {}\n                ],\n                \"languageTags\": [\n                  null\n                ],\n                \"sets\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"identities\": [\n            {}\n          ],\n          \"imAddresses\": [\n            null\n          ],\n          \"inferenceClassification\": {\n            \"overrides\": [\n              {\n                \"senderEmailAddress\": {}\n              }\n            ]\n          },\n          \"infoCatalogs\": [\n            null\n          ],\n          \"informationProtection\": {},\n          \"insights\": {\n            \"shared\": [\n              {\n                \"lastShared\": {\n                  \"sharedBy\": {},\n                  \"sharingReference\": {}\n                },\n                \"lastSharedMethod\": {},\n                \"resource\": {},\n                \"resourceReference\": {},\n                \"resourceVisualization\": {},\n                \"sharingHistory\": [\n                  {}\n                ]\n              }\n            ],\n            \"trending\": [\n              {\n                \"resource\": {},\n                \"resourceReference\": {},\n                \"resourceVisualization\": {}\n              }\n            ],\n            \"used\": [\n              {\n                \"lastUsed\": {},\n                \"resource\": {},\n                \"resourceReference\": {},\n                \"resourceVisualization\": {}\n              }\n            ]\n          },\n          \"interests\": [\n            null\n          ],\n          \"joinedGroups\": [\n            {}\n          ],\n          \"joinedTeams\": [\n            {\n              \"allChannels\": [\n                {\n                  \"filesFolder\": {},\n                  \"members\": [\n                    {}\n                  ],\n                  \"messages\": [\n                    {}\n                  ],\n                  \"moderationSettings\": {},\n                  \"sharedWithTeams\": [\n                    {\n                      \"team\": {},\n                      \"allowedMembers\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"summary\": {},\n                  \"tabs\": [\n                    {}\n                  ]\n                }\n              ],\n              \"channels\": [\n                {}\n              ],\n              \"discoverySettings\": {},\n              \"funSettings\": {},\n              \"group\": {},\n              \"guestSettings\": {},\n              \"incomingChannels\": [\n                {}\n              ],\n              \"installedApps\": [\n                {}\n              ],\n              \"memberSettings\": {},\n              \"members\": [\n                {}\n              ],\n              \"messagingSettings\": {},\n              \"operations\": [\n                {}\n              ],\n              \"owners\": [\n                {}\n              ],\n              \"permissionGrants\": [\n                {}\n              ],\n              \"photo\": {},\n              \"primaryChannel\": {},\n              \"schedule\": {\n                \"offerShiftRequests\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.offerShiftRequest\",\n                    \"createdBy\": {},\n                    \"lastModifiedBy\": {}\n                  }\n                ],\n                \"openShiftChangeRequests\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.openShiftChangeRequest\"\n                  }\n                ],\n                \"openShifts\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.openShift\",\n                    \"draftOpenShift\": {\n                      \"@odata.type\": \"#microsoft.graph.openShiftItem\",\n                      \"activities\": [\n                        {\n                          \"theme\": {}\n                        }\n                      ]\n                    },\n                    \"sharedOpenShift\": {}\n                  }\n                ],\n                \"provisionStatus\": {},\n                \"schedulingGroups\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.schedulingGroup\",\n                    \"userIds\": [\n                      null\n                    ]\n                  }\n                ],\n                \"shifts\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.shift\",\n                    \"draftShift\": {},\n                    \"sharedShift\": {}\n                  }\n                ],\n                \"swapShiftsChangeRequests\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.swapShiftsChangeRequest\"\n                  }\n                ],\n                \"timeCards\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.timeCard\",\n                    \"breaks\": [\n                      {\n                        \"end\": {\n                          \"notes\": {}\n                        },\n                        \"notes\": {},\n                        \"start\": {}\n                      }\n                    ],\n                    \"clockInEvent\": {},\n                    \"clockOutEvent\": {},\n                    \"notes\": {},\n                    \"originalEntry\": {\n                      \"breaks\": [\n                        {}\n                      ],\n                      \"clockInEvent\": {},\n                      \"clockOutEvent\": {}\n                    }\n                  }\n                ],\n                \"timeClockSettings\": {\n                  \"approvedLocation\": {}\n                },\n                \"timeOffReasons\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.timeOffReason\"\n                  }\n                ],\n                \"timeOffRequests\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.timeOffRequest\"\n                  }\n                ],\n                \"timesOff\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.timeOff\",\n                    \"draftTimeOff\": {},\n                    \"sharedTimeOff\": {}\n                  }\n                ],\n                \"workforceIntegrationIds\": [\n                  null\n                ]\n              },\n              \"summary\": {},\n              \"tags\": [\n                {\n                  \"members\": [\n                    {}\n                  ]\n                }\n              ],\n              \"template\": {},\n              \"templateDefinition\": {\n                \"categories\": [\n                  null\n                ],\n                \"lastModifiedBy\": {},\n                \"teamDefinition\": {}\n              }\n            }\n          ],\n          \"licenseAssignmentStates\": [\n            {\n              \"disabledPlans\": [\n                null\n              ]\n            }\n          ],\n          \"licenseDetails\": [\n            {}\n          ],\n          \"mailFolders\": [\n            {\n              \"childFolders\": [\n                {}\n              ],\n              \"messageRules\": [\n                {\n                  \"actions\": {\n                    \"assignCategories\": [\n                      null\n                    ],\n                    \"forwardAsAttachmentTo\": [\n                      {}\n                    ],\n                    \"forwardTo\": [\n                      {}\n                    ],\n                    \"markImportance\": {},\n                    \"redirectTo\": [\n                      {}\n                    ]\n                  },\n                  \"conditions\": {\n                    \"bodyContains\": [\n                      null\n                    ],\n                    \"bodyOrSubjectContains\": [\n                      null\n                    ],\n                    \"categories\": [\n                      null\n                    ],\n                    \"fromAddresses\": [\n                      {}\n                    ],\n                    \"headerContains\": [\n                      null\n                    ],\n                    \"importance\": {},\n                    \"recipientContains\": [\n                      null\n                    ],\n                    \"senderContains\": [\n                      null\n                    ],\n                    \"sensitivity\": {},\n                    \"sentToAddresses\": [\n                      {}\n                    ],\n                    \"subjectContains\": [\n                      null\n                    ],\n                    \"withinSizeRange\": {}\n                  },\n                  \"exceptions\": {}\n                }\n              ],\n              \"messages\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.message\",\n                  \"attachments\": [\n                    {}\n                  ],\n                  \"bccRecipients\": [\n                    {}\n                  ],\n                  \"body\": {},\n                  \"ccRecipients\": [\n                    {}\n                  ],\n                  \"extensions\": [\n                    {}\n                  ],\n                  \"flag\": {},\n                  \"from\": {},\n                  \"importance\": {},\n                  \"inferenceClassification\": {},\n                  \"internetMessageHeaders\": [\n                    {}\n                  ],\n                  \"mentions\": [\n                    {}\n                  ],\n                  \"mentionsPreview\": {},\n                  \"multiValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"replyTo\": [\n                    {}\n                  ],\n                  \"sender\": {},\n                  \"singleValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"toRecipients\": [\n                    {}\n                  ],\n                  \"uniqueBody\": {},\n                  \"unsubscribeData\": [\n                    null\n                  ]\n                }\n              ],\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"userConfigurations\": [\n                {}\n              ]\n            }\n          ],\n          \"mailboxSettings\": {\n            \"automaticRepliesSetting\": {\n              \"scheduledEndDateTime\": {},\n              \"scheduledStartDateTime\": {}\n            },\n            \"language\": {},\n            \"workingHours\": {\n              \"daysOfWeek\": [\n                {}\n              ],\n              \"timeZone\": {}\n            }\n          },\n          \"managedAppRegistrations\": [\n            {\n              \"appIdentifier\": {},\n              \"appliedPolicies\": [\n                {\n                  \"roleScopeTagIds\": [\n                    null\n                  ]\n                }\n              ],\n              \"flaggedReasons\": [\n                null\n              ],\n              \"intendedPolicies\": [\n                {}\n              ],\n              \"operations\": [\n                {}\n              ]\n            }\n          ],\n          \"managedDevices\": [\n            {\n              \"assignmentFilterEvaluationStatusDetails\": [\n                {}\n              ],\n              \"chromeOSDeviceInfo\": [\n                {}\n              ],\n              \"cloudPcRemoteActionResults\": [\n                {}\n              ],\n              \"configurationManagerClientEnabledFeatures\": {},\n              \"configurationManagerClientHealthState\": {},\n              \"configurationManagerClientInformation\": {},\n              \"detectedApps\": [\n                {\n                  \"managedDevices\": [\n                    {}\n                  ]\n                }\n              ],\n              \"deviceActionResults\": [\n                {\n                  \"actionState\": {}\n                }\n              ],\n              \"deviceCategory\": {\n                \"roleScopeTagIds\": [\n                  null\n                ]\n              },\n              \"deviceCompliancePolicyStates\": [\n                {\n                  \"settingStates\": [\n                    {\n                      \"sources\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"deviceConfigurationStates\": [\n                {\n                  \"platformType\": {},\n                  \"settingStates\": [\n                    {\n                      \"sources\": [\n                        {}\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"deviceHealthAttestationState\": {},\n              \"deviceHealthScriptStates\": [\n                {\n                  \"assignmentFilterIds\": [\n                    null\n                  ]\n                }\n              ],\n              \"hardwareInformation\": {\n                \"sharedDeviceCachedUsers\": [\n                  {}\n                ],\n                \"wiredIPv4Addresses\": [\n                  null\n                ]\n              },\n              \"logCollectionRequests\": [\n                {}\n              ],\n              \"managedDeviceMobileAppConfigurationStates\": [\n                {\n                  \"platformType\": {},\n                  \"settingStates\": [\n                    {\n                      \"sources\": [\n                        {}\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"roleScopeTagIds\": [\n                null\n              ],\n              \"securityBaselineStates\": [\n                {\n                  \"settingStates\": [\n                    {\n                      \"contributingPolicies\": [\n                        {}\n                      ],\n                      \"sourcePolicies\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"users\": [\n                {}\n              ],\n              \"usersLoggedOn\": [\n                {}\n              ],\n              \"windowsProtectionState\": {\n                \"detectedMalwareState\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"manager\": {},\n          \"memberOf\": [\n            {}\n          ],\n          \"messages\": [\n            {}\n          ],\n          \"mobileAppIntentAndStates\": [\n            {\n              \"mobileAppList\": [\n                {\n                  \"supportedDeviceTypes\": [\n                    {\n                      \"type\": {}\n                    }\n                  ]\n                }\n              ]\n            }\n          ],\n          \"mobileAppTroubleshootingEvents\": [\n            {\n              \"appLogCollectionRequests\": [\n                {\n                  \"customLogFolders\": [\n                    null\n                  ]\n                }\n              ],\n              \"history\": [\n                {\n                  \"troubleshootingErrorDetails\": {}\n                }\n              ]\n            }\n          ],\n          \"notifications\": [\n            {\n              \"payload\": {\n                \"visualContent\": {}\n              },\n              \"targetPolicy\": {\n                \"platformTypes\": [\n                  null\n                ]\n              }\n            }\n          ],\n          \"oauth2PermissionGrants\": [\n            {}\n          ],\n          \"onPremisesExtensionAttributes\": {},\n          \"onPremisesProvisioningErrors\": [\n            {}\n          ],\n          \"onenote\": {},\n          \"onlineMeetings\": [\n            {\n              \"anonymizeIdentityForRoles\": [\n                null\n              ],\n              \"attendanceReports\": [\n                {\n                  \"attendanceRecords\": [\n                    {\n                      \"attendanceIntervals\": [\n                        {}\n                      ],\n                      \"identity\": {}\n                    }\n                  ]\n                }\n              ],\n              \"audioConferencing\": {\n                \"tollFreeNumbers\": [\n                  null\n                ],\n                \"tollNumbers\": [\n                  null\n                ]\n              },\n              \"broadcastSettings\": {\n                \"captions\": {\n                  \"translationLanguages\": [\n                    null\n                  ]\n                }\n              },\n              \"capabilities\": [\n                null\n              ],\n              \"chatInfo\": {},\n              \"joinInformation\": {},\n              \"joinMeetingIdSettings\": {},\n              \"lobbyBypassSettings\": {},\n              \"meetingAttendanceReport\": {},\n              \"participants\": {\n                \"attendees\": [\n                  {\n                    \"identity\": {},\n                    \"role\": {}\n                  }\n                ],\n                \"contributors\": [\n                  {}\n                ],\n                \"organizer\": {},\n                \"producers\": [\n                  {}\n                ]\n              },\n              \"registration\": {\n                \"@odata.type\": \"#microsoft.graph.meetingRegistration\",\n                \"registrants\": [\n                  {}\n                ],\n                \"customQuestions\": [\n                  {\n                    \"answerOptions\": [\n                      null\n                    ]\n                  }\n                ],\n                \"speakers\": [\n                  {}\n                ]\n              },\n              \"transcripts\": [\n                {}\n              ],\n              \"virtualAppointment\": {\n                \"appointmentClients\": [\n                  {}\n                ],\n                \"settings\": {}\n              },\n              \"watermarkProtection\": {}\n            }\n          ],\n          \"otherMails\": [\n            null\n          ],\n          \"outlook\": {\n            \"masterCategories\": [\n              {}\n            ],\n            \"taskFolders\": [\n              {\n                \"multiValueExtendedProperties\": [\n                  {}\n                ],\n                \"singleValueExtendedProperties\": [\n                  {}\n                ],\n                \"tasks\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.outlookTask\",\n                    \"attachments\": [\n                      {}\n                    ],\n                    \"body\": {},\n                    \"completedDateTime\": {},\n                    \"dueDateTime\": {},\n                    \"importance\": {},\n                    \"multiValueExtendedProperties\": [\n                      {}\n                    ],\n                    \"recurrence\": {},\n                    \"reminderDateTime\": {},\n                    \"sensitivity\": {},\n                    \"singleValueExtendedProperties\": [\n                      {}\n                    ],\n                    \"startDateTime\": {}\n                  }\n                ]\n              }\n            ],\n            \"taskGroups\": [\n              {\n                \"taskFolders\": [\n                  {}\n                ]\n              }\n            ],\n            \"tasks\": [\n              {}\n            ]\n          },\n          \"ownedDevices\": [\n            {}\n          ],\n          \"ownedObjects\": [\n            {}\n          ],\n          \"passwordProfile\": {},\n          \"pastProjects\": [\n            null\n          ],\n          \"pendingAccessReviewInstances\": [\n            {\n              \"contactedReviewers\": [\n                {}\n              ],\n              \"decisions\": [\n                {\n                  \"appliedBy\": {\n                    \"@odata.type\": \"#microsoft.graph.userIdentity\"\n                  },\n                  \"insights\": [\n                    {}\n                  ],\n                  \"instance\": {},\n                  \"principal\": {},\n                  \"principalResourceMembership\": {},\n                  \"resource\": {},\n                  \"reviewedBy\": {},\n                  \"target\": {}\n                }\n              ],\n              \"definition\": {\n                \"additionalNotificationRecipients\": [\n                  {\n                    \"notificationRecipientScope\": {}\n                  }\n                ],\n                \"backupReviewers\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.accessReviewReviewerScope\"\n                  }\n                ],\n                \"createdBy\": {},\n                \"fallbackReviewers\": [\n                  {}\n                ],\n                \"instanceEnumerationScope\": {},\n                \"instances\": [\n                  {}\n                ],\n                \"reviewers\": [\n                  {}\n                ],\n                \"scope\": {},\n                \"settings\": {\n                  \"applyActions\": [\n                    {}\n                  ],\n                  \"recommendationInsightSettings\": [\n                    {}\n                  ],\n                  \"recurrence\": {}\n                },\n                \"stageSettings\": [\n                  {\n                    \"decisionsThatWillMoveToNextStage\": [\n                      null\n                    ],\n                    \"dependsOn\": [\n                      null\n                    ],\n                    \"fallbackReviewers\": [\n                      {}\n                    ],\n                    \"recommendationInsightSettings\": [\n                      {}\n                    ],\n                    \"reviewers\": [\n                      {}\n                    ]\n                  }\n                ]\n              },\n              \"errors\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.accessReviewError\"\n                }\n              ],\n              \"fallbackReviewers\": [\n                {}\n              ],\n              \"reviewers\": [\n                {}\n              ],\n              \"scope\": {},\n              \"stages\": [\n                {\n                  \"decisions\": [\n                    {}\n                  ],\n                  \"fallbackReviewers\": [\n                    {}\n                  ],\n                  \"reviewers\": [\n                    {}\n                  ]\n                }\n              ]\n            }\n          ],\n          \"people\": [\n            {\n              \"emailAddresses\": [\n                {}\n              ],\n              \"phones\": [\n                {}\n              ],\n              \"postalAddresses\": [\n                {}\n              ],\n              \"sources\": [\n                {}\n              ],\n              \"websites\": [\n                {}\n              ]\n            }\n          ],\n          \"photo\": {},\n          \"photos\": [\n            {}\n          ],\n          \"planner\": {\n            \"all\": [\n              {}\n            ],\n            \"favoritePlanReferences\": {},\n            \"favoritePlans\": [\n              {\n                \"buckets\": [\n                  {\n                    \"creationSource\": {},\n                    \"tasks\": [\n                      {\n                        \"appliedCategories\": {},\n                        \"assignedToTaskBoardFormat\": {\n                          \"orderHintsByAssignee\": {}\n                        },\n                        \"assignments\": {},\n                        \"bucketTaskBoardFormat\": {},\n                        \"completedBy\": {},\n                        \"createdBy\": {},\n                        \"creationSource\": {\n                          \"creationSourceKind\": {},\n                          \"teamsPublicationInfo\": {\n                            \"@odata.type\": \"#microsoft.graph.plannerTeamsPublicationInfo\"\n                          }\n                        },\n                        \"details\": {\n                          \"checklist\": {},\n                          \"notes\": {},\n                          \"references\": {}\n                        },\n                        \"previewType\": {},\n                        \"progressTaskBoardFormat\": {},\n                        \"recurrence\": {\n                          \"schedule\": {\n                            \"pattern\": {}\n                          }\n                        }\n                      }\n                    ]\n                  }\n                ],\n                \"container\": {},\n                \"contexts\": {},\n                \"createdBy\": {},\n                \"creationSource\": {\n                  \"creationSourceKind\": {}\n                },\n                \"details\": {\n                  \"categoryDescriptions\": {},\n                  \"contextDetails\": {},\n                  \"sharedWith\": {}\n                },\n                \"sharedWithContainers\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.plannerSharedWithContainer\"\n                  }\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              }\n            ],\n            \"plans\": [\n              {}\n            ],\n            \"recentPlanReferences\": {},\n            \"recentPlans\": [\n              {}\n            ],\n            \"rosterPlans\": [\n              {}\n            ],\n            \"tasks\": [\n              {}\n            ]\n          },\n          \"presence\": {\n            \"outOfOfficeSettings\": {},\n            \"statusMessage\": {\n              \"expiryDateTime\": {},\n              \"message\": {}\n            }\n          },\n          \"print\": {\n            \"recentPrinterShares\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.printerShare\",\n                \"capabilities\": {\n                  \"bottomMargins\": [\n                    null\n                  ],\n                  \"colorModes\": [\n                    null\n                  ],\n                  \"contentTypes\": [\n                    null\n                  ],\n                  \"copiesPerJob\": {},\n                  \"dpis\": [\n                    null\n                  ],\n                  \"duplexModes\": [\n                    null\n                  ],\n                  \"feedDirections\": [\n                    null\n                  ],\n                  \"feedOrientations\": [\n                    null\n                  ],\n                  \"finishings\": [\n                    null\n                  ],\n                  \"inputBins\": [\n                    null\n                  ],\n                  \"leftMargins\": [\n                    null\n                  ],\n                  \"mediaColors\": [\n                    null\n                  ],\n                  \"mediaSizes\": [\n                    null\n                  ],\n                  \"mediaTypes\": [\n                    null\n                  ],\n                  \"multipageLayouts\": [\n                    null\n                  ],\n                  \"orientations\": [\n                    null\n                  ],\n                  \"outputBins\": [\n                    null\n                  ],\n                  \"pagesPerSheet\": [\n                    null\n                  ],\n                  \"qualities\": [\n                    null\n                  ],\n                  \"rightMargins\": [\n                    null\n                  ],\n                  \"scalings\": [\n                    null\n                  ],\n                  \"supportedColorConfigurations\": [\n                    null\n                  ],\n                  \"supportedCopiesPerJob\": {},\n                  \"supportedDocumentMimeTypes\": [\n                    null\n                  ],\n                  \"supportedDuplexConfigurations\": [\n                    null\n                  ],\n                  \"supportedFinishings\": [\n                    {}\n                  ],\n                  \"supportedMediaColors\": [\n                    null\n                  ],\n                  \"supportedMediaSizes\": [\n                    null\n                  ],\n                  \"supportedMediaTypes\": [\n                    null\n                  ],\n                  \"supportedOrientations\": [\n                    {}\n                  ],\n                  \"supportedOutputBins\": [\n                    null\n                  ],\n                  \"supportedPagesPerSheet\": {},\n                  \"supportedPresentationDirections\": [\n                    null\n                  ],\n                  \"supportedPrintQualities\": [\n                    {}\n                  ],\n                  \"topMargins\": [\n                    null\n                  ]\n                },\n                \"defaults\": {\n                  \"colorMode\": {},\n                  \"duplexConfiguration\": {},\n                  \"duplexMode\": {},\n                  \"finishings\": [\n                    {}\n                  ],\n                  \"multipageLayout\": {},\n                  \"orientation\": {},\n                  \"presentationDirection\": {},\n                  \"printColorConfiguration\": {},\n                  \"printQuality\": {},\n                  \"quality\": {},\n                  \"scaling\": {}\n                },\n                \"jobs\": [\n                  {\n                    \"configuration\": {\n                      \"colorMode\": {},\n                      \"duplexMode\": {},\n                      \"feedOrientation\": {},\n                      \"finishings\": [\n                        {}\n                      ],\n                      \"margin\": {},\n                      \"multipageLayout\": {},\n                      \"orientation\": {},\n                      \"pageRanges\": [\n                        {}\n                      ],\n                      \"quality\": {},\n                      \"scaling\": {}\n                    },\n                    \"createdBy\": {},\n                    \"documents\": [\n                      {\n                        \"configuration\": {\n                          \"colorMode\": {},\n                          \"duplexMode\": {},\n                          \"feedDirection\": {},\n                          \"feedOrientation\": {},\n                          \"finishings\": [\n                            {}\n                          ],\n                          \"margin\": {},\n                          \"multipageLayout\": {},\n                          \"orientation\": {},\n                          \"pageRanges\": [\n                            {}\n                          ],\n                          \"quality\": {},\n                          \"scaling\": {}\n                        }\n                      }\n                    ],\n                    \"status\": {\n                      \"details\": [\n                        null\n                      ],\n                      \"state\": {}\n                    },\n                    \"tasks\": [\n                      {\n                        \"definition\": {\n                          \"createdBy\": {},\n                          \"tasks\": [\n                            {}\n                          ]\n                        },\n                        \"status\": {},\n                        \"trigger\": {\n                          \"definition\": {}\n                        }\n                      }\n                    ]\n                  }\n                ],\n                \"location\": {\n                  \"organization\": [\n                    null\n                  ],\n                  \"subdivision\": [\n                    null\n                  ],\n                  \"subunit\": [\n                    null\n                  ]\n                },\n                \"status\": {\n                  \"details\": [\n                    null\n                  ],\n                  \"processingStateReasons\": [\n                    null\n                  ],\n                  \"state\": {}\n                },\n                \"allowedGroups\": [\n                  {}\n                ],\n                \"allowedUsers\": [\n                  {}\n                ],\n                \"printer\": {\n                  \"@odata.type\": \"#microsoft.graph.printer\",\n                  \"connectors\": [\n                    {\n                      \"deviceHealth\": {},\n                      \"location\": {}\n                    }\n                  ],\n                  \"share\": {},\n                  \"shares\": [\n                    {}\n                  ],\n                  \"taskTriggers\": [\n                    {}\n                  ]\n                },\n                \"viewPoint\": {}\n              }\n            ]\n          },\n          \"profile\": {\n            \"account\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.userAccountInformation\",\n                \"createdBy\": {},\n                \"inference\": {},\n                \"lastModifiedBy\": {},\n                \"source\": {\n                  \"type\": [\n                    null\n                  ]\n                },\n                \"preferredLanguageTag\": {}\n              }\n            ],\n            \"addresses\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.itemAddress\",\n                \"detail\": {},\n                \"geoCoordinates\": {}\n              }\n            ],\n            \"anniversaries\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.personAnnualEvent\"\n              }\n            ],\n            \"awards\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.personAward\"\n              }\n            ],\n            \"certifications\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.personCertification\"\n              }\n            ],\n            \"educationalActivities\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.educationalActivity\",\n                \"institution\": {\n                  \"location\": {}\n                },\n                \"program\": {\n                  \"activities\": [\n                    null\n                  ],\n                  \"awards\": [\n                    null\n                  ],\n                  \"fieldsOfStudy\": [\n                    null\n                  ]\n                }\n              }\n            ],\n            \"emails\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.itemEmail\",\n                \"type\": {}\n              }\n            ],\n            \"interests\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.personInterest\",\n                \"categories\": [\n                  null\n                ],\n                \"collaborationTags\": [\n                  null\n                ]\n              }\n            ],\n            \"languages\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.languageProficiency\",\n                \"reading\": {},\n                \"spoken\": {},\n                \"written\": {}\n              }\n            ],\n            \"names\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.personName\",\n                \"pronunciation\": {}\n              }\n            ],\n            \"notes\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.personAnnotation\",\n                \"detail\": {}\n              }\n            ],\n            \"patents\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.itemPatent\"\n              }\n            ],\n            \"phones\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.itemPhone\",\n                \"type\": {}\n              }\n            ],\n            \"positions\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.workPosition\",\n                \"categories\": [\n                  null\n                ],\n                \"colleagues\": [\n                  {}\n                ],\n                \"detail\": {\n                  \"company\": {\n                    \"address\": {}\n                  }\n                },\n                \"manager\": {}\n              }\n            ],\n            \"projects\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.projectParticipation\",\n                \"categories\": [\n                  null\n                ],\n                \"client\": {},\n                \"collaborationTags\": [\n                  null\n                ],\n                \"colleagues\": [\n                  {}\n                ],\n                \"detail\": {},\n                \"sponsors\": [\n                  {}\n                ]\n              }\n            ],\n            \"publications\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.itemPublication\"\n              }\n            ],\n            \"skills\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.skillProficiency\",\n                \"categories\": [\n                  null\n                ],\n                \"collaborationTags\": [\n                  null\n                ]\n              }\n            ],\n            \"webAccounts\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.webAccount\",\n                \"service\": {}\n              }\n            ],\n            \"websites\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.personWebsite\",\n                \"categories\": [\n                  null\n                ]\n              }\n            ]\n          },\n          \"provisionedPlans\": [\n            {}\n          ],\n          \"proxyAddresses\": [\n            null\n          ],\n          \"registeredDevices\": [\n            {}\n          ],\n          \"responsibilities\": [\n            null\n          ],\n          \"schools\": [\n            null\n          ],\n          \"scopedRoleMemberOf\": [\n            {\n              \"roleMemberInfo\": {}\n            }\n          ],\n          \"security\": {\n            \"informationProtection\": {\n              \"labelPolicySettings\": {},\n              \"sensitivityLabels\": [\n                {\n                  \"contentFormats\": [\n                    null\n                  ],\n                  \"parent\": {}\n                }\n              ]\n            }\n          },\n          \"settings\": {\n            \"contactMergeSuggestions\": {},\n            \"itemInsights\": {},\n            \"regionalAndLanguageSettings\": {\n              \"authoringLanguages\": [\n                {}\n              ],\n              \"defaultDisplayLanguage\": {},\n              \"defaultRegionalFormat\": {},\n              \"defaultSpeechInputLanguage\": {},\n              \"defaultTranslationLanguage\": {},\n              \"regionalFormatOverrides\": {},\n              \"translationPreferences\": {\n                \"languageOverrides\": [\n                  {}\n                ],\n                \"translationBehavior\": {},\n                \"untranslatedLanguages\": [\n                  null\n                ]\n              }\n            },\n            \"shiftPreferences\": {\n              \"@odata.type\": \"#microsoft.graph.shiftPreferences\",\n              \"availability\": [\n                {\n                  \"recurrence\": {},\n                  \"timeSlots\": [\n                    {}\n                  ]\n                }\n              ]\n            }\n          },\n          \"signInActivity\": {},\n          \"skills\": [\n            null\n          ],\n          \"teamwork\": {\n            \"associatedTeams\": [\n              {}\n            ],\n            \"installedApps\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.userScopeTeamsAppInstallation\",\n                \"chat\": {}\n              }\n            ]\n          },\n          \"todo\": {\n            \"lists\": [\n              {\n                \"extensions\": [\n                  {}\n                ],\n                \"tasks\": [\n                  {\n                    \"attachmentSessions\": [\n                      {\n                        \"nextExpectedRanges\": [\n                          null\n                        ]\n                      }\n                    ],\n                    \"attachments\": [\n                      {}\n                    ],\n                    \"body\": {},\n                    \"categories\": [\n                      null\n                    ],\n                    \"checklistItems\": [\n                      {}\n                    ],\n                    \"completedDateTime\": {},\n                    \"dueDateTime\": {},\n                    \"extensions\": [\n                      {}\n                    ],\n                    \"importance\": {},\n                    \"linkedResources\": [\n                      {}\n                    ],\n                    \"recurrence\": {},\n                    \"reminderDateTime\": {},\n                    \"startDateTime\": {},\n                    \"status\": {}\n                  }\n                ]\n              }\n            ]\n          },\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"transitiveReports\": [\n            {}\n          ],\n          \"usageRights\": [\n            {}\n          ],\n          \"windowsInformationProtectionDeviceRegistrations\": [\n            {}\n          ]\n        },\n        \"lastModifiedBy\": {},\n        \"lastModifiedByUser\": {},\n        \"parentReference\": {},\n        \"activities\": [\n          {}\n        ],\n        \"bundles\": [\n          {}\n        ],\n        \"following\": [\n          {}\n        ],\n        \"items\": [\n          {}\n        ],\n        \"list\": {},\n        \"owner\": {},\n        \"quota\": {\n          \"storagePlanInformation\": {}\n        },\n        \"root\": {},\n        \"sharePointIds\": {},\n        \"special\": [\n          {}\n        ],\n        \"system\": {}\n      },\n      \"drives\": [\n        {}\n      ],\n      \"endpoints\": [\n        {}\n      ],\n      \"events\": [\n        {}\n      ],\n      \"extensions\": [\n        {}\n      ],\n      \"groupLifecyclePolicies\": [\n        {}\n      ],\n      \"groupTypes\": [\n        null\n      ],\n      \"infoCatalogs\": [\n        null\n      ],\n      \"licenseProcessingState\": {},\n      \"memberOf\": [\n        {}\n      ],\n      \"members\": [\n        {}\n      ],\n      \"membersWithLicenseErrors\": [\n        {}\n      ],\n      \"membershipRuleProcessingStatus\": {},\n      \"onPremisesProvisioningErrors\": [\n        {}\n      ],\n      \"onenote\": {},\n      \"owners\": [\n        {}\n      ],\n      \"permissionGrants\": [\n        {}\n      ],\n      \"photo\": {},\n      \"photos\": [\n        {}\n      ],\n      \"planner\": {\n        \"plans\": [\n          {}\n        ]\n      },\n      \"proxyAddresses\": [\n        null\n      ],\n      \"rejectedSenders\": [\n        {}\n      ],\n      \"resourceBehaviorOptions\": [\n        null\n      ],\n      \"resourceProvisioningOptions\": [\n        null\n      ],\n      \"settings\": [\n        {\n          \"values\": [\n            {}\n          ]\n        }\n      ],\n      \"sites\": [\n        {}\n      ],\n      \"team\": {},\n      \"threads\": [\n        {}\n      ],\n      \"transitiveMemberOf\": [\n        {}\n      ],\n      \"transitiveMembers\": [\n        {}\n      ],\n      \"writebackConfiguration\": {}\n    },\n    \"members\": [\n      {\n        \"assignedLicenses\": [\n          {}\n        ],\n        \"assignedPlans\": [\n          {}\n        ],\n        \"assignments\": [\n          {}\n        ],\n        \"businessPhones\": [\n          null\n        ],\n        \"classes\": [\n          {}\n        ],\n        \"createdBy\": {},\n        \"externalSource\": {},\n        \"mailingAddress\": {},\n        \"onPremisesInfo\": {},\n        \"passwordProfile\": {},\n        \"provisionedPlans\": [\n          {}\n        ],\n        \"relatedContacts\": [\n          {}\n        ],\n        \"residenceAddress\": {},\n        \"rubrics\": [\n          {}\n        ],\n        \"schools\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.educationSchool\",\n            \"externalSource\": {},\n            \"address\": {},\n            \"administrativeUnit\": {\n              \"@odata.type\": \"#microsoft.graph.administrativeUnit\",\n              \"extensions\": [\n                {}\n              ],\n              \"members\": [\n                {}\n              ],\n              \"scopedRoleMembers\": [\n                {}\n              ]\n            },\n            \"classes\": [\n              {}\n            ],\n            \"createdBy\": {},\n            \"users\": [\n              {}\n            ]\n          }\n        ],\n        \"student\": {},\n        \"taughtClasses\": [\n          {}\n        ],\n        \"teacher\": {},\n        \"user\": {}\n      }\n    ],\n    \"schools\": [\n      {}\n    ],\n    \"teachers\": [\n      {}\n    ],\n    \"term\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "classes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Update Education Root"
					]
				}
			}
		},
		{
			"displayName": "Me",
			"name": "me",
			"type": "string",
			"default": {
				"assignedLicenses": [
					{
						"disabledPlans": [
							null
						]
					}
				],
				"assignedPlans": [
					{}
				],
				"assignments": [
					{
						"assignTo": {},
						"categories": [
							{}
						],
						"createdBy": {
							"application": {},
							"device": {},
							"user": {}
						},
						"grading": {},
						"instructions": {},
						"lastModifiedBy": {},
						"resources": [
							{
								"resource": {
									"createdBy": {},
									"lastModifiedBy": {}
								}
							}
						],
						"rubric": {
							"createdBy": {},
							"description": {},
							"grading": {},
							"lastModifiedBy": {},
							"levels": [
								{
									"description": {},
									"grading": {}
								}
							],
							"qualities": [
								{
									"criteria": [
										{
											"description": {}
										}
									],
									"description": {}
								}
							]
						},
						"submissions": [
							{
								"outcomes": [
									{
										"lastModifiedBy": {}
									}
								],
								"reassignedBy": {},
								"recipient": {},
								"resources": [
									{
										"resource": {}
									}
								],
								"returnedBy": {},
								"submittedBy": {},
								"submittedResources": [
									{}
								],
								"unsubmittedBy": {}
							}
						]
					}
				],
				"businessPhones": [
					null
				],
				"classes": [
					{
						"assignmentCategories": [
							{}
						],
						"assignmentDefaults": {
							"addToCalendarAction": {},
							"addedStudentAction": {}
						},
						"assignmentSettings": {},
						"assignments": [
							{}
						],
						"course": {},
						"createdBy": {},
						"group": {
							"@odata.type": "#microsoft.graph.group",
							"acceptedSenders": [
								{}
							],
							"appRoleAssignments": [
								{}
							],
							"assignedLabels": [
								{}
							],
							"assignedLicenses": [
								{}
							],
							"calendar": {
								"allowedOnlineMeetingProviders": [
									null
								],
								"calendarPermissions": [
									{
										"allowedRoles": [
											null
										],
										"emailAddress": {},
										"role": {}
									}
								],
								"calendarView": [
									{
										"@odata.type": "#microsoft.graph.event",
										"categories": [
											null
										],
										"attachments": [
											{}
										],
										"attendees": [
											{
												"@odata.type": "#microsoft.graph.attendee",
												"emailAddress": {},
												"proposedNewTime": {
													"end": {},
													"start": {}
												},
												"status": {}
											}
										],
										"body": {
											"contentType": {}
										},
										"calendar": {},
										"cancelledOccurrences": [
											null
										],
										"end": {},
										"exceptionOccurrences": [
											{}
										],
										"extensions": [
											{}
										],
										"instances": [
											{}
										],
										"location": {
											"address": {},
											"coordinates": {}
										},
										"locations": [
											{}
										],
										"multiValueExtendedProperties": [
											{
												"value": [
													null
												]
											}
										],
										"onlineMeeting": {
											"phones": [
												{}
											],
											"tollFreeNumbers": [
												null
											]
										},
										"onlineMeetingProvider": {},
										"organizer": {},
										"recurrence": {
											"pattern": {
												"daysOfWeek": [
													null
												],
												"firstDayOfWeek": {}
											},
											"range": {}
										},
										"responseStatus": {},
										"singleValueExtendedProperties": [
											{}
										],
										"start": {}
									}
								],
								"defaultOnlineMeetingProvider": {},
								"events": [
									{}
								],
								"multiValueExtendedProperties": [
									{}
								],
								"owner": {},
								"singleValueExtendedProperties": [
									{}
								]
							},
							"calendarView": [
								{}
							],
							"conversations": [
								{
									"threads": [
										{
											"ccRecipients": [
												{}
											],
											"posts": [
												{
													"@odata.type": "#microsoft.graph.post",
													"attachments": [
														{}
													],
													"body": {},
													"extensions": [
														{}
													],
													"from": {},
													"importance": {},
													"inReplyTo": {},
													"mentions": [
														{
															"createdBy": {},
															"mentioned": {}
														}
													],
													"multiValueExtendedProperties": [
														{}
													],
													"newParticipants": [
														{}
													],
													"sender": {},
													"singleValueExtendedProperties": [
														{}
													]
												}
											],
											"toRecipients": [
												{}
											],
											"uniqueSenders": [
												null
											]
										}
									],
									"uniqueSenders": [
										null
									]
								}
							],
							"createdOnBehalfOf": {},
							"drive": {
								"@odata.type": "#microsoft.graph.drive",
								"createdBy": {},
								"createdByUser": {
									"@odata.type": "#microsoft.graph.user",
									"activities": [
										{
											"contentInfo": {},
											"historyItems": [
												{
													"activity": {}
												}
											],
											"status": {},
											"visualElements": {
												"attribution": {},
												"content": {}
											}
										}
									],
									"agreementAcceptances": [
										{}
									],
									"analytics": {
										"activityStatistics": [
											{}
										],
										"settings": {}
									},
									"appConsentRequestsForApproval": [
										{
											"pendingScopes": [
												{}
											],
											"userConsentRequests": [
												{
													"@odata.type": "#microsoft.graph.userConsentRequest",
													"createdBy": {},
													"approval": {
														"steps": [
															{
																"reviewedBy": {}
															}
														]
													}
												}
											]
										}
									],
									"appRoleAssignedResources": [
										{
											"@odata.type": "#microsoft.graph.servicePrincipal",
											"addIns": [
												{
													"properties": [
														{}
													]
												}
											],
											"alternativeNames": [
												null
											],
											"appManagementPolicies": [
												{
													"@odata.type": "#microsoft.graph.appManagementPolicy",
													"appliesTo": [
														{}
													],
													"restrictions": {
														"keyCredentials": [
															{}
														],
														"passwordCredentials": [
															{}
														]
													}
												}
											],
											"appRoleAssignedTo": [
												{}
											],
											"appRoleAssignments": [
												{}
											],
											"appRoles": [
												{
													"allowedMemberTypes": [
														null
													]
												}
											],
											"claimsMappingPolicies": [
												{
													"@odata.type": "#microsoft.graph.claimsMappingPolicy",
													"appliesTo": [
														{}
													],
													"definition": [
														null
													]
												}
											],
											"createdObjects": [
												{}
											],
											"customSecurityAttributes": {},
											"delegatedPermissionClassifications": [
												{}
											],
											"endpoints": [
												{
													"@odata.type": "#microsoft.graph.endpoint"
												}
											],
											"federatedIdentityCredentials": [
												{
													"audiences": [
														null
													]
												}
											],
											"homeRealmDiscoveryPolicies": [
												{
													"@odata.type": "#microsoft.graph.homeRealmDiscoveryPolicy"
												}
											],
											"info": {},
											"keyCredentials": [
												{}
											],
											"licenseDetails": [
												{
													"servicePlans": [
														{}
													]
												}
											],
											"memberOf": [
												{}
											],
											"notificationEmailAddresses": [
												null
											],
											"oauth2PermissionGrants": [
												{}
											],
											"ownedObjects": [
												{}
											],
											"owners": [
												{}
											],
											"passwordCredentials": [
												{}
											],
											"passwordSingleSignOnSettings": {
												"fields": [
													{}
												]
											},
											"publishedPermissionScopes": [
												{}
											],
											"replyUrls": [
												null
											],
											"samlSingleSignOnSettings": {},
											"servicePrincipalNames": [
												null
											],
											"synchronization": {
												"jobs": [
													{
														"schedule": {},
														"schema": {
															"directories": [
																{
																	"objects": [
																		{
																			"attributes": [
																				{
																					"apiExpressions": [
																						{}
																					],
																					"metadata": [
																						{}
																					],
																					"referencedObjects": [
																						{}
																					]
																				}
																			],
																			"metadata": [
																				{}
																			],
																			"supportedApis": [
																				null
																			]
																		}
																	]
																}
															],
															"synchronizationRules": [
																{
																	"metadata": [
																		{}
																	],
																	"objectMappings": [
																		{
																			"attributeMappings": [
																				{
																					"source": {
																						"parameters": [
																							{
																								"value": {}
																							}
																						]
																					}
																				}
																			],
																			"metadata": [
																				{}
																			],
																			"scope": {
																				"categoryFilterGroups": [
																					{
																						"clauses": [
																							{
																								"targetOperand": {
																									"values": [
																										null
																									]
																								}
																							}
																						]
																					}
																				],
																				"groups": [
																					{}
																				],
																				"inputFilterGroups": [
																					{}
																				]
																			}
																		}
																	]
																}
															]
														},
														"status": {
															"lastExecution": {
																"error": {}
															},
															"lastSuccessfulExecution": {},
															"lastSuccessfulExecutionWithExports": {},
															"progress": [
																{}
															],
															"quarantine": {
																"error": {}
															},
															"synchronizedEntryCountByType": [
																{}
															]
														},
														"synchronizationJobSettings": [
															{}
														]
													}
												],
												"secrets": [
													{}
												],
												"templates": [
													{
														"metadata": [
															{}
														],
														"schema": {}
													}
												]
											},
											"tags": [
												null
											],
											"tokenIssuancePolicies": [
												{
													"@odata.type": "#microsoft.graph.tokenIssuancePolicy"
												}
											],
											"tokenLifetimePolicies": [
												{
													"@odata.type": "#microsoft.graph.tokenLifetimePolicy"
												}
											],
											"transitiveMemberOf": [
												{}
											],
											"verifiedPublisher": {}
										}
									],
									"appRoleAssignments": [
										{}
									],
									"approvals": [
										{}
									],
									"assignedLicenses": [
										{}
									],
									"assignedPlans": [
										{}
									],
									"authentication": {
										"emailMethods": [
											{
												"@odata.type": "#microsoft.graph.emailAuthenticationMethod"
											}
										],
										"fido2Methods": [
											{
												"@odata.type": "#microsoft.graph.fido2AuthenticationMethod",
												"attestationCertificates": [
													null
												]
											}
										],
										"methods": [
											{}
										],
										"microsoftAuthenticatorMethods": [
											{
												"@odata.type": "#microsoft.graph.microsoftAuthenticatorAuthenticationMethod",
												"device": {
													"@odata.type": "#microsoft.graph.device",
													"alternativeSecurityIds": [
														{}
													],
													"commands": [
														{
															"payload": {},
															"responsepayload": {}
														}
													],
													"extensionAttributes": {},
													"extensions": [
														{}
													],
													"hostnames": [
														null
													],
													"memberOf": [
														{}
													],
													"physicalIds": [
														null
													],
													"registeredOwners": [
														{}
													],
													"registeredUsers": [
														{}
													],
													"systemLabels": [
														null
													],
													"transitiveMemberOf": [
														{}
													],
													"usageRights": [
														{}
													]
												}
											}
										],
										"operations": [
											{}
										],
										"passwordMethods": [
											{
												"@odata.type": "#microsoft.graph.passwordAuthenticationMethod"
											}
										],
										"passwordlessMicrosoftAuthenticatorMethods": [
											{
												"@odata.type": "#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod",
												"device": {}
											}
										],
										"phoneMethods": [
											{
												"@odata.type": "#microsoft.graph.phoneAuthenticationMethod"
											}
										],
										"softwareOathMethods": [
											{
												"@odata.type": "#microsoft.graph.softwareOathAuthenticationMethod"
											}
										],
										"temporaryAccessPassMethods": [
											{
												"@odata.type": "#microsoft.graph.temporaryAccessPassAuthenticationMethod"
											}
										],
										"windowsHelloForBusinessMethods": [
											{
												"@odata.type": "#microsoft.graph.windowsHelloForBusinessAuthenticationMethod",
												"device": {}
											}
										]
									},
									"authorizationInfo": {
										"certificateUserIds": [
											null
										]
									},
									"businessPhones": [
										null
									],
									"calendar": {},
									"calendarGroups": [
										{
											"calendars": [
												{}
											]
										}
									],
									"calendarView": [
										{}
									],
									"calendars": [
										{}
									],
									"chats": [
										{
											"installedApps": [
												{
													"teamsApp": {
														"appDefinitions": [
															{
																"bot": {},
																"colorIcon": {
																	"hostedContent": {}
																},
																"createdBy": {},
																"outlineIcon": {}
															}
														]
													},
													"teamsAppDefinition": {}
												}
											],
											"lastMessagePreview": {
												"body": {},
												"eventDetail": {},
												"from": {
													"@odata.type": "#microsoft.graph.chatMessageFromIdentitySet"
												}
											},
											"members": [
												{
													"roles": [
														null
													]
												}
											],
											"messages": [
												{
													"attachments": [
														{}
													],
													"body": {},
													"channelIdentity": {},
													"eventDetail": {},
													"from": {},
													"hostedContents": [
														{
															"@odata.type": "#microsoft.graph.chatMessageHostedContent"
														}
													],
													"mentions": [
														{
															"mentioned": {
																"@odata.type": "#microsoft.graph.chatMessageMentionedIdentitySet",
																"conversation": {
																	"@odata.type": "#microsoft.graph.teamworkConversationIdentity"
																},
																"tag": {
																	"@odata.type": "#microsoft.graph.teamworkTagIdentity"
																}
															}
														}
													],
													"messageHistory": [
														{
															"reaction": {
																"user": {
																	"@odata.type": "#microsoft.graph.chatMessageReactionIdentitySet"
																}
															}
														}
													],
													"messageType": {},
													"onBehalfOf": {},
													"policyViolation": {
														"policyTip": {
															"matchedConditionDescriptions": [
																null
															]
														}
													},
													"reactions": [
														{}
													],
													"replies": [
														{}
													]
												}
											],
											"onlineMeetingInfo": {
												"organizer": {
													"@odata.type": "#microsoft.graph.teamworkUserIdentity"
												}
											},
											"operations": [
												{
													"error": {}
												}
											],
											"permissionGrants": [
												{
													"@odata.type": "#microsoft.graph.resourceSpecificPermissionGrant"
												}
											],
											"pinnedMessages": [
												{
													"message": {}
												}
											],
											"tabs": [
												{
													"configuration": {},
													"teamsApp": {}
												}
											],
											"viewpoint": {}
										}
									],
									"cloudPCs": [
										{
											"connectivityResult": {
												"failedHealthCheckItems": [
													{}
												]
											},
											"lastLoginResult": {},
											"lastRemoteActionResult": {
												"statusDetails": {
													"additionalInformation": [
														{}
													]
												}
											},
											"partnerAgentInstallResults": [
												{}
											],
											"statusDetails": {}
										}
									],
									"contactFolders": [
										{
											"childFolders": [
												{}
											],
											"contacts": [
												{
													"@odata.type": "#microsoft.graph.contact",
													"children": [
														null
													],
													"emailAddresses": [
														{
															"@odata.type": "#microsoft.graph.typedEmailAddress"
														}
													],
													"extensions": [
														{}
													],
													"flag": {
														"completedDateTime": {},
														"dueDateTime": {},
														"startDateTime": {}
													},
													"imAddresses": [
														null
													],
													"multiValueExtendedProperties": [
														{}
													],
													"phones": [
														{}
													],
													"photo": {},
													"postalAddresses": [
														{}
													],
													"singleValueExtendedProperties": [
														{}
													],
													"websites": [
														{}
													]
												}
											],
											"multiValueExtendedProperties": [
												{}
											],
											"singleValueExtendedProperties": [
												{}
											]
										}
									],
									"contacts": [
										{}
									],
									"createdObjects": [
										{}
									],
									"customSecurityAttributes": {},
									"deviceEnrollmentConfigurations": [
										{
											"assignments": [
												{
													"target": {}
												}
											],
											"roleScopeTagIds": [
												null
											]
										}
									],
									"deviceKeys": [
										{}
									],
									"deviceManagementTroubleshootingEvents": [
										{
											"additionalInformation": [
												{}
											],
											"troubleshootingErrorDetails": {
												"resources": [
													{}
												]
											}
										}
									],
									"devices": [
										{}
									],
									"directReports": [
										{}
									],
									"drive": {},
									"drives": [
										{}
									],
									"employeeOrgData": {},
									"events": [
										{}
									],
									"extensions": [
										{}
									],
									"followedSites": [
										{
											"@odata.type": "#microsoft.graph.site",
											"analytics": {
												"allTime": {
													"access": {},
													"activities": [
														{
															"access": {},
															"actor": {},
															"driveItem": {
																"@odata.type": "#microsoft.graph.driveItem",
																"activities": [
																	{
																		"action": {
																			"comment": {
																				"parentAuthor": {},
																				"participants": [
																					{}
																				]
																			},
																			"create": {},
																			"delete": {},
																			"edit": {},
																			"mention": {
																				"mentionees": [
																					{}
																				]
																			},
																			"move": {},
																			"rename": {},
																			"restore": {},
																			"share": {
																				"recipients": [
																					{}
																				]
																			},
																			"version": {}
																		},
																		"actor": {},
																		"driveItem": {},
																		"listItem": {
																			"@odata.type": "#microsoft.graph.listItem",
																			"activities": [
																				{}
																			],
																			"analytics": {},
																			"contentType": {},
																			"deleted": {},
																			"documentSetVersions": [
																				{
																					"@odata.type": "#microsoft.graph.documentSetVersion",
																					"lastModifiedBy": {},
																					"publication": {},
																					"fields": {},
																					"createdBy": {},
																					"items": [
																						{}
																					]
																				}
																			],
																			"driveItem": {},
																			"fields": {},
																			"sharepointIds": {},
																			"versions": [
																				{}
																			]
																		},
																		"times": {}
																	}
																],
																"analytics": {},
																"audio": {},
																"bundle": {
																	"album": {}
																},
																"children": [
																	{}
																],
																"deleted": {},
																"file": {
																	"hashes": {}
																},
																"fileSystemInfo": {},
																"folder": {
																	"view": {}
																},
																"image": {},
																"listItem": {},
																"location": {},
																"malware": {},
																"media": {
																	"mediaSource": {}
																},
																"package": {},
																"pendingOperations": {
																	"pendingContentUpdate": {}
																},
																"permissions": [
																	{
																		"grantedTo": {},
																		"grantedToIdentities": [
																			{}
																		],
																		"grantedToIdentitiesV2": [
																			{
																				"@odata.type": "#microsoft.graph.sharePointIdentitySet",
																				"group": {},
																				"siteGroup": {
																					"@odata.type": "#microsoft.graph.sharePointIdentity"
																				},
																				"siteUser": {}
																			}
																		],
																		"grantedToV2": {},
																		"inheritedFrom": {
																			"sharepointIds": {}
																		},
																		"invitation": {
																			"invitedBy": {}
																		},
																		"link": {
																			"application": {}
																		},
																		"roles": [
																			null
																		]
																	}
																],
																"photo": {},
																"publication": {},
																"remoteItem": {
																	"createdBy": {},
																	"file": {},
																	"fileSystemInfo": {},
																	"folder": {},
																	"image": {},
																	"lastModifiedBy": {},
																	"package": {},
																	"parentReference": {},
																	"shared": {
																		"owner": {},
																		"sharedBy": {}
																	},
																	"sharepointIds": {},
																	"specialFolder": {},
																	"video": {}
																},
																"root": {},
																"searchResult": {},
																"shared": {},
																"sharepointIds": {},
																"source": {},
																"specialFolder": {},
																"subscriptions": [
																	{}
																],
																"thumbnails": [
																	{
																		"large": {},
																		"medium": {},
																		"small": {},
																		"source": {}
																	}
																],
																"versions": [
																	{
																		"@odata.type": "#microsoft.graph.driveItemVersion"
																	}
																],
																"video": {},
																"workbook": {
																	"application": {},
																	"comments": [
																		{
																			"replies": [
																				{}
																			]
																		}
																	],
																	"functions": {},
																	"names": [
																		{
																			"value": {},
																			"worksheet": {
																				"charts": [
																					{
																						"axes": {
																							"categoryAxis": {
																								"format": {
																									"font": {},
																									"line": {}
																								},
																								"majorGridlines": {
																									"format": {
																										"line": {}
																									}
																								},
																								"majorUnit": {},
																								"maximum": {},
																								"minimum": {},
																								"minorGridlines": {},
																								"minorUnit": {},
																								"title": {
																									"format": {
																										"font": {}
																									}
																								}
																							},
																							"seriesAxis": {},
																							"valueAxis": {}
																						},
																						"dataLabels": {
																							"format": {
																								"fill": {},
																								"font": {}
																							}
																						},
																						"format": {
																							"fill": {},
																							"font": {}
																						},
																						"legend": {
																							"format": {
																								"fill": {},
																								"font": {}
																							}
																						},
																						"series": [
																							{
																								"format": {
																									"fill": {},
																									"line": {}
																								},
																								"points": [
																									{
																										"format": {
																											"fill": {}
																										},
																										"value": {}
																									}
																								]
																							}
																						],
																						"title": {
																							"format": {
																								"fill": {},
																								"font": {}
																							}
																						},
																						"worksheet": {}
																					}
																				],
																				"names": [
																					{}
																				],
																				"pivotTables": [
																					{
																						"worksheet": {}
																					}
																				],
																				"protection": {
																					"options": {}
																				},
																				"tables": [
																					{
																						"columns": [
																							{
																								"filter": {
																									"criteria": {
																										"icon": {},
																										"values": {}
																									}
																								},
																								"values": {}
																							}
																						],
																						"rows": [
																							{
																								"values": {}
																							}
																						],
																						"sort": {
																							"fields": [
																								{
																									"icon": {}
																								}
																							]
																						},
																						"worksheet": {}
																					}
																				]
																			}
																		}
																	],
																	"operations": [
																		{
																			"error": {
																				"innerError": {}
																			}
																		}
																	],
																	"tables": [
																		{}
																	],
																	"worksheets": [
																		{}
																	]
																}
															}
														}
													],
													"create": {},
													"delete": {},
													"edit": {},
													"incompleteData": {},
													"move": {}
												},
												"itemActivityStats": [
													{}
												],
												"lastSevenDays": {}
											},
											"columns": [
												{
													"boolean": {},
													"calculated": {},
													"choice": {
														"choices": [
															null
														]
													},
													"contentApprovalStatus": {},
													"currency": {},
													"dateTime": {},
													"defaultValue": {},
													"geolocation": {},
													"hyperlinkOrPicture": {},
													"lookup": {},
													"number": {},
													"personOrGroup": {},
													"sourceColumn": {},
													"sourceContentType": {},
													"term": {
														"parentTerm": {
															"children": [
																{}
															],
															"descriptions": [
																{}
															],
															"labels": [
																{}
															],
															"properties": [
																{}
															],
															"relations": [
																{
																	"fromTerm": {},
																	"set": {
																		"children": [
																			{}
																		],
																		"localizedNames": [
																			{}
																		],
																		"parentGroup": {
																			"sets": [
																				{}
																			]
																		},
																		"properties": [
																			{}
																		],
																		"relations": [
																			{}
																		],
																		"terms": [
																			{}
																		]
																	},
																	"toTerm": {}
																}
															],
															"set": {}
														},
														"termSet": {}
													},
													"text": {},
													"thumbnail": {},
													"validation": {
														"descriptions": [
															{}
														]
													}
												}
											],
											"contentTypes": [
												{
													"associatedHubsUrls": [
														null
													],
													"base": {},
													"baseTypes": [
														{}
													],
													"columnLinks": [
														{}
													],
													"columnPositions": [
														{}
													],
													"columns": [
														{}
													],
													"documentSet": {
														"allowedContentTypes": [
															{}
														],
														"defaultContents": [
															{
																"contentType": {}
															}
														],
														"sharedColumns": [
															{}
														],
														"welcomePageColumns": [
															{}
														]
													},
													"documentTemplate": {},
													"inheritedFrom": {},
													"order": {}
												}
											],
											"deleted": {},
											"drive": {},
											"drives": [
												{}
											],
											"externalColumns": [
												{}
											],
											"informationProtection": {
												"bitlocker": {
													"recoveryKeys": [
														{}
													]
												},
												"dataLossPreventionPolicies": [
													{}
												],
												"policy": {
													"labels": [
														{
															"parent": {
																"parent": {}
															}
														}
													]
												},
												"sensitivityLabels": [
													{
														"assignedPolicies": [
															{}
														],
														"autoLabeling": {
															"sensitiveTypeIds": [
																null
															]
														},
														"labelActions": [
															{}
														],
														"sublabels": [
															{}
														]
													}
												],
												"sensitivityPolicySettings": {
													"applicableTo": {}
												},
												"threatAssessmentRequests": [
													{
														"createdBy": {},
														"results": [
															{}
														]
													}
												]
											},
											"items": [
												{}
											],
											"lists": [
												{
													"@odata.type": "#microsoft.graph.list",
													"activities": [
														{}
													],
													"columns": [
														{}
													],
													"contentTypes": [
														{}
													],
													"drive": {},
													"items": [
														{}
													],
													"list": {},
													"operations": [
														{
															"error": {
																"details": [
																	{}
																],
																"innerError": {
																	"details": [
																		{}
																	]
																}
															}
														}
													],
													"sharepointIds": {},
													"subscriptions": [
														{}
													],
													"system": {}
												}
											],
											"onenote": {
												"notebooks": [
													{
														"@odata.type": "#microsoft.graph.notebook",
														"createdBy": {},
														"lastModifiedBy": {},
														"links": {
															"oneNoteClientUrl": {},
															"oneNoteWebUrl": {}
														},
														"sectionGroups": [
															{
																"@odata.type": "#microsoft.graph.sectionGroup",
																"parentNotebook": {},
																"parentSectionGroup": {},
																"sectionGroups": [
																	{}
																],
																"sections": [
																	{
																		"@odata.type": "#microsoft.graph.onenoteSection",
																		"links": {
																			"oneNoteClientUrl": {},
																			"oneNoteWebUrl": {}
																		},
																		"pages": [
																			{
																				"@odata.type": "#microsoft.graph.onenotePage",
																				"links": {
																					"oneNoteClientUrl": {},
																					"oneNoteWebUrl": {}
																				},
																				"parentNotebook": {},
																				"parentSection": {},
																				"userTags": [
																					null
																				]
																			}
																		],
																		"parentNotebook": {},
																		"parentSectionGroup": {}
																	}
																]
															}
														],
														"sections": [
															{}
														]
													}
												],
												"operations": [
													{
														"error": {}
													}
												],
												"pages": [
													{}
												],
												"resources": [
													{
														"@odata.type": "#microsoft.graph.onenoteResource"
													}
												],
												"sectionGroups": [
													{}
												],
												"sections": [
													{}
												]
											},
											"operations": [
												{}
											],
											"pages": [
												{
													"@odata.type": "#microsoft.graph.sitePage",
													"canvasLayout": {
														"horizontalSections": [
															{
																"columns": [
																	{
																		"webparts": [
																			{}
																		]
																	}
																]
															}
														],
														"verticalSection": {
															"emphasis": {},
															"webparts": [
																{}
															]
														}
													},
													"contentType": {},
													"publishingState": {},
													"reactions": {},
													"titleArea": {
														"serverProcessedContent": {
															"componentDependencies": [
																{}
															],
															"customMetadata": [
																{
																	"value": {}
																}
															],
															"htmlStrings": [
																{}
															],
															"imageSources": [
																{}
															],
															"links": [
																{}
															],
															"searchablePlainTexts": [
																{}
															]
														}
													},
													"webParts": [
														{}
													]
												}
											],
											"permissions": [
												{}
											],
											"root": {},
											"settings": {},
											"sharepointIds": {},
											"siteCollection": {
												"root": {}
											},
											"sites": [
												{}
											],
											"termStore": {
												"groups": [
													{}
												],
												"languageTags": [
													null
												],
												"sets": [
													{}
												]
											}
										}
									],
									"identities": [
										{}
									],
									"imAddresses": [
										null
									],
									"inferenceClassification": {
										"overrides": [
											{
												"senderEmailAddress": {}
											}
										]
									},
									"infoCatalogs": [
										null
									],
									"informationProtection": {},
									"insights": {
										"shared": [
											{
												"lastShared": {
													"sharedBy": {},
													"sharingReference": {}
												},
												"lastSharedMethod": {},
												"resource": {},
												"resourceReference": {},
												"resourceVisualization": {},
												"sharingHistory": [
													{}
												]
											}
										],
										"trending": [
											{
												"resource": {},
												"resourceReference": {},
												"resourceVisualization": {}
											}
										],
										"used": [
											{
												"lastUsed": {},
												"resource": {},
												"resourceReference": {},
												"resourceVisualization": {}
											}
										]
									},
									"interests": [
										null
									],
									"joinedGroups": [
										{}
									],
									"joinedTeams": [
										{
											"allChannels": [
												{
													"filesFolder": {},
													"members": [
														{}
													],
													"messages": [
														{}
													],
													"moderationSettings": {},
													"sharedWithTeams": [
														{
															"team": {},
															"allowedMembers": [
																{}
															]
														}
													],
													"summary": {},
													"tabs": [
														{}
													]
												}
											],
											"channels": [
												{}
											],
											"discoverySettings": {},
											"funSettings": {},
											"group": {},
											"guestSettings": {},
											"incomingChannels": [
												{}
											],
											"installedApps": [
												{}
											],
											"memberSettings": {},
											"members": [
												{}
											],
											"messagingSettings": {},
											"operations": [
												{}
											],
											"owners": [
												{}
											],
											"permissionGrants": [
												{}
											],
											"photo": {},
											"primaryChannel": {},
											"schedule": {
												"offerShiftRequests": [
													{
														"@odata.type": "#microsoft.graph.offerShiftRequest",
														"createdBy": {},
														"lastModifiedBy": {}
													}
												],
												"openShiftChangeRequests": [
													{
														"@odata.type": "#microsoft.graph.openShiftChangeRequest"
													}
												],
												"openShifts": [
													{
														"@odata.type": "#microsoft.graph.openShift",
														"draftOpenShift": {
															"@odata.type": "#microsoft.graph.openShiftItem",
															"activities": [
																{
																	"theme": {}
																}
															]
														},
														"sharedOpenShift": {}
													}
												],
												"provisionStatus": {},
												"schedulingGroups": [
													{
														"@odata.type": "#microsoft.graph.schedulingGroup",
														"userIds": [
															null
														]
													}
												],
												"shifts": [
													{
														"@odata.type": "#microsoft.graph.shift",
														"draftShift": {},
														"sharedShift": {}
													}
												],
												"swapShiftsChangeRequests": [
													{
														"@odata.type": "#microsoft.graph.swapShiftsChangeRequest"
													}
												],
												"timeCards": [
													{
														"@odata.type": "#microsoft.graph.timeCard",
														"breaks": [
															{
																"end": {
																	"notes": {}
																},
																"notes": {},
																"start": {}
															}
														],
														"clockInEvent": {},
														"clockOutEvent": {},
														"notes": {},
														"originalEntry": {
															"breaks": [
																{}
															],
															"clockInEvent": {},
															"clockOutEvent": {}
														}
													}
												],
												"timeClockSettings": {
													"approvedLocation": {}
												},
												"timeOffReasons": [
													{
														"@odata.type": "#microsoft.graph.timeOffReason"
													}
												],
												"timeOffRequests": [
													{
														"@odata.type": "#microsoft.graph.timeOffRequest"
													}
												],
												"timesOff": [
													{
														"@odata.type": "#microsoft.graph.timeOff",
														"draftTimeOff": {},
														"sharedTimeOff": {}
													}
												],
												"workforceIntegrationIds": [
													null
												]
											},
											"summary": {},
											"tags": [
												{
													"members": [
														{}
													]
												}
											],
											"template": {},
											"templateDefinition": {
												"categories": [
													null
												],
												"lastModifiedBy": {},
												"teamDefinition": {}
											}
										}
									],
									"licenseAssignmentStates": [
										{
											"disabledPlans": [
												null
											]
										}
									],
									"licenseDetails": [
										{}
									],
									"mailFolders": [
										{
											"childFolders": [
												{}
											],
											"messageRules": [
												{
													"actions": {
														"assignCategories": [
															null
														],
														"forwardAsAttachmentTo": [
															{}
														],
														"forwardTo": [
															{}
														],
														"markImportance": {},
														"redirectTo": [
															{}
														]
													},
													"conditions": {
														"bodyContains": [
															null
														],
														"bodyOrSubjectContains": [
															null
														],
														"categories": [
															null
														],
														"fromAddresses": [
															{}
														],
														"headerContains": [
															null
														],
														"importance": {},
														"recipientContains": [
															null
														],
														"senderContains": [
															null
														],
														"sensitivity": {},
														"sentToAddresses": [
															{}
														],
														"subjectContains": [
															null
														],
														"withinSizeRange": {}
													},
													"exceptions": {}
												}
											],
											"messages": [
												{
													"@odata.type": "#microsoft.graph.message",
													"attachments": [
														{}
													],
													"bccRecipients": [
														{}
													],
													"body": {},
													"ccRecipients": [
														{}
													],
													"extensions": [
														{}
													],
													"flag": {},
													"from": {},
													"importance": {},
													"inferenceClassification": {},
													"internetMessageHeaders": [
														{}
													],
													"mentions": [
														{}
													],
													"mentionsPreview": {},
													"multiValueExtendedProperties": [
														{}
													],
													"replyTo": [
														{}
													],
													"sender": {},
													"singleValueExtendedProperties": [
														{}
													],
													"toRecipients": [
														{}
													],
													"uniqueBody": {},
													"unsubscribeData": [
														null
													]
												}
											],
											"multiValueExtendedProperties": [
												{}
											],
											"singleValueExtendedProperties": [
												{}
											],
											"userConfigurations": [
												{}
											]
										}
									],
									"mailboxSettings": {
										"automaticRepliesSetting": {
											"scheduledEndDateTime": {},
											"scheduledStartDateTime": {}
										},
										"language": {},
										"workingHours": {
											"daysOfWeek": [
												{}
											],
											"timeZone": {}
										}
									},
									"managedAppRegistrations": [
										{
											"appIdentifier": {},
											"appliedPolicies": [
												{
													"roleScopeTagIds": [
														null
													]
												}
											],
											"flaggedReasons": [
												null
											],
											"intendedPolicies": [
												{}
											],
											"operations": [
												{}
											]
										}
									],
									"managedDevices": [
										{
											"assignmentFilterEvaluationStatusDetails": [
												{}
											],
											"chromeOSDeviceInfo": [
												{}
											],
											"cloudPcRemoteActionResults": [
												{}
											],
											"configurationManagerClientEnabledFeatures": {},
											"configurationManagerClientHealthState": {},
											"configurationManagerClientInformation": {},
											"detectedApps": [
												{
													"managedDevices": [
														{}
													]
												}
											],
											"deviceActionResults": [
												{
													"actionState": {}
												}
											],
											"deviceCategory": {
												"roleScopeTagIds": [
													null
												]
											},
											"deviceCompliancePolicyStates": [
												{
													"settingStates": [
														{
															"sources": [
																{}
															]
														}
													],
													"state": {}
												}
											],
											"deviceConfigurationStates": [
												{
													"platformType": {},
													"settingStates": [
														{
															"sources": [
																{}
															],
															"state": {}
														}
													],
													"state": {}
												}
											],
											"deviceHealthAttestationState": {},
											"deviceHealthScriptStates": [
												{
													"assignmentFilterIds": [
														null
													]
												}
											],
											"hardwareInformation": {
												"sharedDeviceCachedUsers": [
													{}
												],
												"wiredIPv4Addresses": [
													null
												]
											},
											"logCollectionRequests": [
												{}
											],
											"managedDeviceMobileAppConfigurationStates": [
												{
													"platformType": {},
													"settingStates": [
														{
															"sources": [
																{}
															],
															"state": {}
														}
													],
													"state": {}
												}
											],
											"roleScopeTagIds": [
												null
											],
											"securityBaselineStates": [
												{
													"settingStates": [
														{
															"contributingPolicies": [
																{}
															],
															"sourcePolicies": [
																{}
															]
														}
													],
													"state": {}
												}
											],
											"users": [
												{}
											],
											"usersLoggedOn": [
												{}
											],
											"windowsProtectionState": {
												"detectedMalwareState": [
													{}
												]
											}
										}
									],
									"manager": {},
									"memberOf": [
										{}
									],
									"messages": [
										{}
									],
									"mobileAppIntentAndStates": [
										{
											"mobileAppList": [
												{
													"supportedDeviceTypes": [
														{
															"type": {}
														}
													]
												}
											]
										}
									],
									"mobileAppTroubleshootingEvents": [
										{
											"appLogCollectionRequests": [
												{
													"customLogFolders": [
														null
													]
												}
											],
											"history": [
												{
													"troubleshootingErrorDetails": {}
												}
											]
										}
									],
									"notifications": [
										{
											"payload": {
												"visualContent": {}
											},
											"targetPolicy": {
												"platformTypes": [
													null
												]
											}
										}
									],
									"oauth2PermissionGrants": [
										{}
									],
									"onPremisesExtensionAttributes": {},
									"onPremisesProvisioningErrors": [
										{}
									],
									"onenote": {},
									"onlineMeetings": [
										{
											"anonymizeIdentityForRoles": [
												null
											],
											"attendanceReports": [
												{
													"attendanceRecords": [
														{
															"attendanceIntervals": [
																{}
															],
															"identity": {}
														}
													]
												}
											],
											"audioConferencing": {
												"tollFreeNumbers": [
													null
												],
												"tollNumbers": [
													null
												]
											},
											"broadcastSettings": {
												"captions": {
													"translationLanguages": [
														null
													]
												}
											},
											"capabilities": [
												null
											],
											"chatInfo": {},
											"joinInformation": {},
											"joinMeetingIdSettings": {},
											"lobbyBypassSettings": {},
											"meetingAttendanceReport": {},
											"participants": {
												"attendees": [
													{
														"identity": {},
														"role": {}
													}
												],
												"contributors": [
													{}
												],
												"organizer": {},
												"producers": [
													{}
												]
											},
											"registration": {
												"@odata.type": "#microsoft.graph.meetingRegistration",
												"registrants": [
													{}
												],
												"customQuestions": [
													{
														"answerOptions": [
															null
														]
													}
												],
												"speakers": [
													{}
												]
											},
											"transcripts": [
												{}
											],
											"virtualAppointment": {
												"appointmentClients": [
													{}
												],
												"settings": {}
											},
											"watermarkProtection": {}
										}
									],
									"otherMails": [
										null
									],
									"outlook": {
										"masterCategories": [
											{}
										],
										"taskFolders": [
											{
												"multiValueExtendedProperties": [
													{}
												],
												"singleValueExtendedProperties": [
													{}
												],
												"tasks": [
													{
														"@odata.type": "#microsoft.graph.outlookTask",
														"attachments": [
															{}
														],
														"body": {},
														"completedDateTime": {},
														"dueDateTime": {},
														"importance": {},
														"multiValueExtendedProperties": [
															{}
														],
														"recurrence": {},
														"reminderDateTime": {},
														"sensitivity": {},
														"singleValueExtendedProperties": [
															{}
														],
														"startDateTime": {}
													}
												]
											}
										],
										"taskGroups": [
											{
												"taskFolders": [
													{}
												]
											}
										],
										"tasks": [
											{}
										]
									},
									"ownedDevices": [
										{}
									],
									"ownedObjects": [
										{}
									],
									"passwordProfile": {},
									"pastProjects": [
										null
									],
									"pendingAccessReviewInstances": [
										{
											"contactedReviewers": [
												{}
											],
											"decisions": [
												{
													"appliedBy": {
														"@odata.type": "#microsoft.graph.userIdentity"
													},
													"insights": [
														{}
													],
													"instance": {},
													"principal": {},
													"principalResourceMembership": {},
													"resource": {},
													"reviewedBy": {},
													"target": {}
												}
											],
											"definition": {
												"additionalNotificationRecipients": [
													{
														"notificationRecipientScope": {}
													}
												],
												"backupReviewers": [
													{
														"@odata.type": "#microsoft.graph.accessReviewReviewerScope"
													}
												],
												"createdBy": {},
												"fallbackReviewers": [
													{}
												],
												"instanceEnumerationScope": {},
												"instances": [
													{}
												],
												"reviewers": [
													{}
												],
												"scope": {},
												"settings": {
													"applyActions": [
														{}
													],
													"recommendationInsightSettings": [
														{}
													],
													"recurrence": {}
												},
												"stageSettings": [
													{
														"decisionsThatWillMoveToNextStage": [
															null
														],
														"dependsOn": [
															null
														],
														"fallbackReviewers": [
															{}
														],
														"recommendationInsightSettings": [
															{}
														],
														"reviewers": [
															{}
														]
													}
												]
											},
											"errors": [
												{
													"@odata.type": "#microsoft.graph.accessReviewError"
												}
											],
											"fallbackReviewers": [
												{}
											],
											"reviewers": [
												{}
											],
											"scope": {},
											"stages": [
												{
													"decisions": [
														{}
													],
													"fallbackReviewers": [
														{}
													],
													"reviewers": [
														{}
													]
												}
											]
										}
									],
									"people": [
										{
											"emailAddresses": [
												{}
											],
											"phones": [
												{}
											],
											"postalAddresses": [
												{}
											],
											"sources": [
												{}
											],
											"websites": [
												{}
											]
										}
									],
									"photo": {},
									"photos": [
										{}
									],
									"planner": {
										"all": [
											{}
										],
										"favoritePlanReferences": {},
										"favoritePlans": [
											{
												"buckets": [
													{
														"creationSource": {},
														"tasks": [
															{
																"appliedCategories": {},
																"assignedToTaskBoardFormat": {
																	"orderHintsByAssignee": {}
																},
																"assignments": {},
																"bucketTaskBoardFormat": {},
																"completedBy": {},
																"createdBy": {},
																"creationSource": {
																	"creationSourceKind": {},
																	"teamsPublicationInfo": {
																		"@odata.type": "#microsoft.graph.plannerTeamsPublicationInfo"
																	}
																},
																"details": {
																	"checklist": {},
																	"notes": {},
																	"references": {}
																},
																"previewType": {},
																"progressTaskBoardFormat": {},
																"recurrence": {
																	"schedule": {
																		"pattern": {}
																	}
																}
															}
														]
													}
												],
												"container": {},
												"contexts": {},
												"createdBy": {},
												"creationSource": {
													"creationSourceKind": {}
												},
												"details": {
													"categoryDescriptions": {},
													"contextDetails": {},
													"sharedWith": {}
												},
												"sharedWithContainers": [
													{
														"@odata.type": "#microsoft.graph.plannerSharedWithContainer"
													}
												],
												"tasks": [
													{}
												]
											}
										],
										"plans": [
											{}
										],
										"recentPlanReferences": {},
										"recentPlans": [
											{}
										],
										"rosterPlans": [
											{}
										],
										"tasks": [
											{}
										]
									},
									"presence": {
										"outOfOfficeSettings": {},
										"statusMessage": {
											"expiryDateTime": {},
											"message": {}
										}
									},
									"print": {
										"recentPrinterShares": [
											{
												"@odata.type": "#microsoft.graph.printerShare",
												"capabilities": {
													"bottomMargins": [
														null
													],
													"colorModes": [
														null
													],
													"contentTypes": [
														null
													],
													"copiesPerJob": {},
													"dpis": [
														null
													],
													"duplexModes": [
														null
													],
													"feedDirections": [
														null
													],
													"feedOrientations": [
														null
													],
													"finishings": [
														null
													],
													"inputBins": [
														null
													],
													"leftMargins": [
														null
													],
													"mediaColors": [
														null
													],
													"mediaSizes": [
														null
													],
													"mediaTypes": [
														null
													],
													"multipageLayouts": [
														null
													],
													"orientations": [
														null
													],
													"outputBins": [
														null
													],
													"pagesPerSheet": [
														null
													],
													"qualities": [
														null
													],
													"rightMargins": [
														null
													],
													"scalings": [
														null
													],
													"supportedColorConfigurations": [
														null
													],
													"supportedCopiesPerJob": {},
													"supportedDocumentMimeTypes": [
														null
													],
													"supportedDuplexConfigurations": [
														null
													],
													"supportedFinishings": [
														{}
													],
													"supportedMediaColors": [
														null
													],
													"supportedMediaSizes": [
														null
													],
													"supportedMediaTypes": [
														null
													],
													"supportedOrientations": [
														{}
													],
													"supportedOutputBins": [
														null
													],
													"supportedPagesPerSheet": {},
													"supportedPresentationDirections": [
														null
													],
													"supportedPrintQualities": [
														{}
													],
													"topMargins": [
														null
													]
												},
												"defaults": {
													"colorMode": {},
													"duplexConfiguration": {},
													"duplexMode": {},
													"finishings": [
														{}
													],
													"multipageLayout": {},
													"orientation": {},
													"presentationDirection": {},
													"printColorConfiguration": {},
													"printQuality": {},
													"quality": {},
													"scaling": {}
												},
												"jobs": [
													{
														"configuration": {
															"colorMode": {},
															"duplexMode": {},
															"feedOrientation": {},
															"finishings": [
																{}
															],
															"margin": {},
															"multipageLayout": {},
															"orientation": {},
															"pageRanges": [
																{}
															],
															"quality": {},
															"scaling": {}
														},
														"createdBy": {},
														"documents": [
															{
																"configuration": {
																	"colorMode": {},
																	"duplexMode": {},
																	"feedDirection": {},
																	"feedOrientation": {},
																	"finishings": [
																		{}
																	],
																	"margin": {},
																	"multipageLayout": {},
																	"orientation": {},
																	"pageRanges": [
																		{}
																	],
																	"quality": {},
																	"scaling": {}
																}
															}
														],
														"status": {
															"details": [
																null
															],
															"state": {}
														},
														"tasks": [
															{
																"definition": {
																	"createdBy": {},
																	"tasks": [
																		{}
																	]
																},
																"status": {},
																"trigger": {
																	"definition": {}
																}
															}
														]
													}
												],
												"location": {
													"organization": [
														null
													],
													"subdivision": [
														null
													],
													"subunit": [
														null
													]
												},
												"status": {
													"details": [
														null
													],
													"processingStateReasons": [
														null
													],
													"state": {}
												},
												"allowedGroups": [
													{}
												],
												"allowedUsers": [
													{}
												],
												"printer": {
													"@odata.type": "#microsoft.graph.printer",
													"connectors": [
														{
															"deviceHealth": {},
															"location": {}
														}
													],
													"share": {},
													"shares": [
														{}
													],
													"taskTriggers": [
														{}
													]
												},
												"viewPoint": {}
											}
										]
									},
									"profile": {
										"account": [
											{
												"@odata.type": "#microsoft.graph.userAccountInformation",
												"createdBy": {},
												"inference": {},
												"lastModifiedBy": {},
												"source": {
													"type": [
														null
													]
												},
												"preferredLanguageTag": {}
											}
										],
										"addresses": [
											{
												"@odata.type": "#microsoft.graph.itemAddress",
												"detail": {},
												"geoCoordinates": {}
											}
										],
										"anniversaries": [
											{
												"@odata.type": "#microsoft.graph.personAnnualEvent"
											}
										],
										"awards": [
											{
												"@odata.type": "#microsoft.graph.personAward"
											}
										],
										"certifications": [
											{
												"@odata.type": "#microsoft.graph.personCertification"
											}
										],
										"educationalActivities": [
											{
												"@odata.type": "#microsoft.graph.educationalActivity",
												"institution": {
													"location": {}
												},
												"program": {
													"activities": [
														null
													],
													"awards": [
														null
													],
													"fieldsOfStudy": [
														null
													]
												}
											}
										],
										"emails": [
											{
												"@odata.type": "#microsoft.graph.itemEmail",
												"type": {}
											}
										],
										"interests": [
											{
												"@odata.type": "#microsoft.graph.personInterest",
												"categories": [
													null
												],
												"collaborationTags": [
													null
												]
											}
										],
										"languages": [
											{
												"@odata.type": "#microsoft.graph.languageProficiency",
												"reading": {},
												"spoken": {},
												"written": {}
											}
										],
										"names": [
											{
												"@odata.type": "#microsoft.graph.personName",
												"pronunciation": {}
											}
										],
										"notes": [
											{
												"@odata.type": "#microsoft.graph.personAnnotation",
												"detail": {}
											}
										],
										"patents": [
											{
												"@odata.type": "#microsoft.graph.itemPatent"
											}
										],
										"phones": [
											{
												"@odata.type": "#microsoft.graph.itemPhone",
												"type": {}
											}
										],
										"positions": [
											{
												"@odata.type": "#microsoft.graph.workPosition",
												"categories": [
													null
												],
												"colleagues": [
													{}
												],
												"detail": {
													"company": {
														"address": {}
													}
												},
												"manager": {}
											}
										],
										"projects": [
											{
												"@odata.type": "#microsoft.graph.projectParticipation",
												"categories": [
													null
												],
												"client": {},
												"collaborationTags": [
													null
												],
												"colleagues": [
													{}
												],
												"detail": {},
												"sponsors": [
													{}
												]
											}
										],
										"publications": [
											{
												"@odata.type": "#microsoft.graph.itemPublication"
											}
										],
										"skills": [
											{
												"@odata.type": "#microsoft.graph.skillProficiency",
												"categories": [
													null
												],
												"collaborationTags": [
													null
												]
											}
										],
										"webAccounts": [
											{
												"@odata.type": "#microsoft.graph.webAccount",
												"service": {}
											}
										],
										"websites": [
											{
												"@odata.type": "#microsoft.graph.personWebsite",
												"categories": [
													null
												]
											}
										]
									},
									"provisionedPlans": [
										{}
									],
									"proxyAddresses": [
										null
									],
									"registeredDevices": [
										{}
									],
									"responsibilities": [
										null
									],
									"schools": [
										null
									],
									"scopedRoleMemberOf": [
										{
											"roleMemberInfo": {}
										}
									],
									"security": {
										"informationProtection": {
											"labelPolicySettings": {},
											"sensitivityLabels": [
												{
													"contentFormats": [
														null
													],
													"parent": {}
												}
											]
										}
									},
									"settings": {
										"contactMergeSuggestions": {},
										"itemInsights": {},
										"regionalAndLanguageSettings": {
											"authoringLanguages": [
												{}
											],
											"defaultDisplayLanguage": {},
											"defaultRegionalFormat": {},
											"defaultSpeechInputLanguage": {},
											"defaultTranslationLanguage": {},
											"regionalFormatOverrides": {},
											"translationPreferences": {
												"languageOverrides": [
													{}
												],
												"translationBehavior": {},
												"untranslatedLanguages": [
													null
												]
											}
										},
										"shiftPreferences": {
											"@odata.type": "#microsoft.graph.shiftPreferences",
											"availability": [
												{
													"recurrence": {},
													"timeSlots": [
														{}
													]
												}
											]
										}
									},
									"signInActivity": {},
									"skills": [
										null
									],
									"teamwork": {
										"associatedTeams": [
											{}
										],
										"installedApps": [
											{
												"@odata.type": "#microsoft.graph.userScopeTeamsAppInstallation",
												"chat": {}
											}
										]
									},
									"todo": {
										"lists": [
											{
												"extensions": [
													{}
												],
												"tasks": [
													{
														"attachmentSessions": [
															{
																"nextExpectedRanges": [
																	null
																]
															}
														],
														"attachments": [
															{}
														],
														"body": {},
														"categories": [
															null
														],
														"checklistItems": [
															{}
														],
														"completedDateTime": {},
														"dueDateTime": {},
														"extensions": [
															{}
														],
														"importance": {},
														"linkedResources": [
															{}
														],
														"recurrence": {},
														"reminderDateTime": {},
														"startDateTime": {},
														"status": {}
													}
												]
											}
										]
									},
									"transitiveMemberOf": [
										{}
									],
									"transitiveReports": [
										{}
									],
									"usageRights": [
										{}
									],
									"windowsInformationProtectionDeviceRegistrations": [
										{}
									]
								},
								"lastModifiedBy": {},
								"lastModifiedByUser": {},
								"parentReference": {},
								"activities": [
									{}
								],
								"bundles": [
									{}
								],
								"following": [
									{}
								],
								"items": [
									{}
								],
								"list": {},
								"owner": {},
								"quota": {
									"storagePlanInformation": {}
								},
								"root": {},
								"sharePointIds": {},
								"special": [
									{}
								],
								"system": {}
							},
							"drives": [
								{}
							],
							"endpoints": [
								{}
							],
							"events": [
								{}
							],
							"extensions": [
								{}
							],
							"groupLifecyclePolicies": [
								{}
							],
							"groupTypes": [
								null
							],
							"infoCatalogs": [
								null
							],
							"licenseProcessingState": {},
							"memberOf": [
								{}
							],
							"members": [
								{}
							],
							"membersWithLicenseErrors": [
								{}
							],
							"membershipRuleProcessingStatus": {},
							"onPremisesProvisioningErrors": [
								{}
							],
							"onenote": {},
							"owners": [
								{}
							],
							"permissionGrants": [
								{}
							],
							"photo": {},
							"photos": [
								{}
							],
							"planner": {
								"plans": [
									{}
								]
							},
							"proxyAddresses": [
								null
							],
							"rejectedSenders": [
								{}
							],
							"resourceBehaviorOptions": [
								null
							],
							"resourceProvisioningOptions": [
								null
							],
							"settings": [
								{
									"values": [
										{}
									]
								}
							],
							"sites": [
								{}
							],
							"team": {},
							"threads": [
								{}
							],
							"transitiveMemberOf": [
								{}
							],
							"transitiveMembers": [
								{}
							],
							"writebackConfiguration": {}
						},
						"members": [
							{
								"assignedLicenses": [
									{}
								],
								"assignedPlans": [
									{}
								],
								"assignments": [
									{}
								],
								"businessPhones": [
									null
								],
								"classes": [
									{}
								],
								"createdBy": {},
								"externalSource": {},
								"mailingAddress": {},
								"onPremisesInfo": {},
								"passwordProfile": {},
								"provisionedPlans": [
									{}
								],
								"relatedContacts": [
									{}
								],
								"residenceAddress": {},
								"rubrics": [
									{}
								],
								"schools": [
									{
										"@odata.type": "#microsoft.graph.educationSchool",
										"externalSource": {},
										"address": {},
										"administrativeUnit": {
											"@odata.type": "#microsoft.graph.administrativeUnit",
											"extensions": [
												{}
											],
											"members": [
												{}
											],
											"scopedRoleMembers": [
												{}
											]
										},
										"classes": [
											{}
										],
										"createdBy": {},
										"users": [
											{}
										]
									}
								],
								"student": {},
								"taughtClasses": [
									{}
								],
								"teacher": {},
								"user": {}
							}
						],
						"schools": [
							{}
						],
						"teachers": [
							{}
						],
						"term": {}
					}
				],
				"createdBy": {},
				"externalSource": {},
				"mailingAddress": {},
				"onPremisesInfo": {},
				"passwordProfile": {},
				"primaryRole": {},
				"provisionedPlans": [
					{}
				],
				"relatedContacts": [
					{}
				],
				"residenceAddress": {},
				"rubrics": [
					{}
				],
				"schools": [
					{}
				],
				"student": {},
				"taughtClasses": [
					{}
				],
				"teacher": {},
				"user": {}
			},
			"routing": {
				"send": {
					"property": "me",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Update Education Root"
					]
				}
			}
		},
		{
			"displayName": "Schools",
			"name": "schools",
			"type": "json",
			"default": "[\n  {\n    \"@odata.type\": \"#microsoft.graph.educationSchool\",\n    \"address\": {},\n    \"administrativeUnit\": {\n      \"@odata.type\": \"#microsoft.graph.administrativeUnit\",\n      \"extensions\": [\n        {}\n      ],\n      \"members\": [\n        {}\n      ],\n      \"scopedRoleMembers\": [\n        {\n          \"roleMemberInfo\": {}\n        }\n      ]\n    },\n    \"classes\": [\n      {\n        \"assignmentCategories\": [\n          {}\n        ],\n        \"assignmentDefaults\": {},\n        \"assignmentSettings\": {},\n        \"assignments\": [\n          {\n            \"addToCalendarAction\": {},\n            \"addedStudentAction\": {},\n            \"assignTo\": {},\n            \"categories\": [\n              {}\n            ],\n            \"createdBy\": {\n              \"application\": {},\n              \"device\": {},\n              \"user\": {}\n            },\n            \"grading\": {},\n            \"instructions\": {},\n            \"lastModifiedBy\": {},\n            \"resources\": [\n              {\n                \"resource\": {\n                  \"createdBy\": {},\n                  \"lastModifiedBy\": {}\n                }\n              }\n            ],\n            \"rubric\": {\n              \"createdBy\": {},\n              \"description\": {},\n              \"grading\": {},\n              \"lastModifiedBy\": {},\n              \"levels\": [\n                {\n                  \"description\": {},\n                  \"grading\": {}\n                }\n              ],\n              \"qualities\": [\n                {\n                  \"criteria\": [\n                    {\n                      \"description\": {}\n                    }\n                  ],\n                  \"description\": {}\n                }\n              ]\n            },\n            \"submissions\": [\n              {\n                \"outcomes\": [\n                  {\n                    \"lastModifiedBy\": {}\n                  }\n                ],\n                \"reassignedBy\": {},\n                \"recipient\": {},\n                \"resources\": [\n                  {\n                    \"resource\": {}\n                  }\n                ],\n                \"returnedBy\": {},\n                \"submittedBy\": {},\n                \"submittedResources\": [\n                  {}\n                ],\n                \"unsubmittedBy\": {}\n              }\n            ]\n          }\n        ],\n        \"course\": {},\n        \"createdBy\": {},\n        \"externalSource\": {},\n        \"group\": {\n          \"@odata.type\": \"#microsoft.graph.group\",\n          \"acceptedSenders\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"assignedLabels\": [\n            {}\n          ],\n          \"assignedLicenses\": [\n            {\n              \"disabledPlans\": [\n                null\n              ]\n            }\n          ],\n          \"calendar\": {\n            \"allowedOnlineMeetingProviders\": [\n              null\n            ],\n            \"calendarPermissions\": [\n              {\n                \"allowedRoles\": [\n                  null\n                ],\n                \"emailAddress\": {},\n                \"role\": {}\n              }\n            ],\n            \"calendarView\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.event\",\n                \"categories\": [\n                  null\n                ],\n                \"attachments\": [\n                  {}\n                ],\n                \"attendees\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.attendee\",\n                    \"emailAddress\": {},\n                    \"proposedNewTime\": {\n                      \"end\": {},\n                      \"start\": {}\n                    },\n                    \"status\": {}\n                  }\n                ],\n                \"body\": {\n                  \"contentType\": {}\n                },\n                \"calendar\": {},\n                \"cancelledOccurrences\": [\n                  null\n                ],\n                \"end\": {},\n                \"exceptionOccurrences\": [\n                  {}\n                ],\n                \"extensions\": [\n                  {}\n                ],\n                \"instances\": [\n                  {}\n                ],\n                \"location\": {\n                  \"address\": {},\n                  \"coordinates\": {}\n                },\n                \"locations\": [\n                  {}\n                ],\n                \"multiValueExtendedProperties\": [\n                  {\n                    \"value\": [\n                      null\n                    ]\n                  }\n                ],\n                \"onlineMeeting\": {\n                  \"phones\": [\n                    {}\n                  ],\n                  \"tollFreeNumbers\": [\n                    null\n                  ]\n                },\n                \"onlineMeetingProvider\": {},\n                \"organizer\": {},\n                \"recurrence\": {\n                  \"pattern\": {\n                    \"daysOfWeek\": [\n                      null\n                    ],\n                    \"firstDayOfWeek\": {}\n                  },\n                  \"range\": {}\n                },\n                \"responseStatus\": {},\n                \"singleValueExtendedProperties\": [\n                  {}\n                ],\n                \"start\": {}\n              }\n            ],\n            \"defaultOnlineMeetingProvider\": {},\n            \"events\": [\n              {}\n            ],\n            \"multiValueExtendedProperties\": [\n              {}\n            ],\n            \"owner\": {},\n            \"singleValueExtendedProperties\": [\n              {}\n            ]\n          },\n          \"calendarView\": [\n            {}\n          ],\n          \"conversations\": [\n            {\n              \"threads\": [\n                {\n                  \"ccRecipients\": [\n                    {}\n                  ],\n                  \"posts\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.post\",\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"from\": {},\n                      \"importance\": {},\n                      \"inReplyTo\": {},\n                      \"mentions\": [\n                        {\n                          \"createdBy\": {},\n                          \"mentioned\": {}\n                        }\n                      ],\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"newParticipants\": [\n                        {}\n                      ],\n                      \"sender\": {},\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"toRecipients\": [\n                    {}\n                  ],\n                  \"uniqueSenders\": [\n                    null\n                  ]\n                }\n              ],\n              \"uniqueSenders\": [\n                null\n              ]\n            }\n          ],\n          \"createdOnBehalfOf\": {},\n          \"drive\": {\n            \"@odata.type\": \"#microsoft.graph.drive\",\n            \"createdBy\": {},\n            \"createdByUser\": {\n              \"@odata.type\": \"#microsoft.graph.user\",\n              \"activities\": [\n                {\n                  \"contentInfo\": {},\n                  \"historyItems\": [\n                    {\n                      \"activity\": {}\n                    }\n                  ],\n                  \"status\": {},\n                  \"visualElements\": {\n                    \"attribution\": {},\n                    \"content\": {}\n                  }\n                }\n              ],\n              \"agreementAcceptances\": [\n                {}\n              ],\n              \"analytics\": {\n                \"activityStatistics\": [\n                  {}\n                ],\n                \"settings\": {}\n              },\n              \"appConsentRequestsForApproval\": [\n                {\n                  \"pendingScopes\": [\n                    {}\n                  ],\n                  \"userConsentRequests\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.userConsentRequest\",\n                      \"createdBy\": {},\n                      \"approval\": {\n                        \"steps\": [\n                          {\n                            \"reviewedBy\": {}\n                          }\n                        ]\n                      }\n                    }\n                  ]\n                }\n              ],\n              \"appRoleAssignedResources\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.servicePrincipal\",\n                  \"addIns\": [\n                    {\n                      \"properties\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"alternativeNames\": [\n                    null\n                  ],\n                  \"appManagementPolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.appManagementPolicy\",\n                      \"appliesTo\": [\n                        {}\n                      ],\n                      \"restrictions\": {\n                        \"keyCredentials\": [\n                          {}\n                        ],\n                        \"passwordCredentials\": [\n                          {}\n                        ]\n                      }\n                    }\n                  ],\n                  \"appRoleAssignedTo\": [\n                    {}\n                  ],\n                  \"appRoleAssignments\": [\n                    {}\n                  ],\n                  \"appRoles\": [\n                    {\n                      \"allowedMemberTypes\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"claimsMappingPolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.claimsMappingPolicy\",\n                      \"appliesTo\": [\n                        {}\n                      ],\n                      \"definition\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"createdObjects\": [\n                    {}\n                  ],\n                  \"customSecurityAttributes\": {},\n                  \"delegatedPermissionClassifications\": [\n                    {}\n                  ],\n                  \"endpoints\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.endpoint\"\n                    }\n                  ],\n                  \"federatedIdentityCredentials\": [\n                    {\n                      \"audiences\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"homeRealmDiscoveryPolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.homeRealmDiscoveryPolicy\"\n                    }\n                  ],\n                  \"info\": {},\n                  \"keyCredentials\": [\n                    {}\n                  ],\n                  \"licenseDetails\": [\n                    {\n                      \"servicePlans\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"memberOf\": [\n                    {}\n                  ],\n                  \"notificationEmailAddresses\": [\n                    null\n                  ],\n                  \"oauth2PermissionGrants\": [\n                    {}\n                  ],\n                  \"ownedObjects\": [\n                    {}\n                  ],\n                  \"owners\": [\n                    {}\n                  ],\n                  \"passwordCredentials\": [\n                    {}\n                  ],\n                  \"passwordSingleSignOnSettings\": {\n                    \"fields\": [\n                      {}\n                    ]\n                  },\n                  \"publishedPermissionScopes\": [\n                    {}\n                  ],\n                  \"replyUrls\": [\n                    null\n                  ],\n                  \"samlSingleSignOnSettings\": {},\n                  \"servicePrincipalNames\": [\n                    null\n                  ],\n                  \"synchronization\": {\n                    \"jobs\": [\n                      {\n                        \"schedule\": {},\n                        \"schema\": {\n                          \"directories\": [\n                            {\n                              \"objects\": [\n                                {\n                                  \"attributes\": [\n                                    {\n                                      \"apiExpressions\": [\n                                        {}\n                                      ],\n                                      \"metadata\": [\n                                        {}\n                                      ],\n                                      \"referencedObjects\": [\n                                        {}\n                                      ]\n                                    }\n                                  ],\n                                  \"metadata\": [\n                                    {}\n                                  ],\n                                  \"supportedApis\": [\n                                    null\n                                  ]\n                                }\n                              ]\n                            }\n                          ],\n                          \"synchronizationRules\": [\n                            {\n                              \"metadata\": [\n                                {}\n                              ],\n                              \"objectMappings\": [\n                                {\n                                  \"attributeMappings\": [\n                                    {\n                                      \"source\": {\n                                        \"parameters\": [\n                                          {\n                                            \"value\": {}\n                                          }\n                                        ]\n                                      }\n                                    }\n                                  ],\n                                  \"metadata\": [\n                                    {}\n                                  ],\n                                  \"scope\": {\n                                    \"categoryFilterGroups\": [\n                                      {\n                                        \"clauses\": [\n                                          {\n                                            \"targetOperand\": {\n                                              \"values\": [\n                                                null\n                                              ]\n                                            }\n                                          }\n                                        ]\n                                      }\n                                    ],\n                                    \"groups\": [\n                                      {}\n                                    ],\n                                    \"inputFilterGroups\": [\n                                      {}\n                                    ]\n                                  }\n                                }\n                              ]\n                            }\n                          ]\n                        },\n                        \"status\": {\n                          \"lastExecution\": {\n                            \"error\": {}\n                          },\n                          \"lastSuccessfulExecution\": {},\n                          \"lastSuccessfulExecutionWithExports\": {},\n                          \"progress\": [\n                            {}\n                          ],\n                          \"quarantine\": {\n                            \"error\": {}\n                          },\n                          \"synchronizedEntryCountByType\": [\n                            {}\n                          ]\n                        },\n                        \"synchronizationJobSettings\": [\n                          {}\n                        ]\n                      }\n                    ],\n                    \"secrets\": [\n                      {}\n                    ],\n                    \"templates\": [\n                      {\n                        \"metadata\": [\n                          {}\n                        ],\n                        \"schema\": {}\n                      }\n                    ]\n                  },\n                  \"tags\": [\n                    null\n                  ],\n                  \"tokenIssuancePolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.tokenIssuancePolicy\"\n                    }\n                  ],\n                  \"tokenLifetimePolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.tokenLifetimePolicy\"\n                    }\n                  ],\n                  \"transitiveMemberOf\": [\n                    {}\n                  ],\n                  \"verifiedPublisher\": {}\n                }\n              ],\n              \"appRoleAssignments\": [\n                {}\n              ],\n              \"approvals\": [\n                {}\n              ],\n              \"assignedLicenses\": [\n                {}\n              ],\n              \"assignedPlans\": [\n                {}\n              ],\n              \"authentication\": {\n                \"emailMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.emailAuthenticationMethod\"\n                  }\n                ],\n                \"fido2Methods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.fido2AuthenticationMethod\",\n                    \"attestationCertificates\": [\n                      null\n                    ]\n                  }\n                ],\n                \"methods\": [\n                  {}\n                ],\n                \"microsoftAuthenticatorMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.microsoftAuthenticatorAuthenticationMethod\",\n                    \"device\": {\n                      \"@odata.type\": \"#microsoft.graph.device\",\n                      \"alternativeSecurityIds\": [\n                        {}\n                      ],\n                      \"commands\": [\n                        {\n                          \"payload\": {},\n                          \"responsepayload\": {}\n                        }\n                      ],\n                      \"extensionAttributes\": {},\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"hostnames\": [\n                        null\n                      ],\n                      \"memberOf\": [\n                        {}\n                      ],\n                      \"physicalIds\": [\n                        null\n                      ],\n                      \"registeredOwners\": [\n                        {}\n                      ],\n                      \"registeredUsers\": [\n                        {}\n                      ],\n                      \"systemLabels\": [\n                        null\n                      ],\n                      \"transitiveMemberOf\": [\n                        {}\n                      ],\n                      \"usageRights\": [\n                        {}\n                      ]\n                    }\n                  }\n                ],\n                \"operations\": [\n                  {}\n                ],\n                \"passwordMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.passwordAuthenticationMethod\"\n                  }\n                ],\n                \"passwordlessMicrosoftAuthenticatorMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod\",\n                    \"device\": {}\n                  }\n                ],\n                \"phoneMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.phoneAuthenticationMethod\"\n                  }\n                ],\n                \"softwareOathMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.softwareOathAuthenticationMethod\"\n                  }\n                ],\n                \"temporaryAccessPassMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.temporaryAccessPassAuthenticationMethod\"\n                  }\n                ],\n                \"windowsHelloForBusinessMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.windowsHelloForBusinessAuthenticationMethod\",\n                    \"device\": {}\n                  }\n                ]\n              },\n              \"authorizationInfo\": {\n                \"certificateUserIds\": [\n                  null\n                ]\n              },\n              \"businessPhones\": [\n                null\n              ],\n              \"calendar\": {},\n              \"calendarGroups\": [\n                {\n                  \"calendars\": [\n                    {}\n                  ]\n                }\n              ],\n              \"calendarView\": [\n                {}\n              ],\n              \"calendars\": [\n                {}\n              ],\n              \"chats\": [\n                {\n                  \"installedApps\": [\n                    {\n                      \"teamsApp\": {\n                        \"appDefinitions\": [\n                          {\n                            \"bot\": {},\n                            \"colorIcon\": {\n                              \"hostedContent\": {}\n                            },\n                            \"createdBy\": {},\n                            \"outlineIcon\": {}\n                          }\n                        ]\n                      },\n                      \"teamsAppDefinition\": {}\n                    }\n                  ],\n                  \"lastMessagePreview\": {\n                    \"body\": {},\n                    \"eventDetail\": {},\n                    \"from\": {\n                      \"@odata.type\": \"#microsoft.graph.chatMessageFromIdentitySet\"\n                    }\n                  },\n                  \"members\": [\n                    {\n                      \"roles\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"messages\": [\n                    {\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"channelIdentity\": {},\n                      \"eventDetail\": {},\n                      \"from\": {},\n                      \"hostedContents\": [\n                        {\n                          \"@odata.type\": \"#microsoft.graph.chatMessageHostedContent\"\n                        }\n                      ],\n                      \"mentions\": [\n                        {\n                          \"mentioned\": {\n                            \"@odata.type\": \"#microsoft.graph.chatMessageMentionedIdentitySet\",\n                            \"conversation\": {\n                              \"@odata.type\": \"#microsoft.graph.teamworkConversationIdentity\"\n                            },\n                            \"tag\": {\n                              \"@odata.type\": \"#microsoft.graph.teamworkTagIdentity\"\n                            }\n                          }\n                        }\n                      ],\n                      \"messageHistory\": [\n                        {\n                          \"reaction\": {\n                            \"user\": {\n                              \"@odata.type\": \"#microsoft.graph.chatMessageReactionIdentitySet\"\n                            }\n                          }\n                        }\n                      ],\n                      \"messageType\": {},\n                      \"onBehalfOf\": {},\n                      \"policyViolation\": {\n                        \"policyTip\": {\n                          \"matchedConditionDescriptions\": [\n                            null\n                          ]\n                        }\n                      },\n                      \"reactions\": [\n                        {}\n                      ],\n                      \"replies\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"onlineMeetingInfo\": {\n                    \"organizer\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkUserIdentity\"\n                    }\n                  },\n                  \"operations\": [\n                    {\n                      \"error\": {}\n                    }\n                  ],\n                  \"permissionGrants\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.resourceSpecificPermissionGrant\"\n                    }\n                  ],\n                  \"pinnedMessages\": [\n                    {\n                      \"message\": {}\n                    }\n                  ],\n                  \"tabs\": [\n                    {\n                      \"configuration\": {},\n                      \"teamsApp\": {}\n                    }\n                  ],\n                  \"viewpoint\": {}\n                }\n              ],\n              \"cloudPCs\": [\n                {\n                  \"connectivityResult\": {\n                    \"failedHealthCheckItems\": [\n                      {}\n                    ]\n                  },\n                  \"lastLoginResult\": {},\n                  \"lastRemoteActionResult\": {\n                    \"statusDetails\": {\n                      \"additionalInformation\": [\n                        {}\n                      ]\n                    }\n                  },\n                  \"partnerAgentInstallResults\": [\n                    {}\n                  ],\n                  \"statusDetails\": {}\n                }\n              ],\n              \"contactFolders\": [\n                {\n                  \"childFolders\": [\n                    {}\n                  ],\n                  \"contacts\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.contact\",\n                      \"children\": [\n                        null\n                      ],\n                      \"emailAddresses\": [\n                        {\n                          \"@odata.type\": \"#microsoft.graph.typedEmailAddress\"\n                        }\n                      ],\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"flag\": {\n                        \"completedDateTime\": {},\n                        \"dueDateTime\": {},\n                        \"startDateTime\": {}\n                      },\n                      \"imAddresses\": [\n                        null\n                      ],\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"phones\": [\n                        {}\n                      ],\n                      \"photo\": {},\n                      \"postalAddresses\": [\n                        {}\n                      ],\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"websites\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"multiValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"singleValueExtendedProperties\": [\n                    {}\n                  ]\n                }\n              ],\n              \"contacts\": [\n                {}\n              ],\n              \"createdObjects\": [\n                {}\n              ],\n              \"customSecurityAttributes\": {},\n              \"deviceEnrollmentConfigurations\": [\n                {\n                  \"assignments\": [\n                    {\n                      \"target\": {}\n                    }\n                  ],\n                  \"roleScopeTagIds\": [\n                    null\n                  ]\n                }\n              ],\n              \"deviceKeys\": [\n                {}\n              ],\n              \"deviceManagementTroubleshootingEvents\": [\n                {\n                  \"additionalInformation\": [\n                    {}\n                  ],\n                  \"troubleshootingErrorDetails\": {\n                    \"resources\": [\n                      {}\n                    ]\n                  }\n                }\n              ],\n              \"devices\": [\n                {}\n              ],\n              \"directReports\": [\n                {}\n              ],\n              \"drive\": {},\n              \"drives\": [\n                {}\n              ],\n              \"employeeOrgData\": {},\n              \"events\": [\n                {}\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"followedSites\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.site\",\n                  \"analytics\": {\n                    \"allTime\": {\n                      \"access\": {},\n                      \"activities\": [\n                        {\n                          \"access\": {},\n                          \"actor\": {},\n                          \"driveItem\": {\n                            \"@odata.type\": \"#microsoft.graph.driveItem\",\n                            \"activities\": [\n                              {\n                                \"action\": {\n                                  \"comment\": {\n                                    \"parentAuthor\": {},\n                                    \"participants\": [\n                                      {}\n                                    ]\n                                  },\n                                  \"create\": {},\n                                  \"delete\": {},\n                                  \"edit\": {},\n                                  \"mention\": {\n                                    \"mentionees\": [\n                                      {}\n                                    ]\n                                  },\n                                  \"move\": {},\n                                  \"rename\": {},\n                                  \"restore\": {},\n                                  \"share\": {\n                                    \"recipients\": [\n                                      {}\n                                    ]\n                                  },\n                                  \"version\": {}\n                                },\n                                \"actor\": {},\n                                \"driveItem\": {},\n                                \"listItem\": {\n                                  \"@odata.type\": \"#microsoft.graph.listItem\",\n                                  \"activities\": [\n                                    {}\n                                  ],\n                                  \"analytics\": {},\n                                  \"contentType\": {},\n                                  \"deleted\": {},\n                                  \"documentSetVersions\": [\n                                    {\n                                      \"@odata.type\": \"#microsoft.graph.documentSetVersion\",\n                                      \"lastModifiedBy\": {},\n                                      \"publication\": {},\n                                      \"fields\": {},\n                                      \"createdBy\": {},\n                                      \"items\": [\n                                        {}\n                                      ]\n                                    }\n                                  ],\n                                  \"driveItem\": {},\n                                  \"fields\": {},\n                                  \"sharepointIds\": {},\n                                  \"versions\": [\n                                    {}\n                                  ]\n                                },\n                                \"times\": {}\n                              }\n                            ],\n                            \"analytics\": {},\n                            \"audio\": {},\n                            \"bundle\": {\n                              \"album\": {}\n                            },\n                            \"children\": [\n                              {}\n                            ],\n                            \"deleted\": {},\n                            \"file\": {\n                              \"hashes\": {}\n                            },\n                            \"fileSystemInfo\": {},\n                            \"folder\": {\n                              \"view\": {}\n                            },\n                            \"image\": {},\n                            \"listItem\": {},\n                            \"location\": {},\n                            \"malware\": {},\n                            \"media\": {\n                              \"mediaSource\": {}\n                            },\n                            \"package\": {},\n                            \"pendingOperations\": {\n                              \"pendingContentUpdate\": {}\n                            },\n                            \"permissions\": [\n                              {\n                                \"grantedTo\": {},\n                                \"grantedToIdentities\": [\n                                  {}\n                                ],\n                                \"grantedToIdentitiesV2\": [\n                                  {\n                                    \"@odata.type\": \"#microsoft.graph.sharePointIdentitySet\",\n                                    \"group\": {},\n                                    \"siteGroup\": {\n                                      \"@odata.type\": \"#microsoft.graph.sharePointIdentity\"\n                                    },\n                                    \"siteUser\": {}\n                                  }\n                                ],\n                                \"grantedToV2\": {},\n                                \"inheritedFrom\": {\n                                  \"sharepointIds\": {}\n                                },\n                                \"invitation\": {\n                                  \"invitedBy\": {}\n                                },\n                                \"link\": {\n                                  \"application\": {}\n                                },\n                                \"roles\": [\n                                  null\n                                ]\n                              }\n                            ],\n                            \"photo\": {},\n                            \"publication\": {},\n                            \"remoteItem\": {\n                              \"createdBy\": {},\n                              \"file\": {},\n                              \"fileSystemInfo\": {},\n                              \"folder\": {},\n                              \"image\": {},\n                              \"lastModifiedBy\": {},\n                              \"package\": {},\n                              \"parentReference\": {},\n                              \"shared\": {\n                                \"owner\": {},\n                                \"sharedBy\": {}\n                              },\n                              \"sharepointIds\": {},\n                              \"specialFolder\": {},\n                              \"video\": {}\n                            },\n                            \"root\": {},\n                            \"searchResult\": {},\n                            \"shared\": {},\n                            \"sharepointIds\": {},\n                            \"source\": {},\n                            \"specialFolder\": {},\n                            \"subscriptions\": [\n                              {}\n                            ],\n                            \"thumbnails\": [\n                              {\n                                \"large\": {},\n                                \"medium\": {},\n                                \"small\": {},\n                                \"source\": {}\n                              }\n                            ],\n                            \"versions\": [\n                              {\n                                \"@odata.type\": \"#microsoft.graph.driveItemVersion\"\n                              }\n                            ],\n                            \"video\": {},\n                            \"workbook\": {\n                              \"application\": {},\n                              \"comments\": [\n                                {\n                                  \"replies\": [\n                                    {}\n                                  ]\n                                }\n                              ],\n                              \"functions\": {},\n                              \"names\": [\n                                {\n                                  \"value\": {},\n                                  \"worksheet\": {\n                                    \"charts\": [\n                                      {\n                                        \"axes\": {\n                                          \"categoryAxis\": {\n                                            \"format\": {\n                                              \"font\": {},\n                                              \"line\": {}\n                                            },\n                                            \"majorGridlines\": {\n                                              \"format\": {\n                                                \"line\": {}\n                                              }\n                                            },\n                                            \"majorUnit\": {},\n                                            \"maximum\": {},\n                                            \"minimum\": {},\n                                            \"minorGridlines\": {},\n                                            \"minorUnit\": {},\n                                            \"title\": {\n                                              \"format\": {\n                                                \"font\": {}\n                                              }\n                                            }\n                                          },\n                                          \"seriesAxis\": {},\n                                          \"valueAxis\": {}\n                                        },\n                                        \"dataLabels\": {\n                                          \"format\": {\n                                            \"fill\": {},\n                                            \"font\": {}\n                                          }\n                                        },\n                                        \"format\": {\n                                          \"fill\": {},\n                                          \"font\": {}\n                                        },\n                                        \"legend\": {\n                                          \"format\": {\n                                            \"fill\": {},\n                                            \"font\": {}\n                                          }\n                                        },\n                                        \"series\": [\n                                          {\n                                            \"format\": {\n                                              \"fill\": {},\n                                              \"line\": {}\n                                            },\n                                            \"points\": [\n                                              {\n                                                \"format\": {\n                                                  \"fill\": {}\n                                                },\n                                                \"value\": {}\n                                              }\n                                            ]\n                                          }\n                                        ],\n                                        \"title\": {\n                                          \"format\": {\n                                            \"fill\": {},\n                                            \"font\": {}\n                                          }\n                                        },\n                                        \"worksheet\": {}\n                                      }\n                                    ],\n                                    \"names\": [\n                                      {}\n                                    ],\n                                    \"pivotTables\": [\n                                      {\n                                        \"worksheet\": {}\n                                      }\n                                    ],\n                                    \"protection\": {\n                                      \"options\": {}\n                                    },\n                                    \"tables\": [\n                                      {\n                                        \"columns\": [\n                                          {\n                                            \"filter\": {\n                                              \"criteria\": {\n                                                \"icon\": {},\n                                                \"values\": {}\n                                              }\n                                            },\n                                            \"values\": {}\n                                          }\n                                        ],\n                                        \"rows\": [\n                                          {\n                                            \"values\": {}\n                                          }\n                                        ],\n                                        \"sort\": {\n                                          \"fields\": [\n                                            {\n                                              \"icon\": {}\n                                            }\n                                          ]\n                                        },\n                                        \"worksheet\": {}\n                                      }\n                                    ]\n                                  }\n                                }\n                              ],\n                              \"operations\": [\n                                {\n                                  \"error\": {\n                                    \"innerError\": {}\n                                  }\n                                }\n                              ],\n                              \"tables\": [\n                                {}\n                              ],\n                              \"worksheets\": [\n                                {}\n                              ]\n                            }\n                          }\n                        }\n                      ],\n                      \"create\": {},\n                      \"delete\": {},\n                      \"edit\": {},\n                      \"incompleteData\": {},\n                      \"move\": {}\n                    },\n                    \"itemActivityStats\": [\n                      {}\n                    ],\n                    \"lastSevenDays\": {}\n                  },\n                  \"columns\": [\n                    {\n                      \"boolean\": {},\n                      \"calculated\": {},\n                      \"choice\": {\n                        \"choices\": [\n                          null\n                        ]\n                      },\n                      \"contentApprovalStatus\": {},\n                      \"currency\": {},\n                      \"dateTime\": {},\n                      \"defaultValue\": {},\n                      \"geolocation\": {},\n                      \"hyperlinkOrPicture\": {},\n                      \"lookup\": {},\n                      \"number\": {},\n                      \"personOrGroup\": {},\n                      \"sourceColumn\": {},\n                      \"sourceContentType\": {},\n                      \"term\": {\n                        \"parentTerm\": {\n                          \"children\": [\n                            {}\n                          ],\n                          \"descriptions\": [\n                            {}\n                          ],\n                          \"labels\": [\n                            {}\n                          ],\n                          \"properties\": [\n                            {}\n                          ],\n                          \"relations\": [\n                            {\n                              \"fromTerm\": {},\n                              \"set\": {\n                                \"children\": [\n                                  {}\n                                ],\n                                \"localizedNames\": [\n                                  {}\n                                ],\n                                \"parentGroup\": {\n                                  \"sets\": [\n                                    {}\n                                  ]\n                                },\n                                \"properties\": [\n                                  {}\n                                ],\n                                \"relations\": [\n                                  {}\n                                ],\n                                \"terms\": [\n                                  {}\n                                ]\n                              },\n                              \"toTerm\": {}\n                            }\n                          ],\n                          \"set\": {}\n                        },\n                        \"termSet\": {}\n                      },\n                      \"text\": {},\n                      \"thumbnail\": {},\n                      \"validation\": {\n                        \"descriptions\": [\n                          {}\n                        ]\n                      }\n                    }\n                  ],\n                  \"contentTypes\": [\n                    {\n                      \"associatedHubsUrls\": [\n                        null\n                      ],\n                      \"base\": {},\n                      \"baseTypes\": [\n                        {}\n                      ],\n                      \"columnLinks\": [\n                        {}\n                      ],\n                      \"columnPositions\": [\n                        {}\n                      ],\n                      \"columns\": [\n                        {}\n                      ],\n                      \"documentSet\": {\n                        \"allowedContentTypes\": [\n                          {}\n                        ],\n                        \"defaultContents\": [\n                          {\n                            \"contentType\": {}\n                          }\n                        ],\n                        \"sharedColumns\": [\n                          {}\n                        ],\n                        \"welcomePageColumns\": [\n                          {}\n                        ]\n                      },\n                      \"documentTemplate\": {},\n                      \"inheritedFrom\": {},\n                      \"order\": {}\n                    }\n                  ],\n                  \"deleted\": {},\n                  \"drive\": {},\n                  \"drives\": [\n                    {}\n                  ],\n                  \"externalColumns\": [\n                    {}\n                  ],\n                  \"informationProtection\": {\n                    \"bitlocker\": {\n                      \"recoveryKeys\": [\n                        {}\n                      ]\n                    },\n                    \"dataLossPreventionPolicies\": [\n                      {}\n                    ],\n                    \"policy\": {\n                      \"labels\": [\n                        {\n                          \"parent\": {\n                            \"parent\": {}\n                          }\n                        }\n                      ]\n                    },\n                    \"sensitivityLabels\": [\n                      {\n                        \"assignedPolicies\": [\n                          {}\n                        ],\n                        \"autoLabeling\": {\n                          \"sensitiveTypeIds\": [\n                            null\n                          ]\n                        },\n                        \"labelActions\": [\n                          {}\n                        ],\n                        \"sublabels\": [\n                          {}\n                        ]\n                      }\n                    ],\n                    \"sensitivityPolicySettings\": {\n                      \"applicableTo\": {}\n                    },\n                    \"threatAssessmentRequests\": [\n                      {\n                        \"createdBy\": {},\n                        \"results\": [\n                          {}\n                        ]\n                      }\n                    ]\n                  },\n                  \"items\": [\n                    {}\n                  ],\n                  \"lists\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.list\",\n                      \"activities\": [\n                        {}\n                      ],\n                      \"columns\": [\n                        {}\n                      ],\n                      \"contentTypes\": [\n                        {}\n                      ],\n                      \"drive\": {},\n                      \"items\": [\n                        {}\n                      ],\n                      \"list\": {},\n                      \"operations\": [\n                        {\n                          \"error\": {\n                            \"details\": [\n                              {}\n                            ],\n                            \"innerError\": {\n                              \"details\": [\n                                {}\n                              ]\n                            }\n                          }\n                        }\n                      ],\n                      \"sharepointIds\": {},\n                      \"subscriptions\": [\n                        {}\n                      ],\n                      \"system\": {}\n                    }\n                  ],\n                  \"onenote\": {\n                    \"notebooks\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.notebook\",\n                        \"createdBy\": {},\n                        \"lastModifiedBy\": {},\n                        \"links\": {\n                          \"oneNoteClientUrl\": {},\n                          \"oneNoteWebUrl\": {}\n                        },\n                        \"sectionGroups\": [\n                          {\n                            \"@odata.type\": \"#microsoft.graph.sectionGroup\",\n                            \"parentNotebook\": {},\n                            \"parentSectionGroup\": {},\n                            \"sectionGroups\": [\n                              {}\n                            ],\n                            \"sections\": [\n                              {\n                                \"@odata.type\": \"#microsoft.graph.onenoteSection\",\n                                \"links\": {\n                                  \"oneNoteClientUrl\": {},\n                                  \"oneNoteWebUrl\": {}\n                                },\n                                \"pages\": [\n                                  {\n                                    \"@odata.type\": \"#microsoft.graph.onenotePage\",\n                                    \"links\": {\n                                      \"oneNoteClientUrl\": {},\n                                      \"oneNoteWebUrl\": {}\n                                    },\n                                    \"parentNotebook\": {},\n                                    \"parentSection\": {},\n                                    \"userTags\": [\n                                      null\n                                    ]\n                                  }\n                                ],\n                                \"parentNotebook\": {},\n                                \"parentSectionGroup\": {}\n                              }\n                            ]\n                          }\n                        ],\n                        \"sections\": [\n                          {}\n                        ]\n                      }\n                    ],\n                    \"operations\": [\n                      {\n                        \"error\": {}\n                      }\n                    ],\n                    \"pages\": [\n                      {}\n                    ],\n                    \"resources\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.onenoteResource\"\n                      }\n                    ],\n                    \"sectionGroups\": [\n                      {}\n                    ],\n                    \"sections\": [\n                      {}\n                    ]\n                  },\n                  \"operations\": [\n                    {}\n                  ],\n                  \"pages\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.sitePage\",\n                      \"canvasLayout\": {\n                        \"horizontalSections\": [\n                          {\n                            \"columns\": [\n                              {\n                                \"webparts\": [\n                                  {}\n                                ]\n                              }\n                            ]\n                          }\n                        ],\n                        \"verticalSection\": {\n                          \"emphasis\": {},\n                          \"webparts\": [\n                            {}\n                          ]\n                        }\n                      },\n                      \"contentType\": {},\n                      \"publishingState\": {},\n                      \"reactions\": {},\n                      \"titleArea\": {\n                        \"serverProcessedContent\": {\n                          \"componentDependencies\": [\n                            {}\n                          ],\n                          \"customMetadata\": [\n                            {\n                              \"value\": {}\n                            }\n                          ],\n                          \"htmlStrings\": [\n                            {}\n                          ],\n                          \"imageSources\": [\n                            {}\n                          ],\n                          \"links\": [\n                            {}\n                          ],\n                          \"searchablePlainTexts\": [\n                            {}\n                          ]\n                        }\n                      },\n                      \"webParts\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"permissions\": [\n                    {}\n                  ],\n                  \"root\": {},\n                  \"settings\": {},\n                  \"sharepointIds\": {},\n                  \"siteCollection\": {\n                    \"root\": {}\n                  },\n                  \"sites\": [\n                    {}\n                  ],\n                  \"termStore\": {\n                    \"groups\": [\n                      {}\n                    ],\n                    \"languageTags\": [\n                      null\n                    ],\n                    \"sets\": [\n                      {}\n                    ]\n                  }\n                }\n              ],\n              \"identities\": [\n                {}\n              ],\n              \"imAddresses\": [\n                null\n              ],\n              \"inferenceClassification\": {\n                \"overrides\": [\n                  {\n                    \"senderEmailAddress\": {}\n                  }\n                ]\n              },\n              \"infoCatalogs\": [\n                null\n              ],\n              \"informationProtection\": {},\n              \"insights\": {\n                \"shared\": [\n                  {\n                    \"lastShared\": {\n                      \"sharedBy\": {},\n                      \"sharingReference\": {}\n                    },\n                    \"lastSharedMethod\": {},\n                    \"resource\": {},\n                    \"resourceReference\": {},\n                    \"resourceVisualization\": {},\n                    \"sharingHistory\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"trending\": [\n                  {\n                    \"resource\": {},\n                    \"resourceReference\": {},\n                    \"resourceVisualization\": {}\n                  }\n                ],\n                \"used\": [\n                  {\n                    \"lastUsed\": {},\n                    \"resource\": {},\n                    \"resourceReference\": {},\n                    \"resourceVisualization\": {}\n                  }\n                ]\n              },\n              \"interests\": [\n                null\n              ],\n              \"joinedGroups\": [\n                {}\n              ],\n              \"joinedTeams\": [\n                {\n                  \"allChannels\": [\n                    {\n                      \"filesFolder\": {},\n                      \"members\": [\n                        {}\n                      ],\n                      \"messages\": [\n                        {}\n                      ],\n                      \"moderationSettings\": {},\n                      \"sharedWithTeams\": [\n                        {\n                          \"team\": {},\n                          \"allowedMembers\": [\n                            {}\n                          ]\n                        }\n                      ],\n                      \"summary\": {},\n                      \"tabs\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"channels\": [\n                    {}\n                  ],\n                  \"discoverySettings\": {},\n                  \"funSettings\": {},\n                  \"group\": {},\n                  \"guestSettings\": {},\n                  \"incomingChannels\": [\n                    {}\n                  ],\n                  \"installedApps\": [\n                    {}\n                  ],\n                  \"memberSettings\": {},\n                  \"members\": [\n                    {}\n                  ],\n                  \"messagingSettings\": {},\n                  \"operations\": [\n                    {}\n                  ],\n                  \"owners\": [\n                    {}\n                  ],\n                  \"permissionGrants\": [\n                    {}\n                  ],\n                  \"photo\": {},\n                  \"primaryChannel\": {},\n                  \"schedule\": {\n                    \"offerShiftRequests\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.offerShiftRequest\",\n                        \"createdBy\": {},\n                        \"lastModifiedBy\": {}\n                      }\n                    ],\n                    \"openShiftChangeRequests\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.openShiftChangeRequest\"\n                      }\n                    ],\n                    \"openShifts\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.openShift\",\n                        \"draftOpenShift\": {\n                          \"@odata.type\": \"#microsoft.graph.openShiftItem\",\n                          \"activities\": [\n                            {\n                              \"theme\": {}\n                            }\n                          ]\n                        },\n                        \"sharedOpenShift\": {}\n                      }\n                    ],\n                    \"provisionStatus\": {},\n                    \"schedulingGroups\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.schedulingGroup\",\n                        \"userIds\": [\n                          null\n                        ]\n                      }\n                    ],\n                    \"shifts\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.shift\",\n                        \"draftShift\": {},\n                        \"sharedShift\": {}\n                      }\n                    ],\n                    \"swapShiftsChangeRequests\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.swapShiftsChangeRequest\"\n                      }\n                    ],\n                    \"timeCards\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.timeCard\",\n                        \"breaks\": [\n                          {\n                            \"end\": {\n                              \"notes\": {}\n                            },\n                            \"notes\": {},\n                            \"start\": {}\n                          }\n                        ],\n                        \"clockInEvent\": {},\n                        \"clockOutEvent\": {},\n                        \"notes\": {},\n                        \"originalEntry\": {\n                          \"breaks\": [\n                            {}\n                          ],\n                          \"clockInEvent\": {},\n                          \"clockOutEvent\": {}\n                        }\n                      }\n                    ],\n                    \"timeClockSettings\": {\n                      \"approvedLocation\": {}\n                    },\n                    \"timeOffReasons\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.timeOffReason\"\n                      }\n                    ],\n                    \"timeOffRequests\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.timeOffRequest\"\n                      }\n                    ],\n                    \"timesOff\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.timeOff\",\n                        \"draftTimeOff\": {},\n                        \"sharedTimeOff\": {}\n                      }\n                    ],\n                    \"workforceIntegrationIds\": [\n                      null\n                    ]\n                  },\n                  \"summary\": {},\n                  \"tags\": [\n                    {\n                      \"members\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"template\": {},\n                  \"templateDefinition\": {\n                    \"categories\": [\n                      null\n                    ],\n                    \"lastModifiedBy\": {},\n                    \"teamDefinition\": {}\n                  }\n                }\n              ],\n              \"licenseAssignmentStates\": [\n                {\n                  \"disabledPlans\": [\n                    null\n                  ]\n                }\n              ],\n              \"licenseDetails\": [\n                {}\n              ],\n              \"mailFolders\": [\n                {\n                  \"childFolders\": [\n                    {}\n                  ],\n                  \"messageRules\": [\n                    {\n                      \"actions\": {\n                        \"assignCategories\": [\n                          null\n                        ],\n                        \"forwardAsAttachmentTo\": [\n                          {}\n                        ],\n                        \"forwardTo\": [\n                          {}\n                        ],\n                        \"markImportance\": {},\n                        \"redirectTo\": [\n                          {}\n                        ]\n                      },\n                      \"conditions\": {\n                        \"bodyContains\": [\n                          null\n                        ],\n                        \"bodyOrSubjectContains\": [\n                          null\n                        ],\n                        \"categories\": [\n                          null\n                        ],\n                        \"fromAddresses\": [\n                          {}\n                        ],\n                        \"headerContains\": [\n                          null\n                        ],\n                        \"importance\": {},\n                        \"recipientContains\": [\n                          null\n                        ],\n                        \"senderContains\": [\n                          null\n                        ],\n                        \"sensitivity\": {},\n                        \"sentToAddresses\": [\n                          {}\n                        ],\n                        \"subjectContains\": [\n                          null\n                        ],\n                        \"withinSizeRange\": {}\n                      },\n                      \"exceptions\": {}\n                    }\n                  ],\n                  \"messages\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.message\",\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"bccRecipients\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"ccRecipients\": [\n                        {}\n                      ],\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"flag\": {},\n                      \"from\": {},\n                      \"importance\": {},\n                      \"inferenceClassification\": {},\n                      \"internetMessageHeaders\": [\n                        {}\n                      ],\n                      \"mentions\": [\n                        {}\n                      ],\n                      \"mentionsPreview\": {},\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"replyTo\": [\n                        {}\n                      ],\n                      \"sender\": {},\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"toRecipients\": [\n                        {}\n                      ],\n                      \"uniqueBody\": {},\n                      \"unsubscribeData\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"multiValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"singleValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"userConfigurations\": [\n                    {}\n                  ]\n                }\n              ],\n              \"mailboxSettings\": {\n                \"automaticRepliesSetting\": {\n                  \"scheduledEndDateTime\": {},\n                  \"scheduledStartDateTime\": {}\n                },\n                \"language\": {},\n                \"workingHours\": {\n                  \"daysOfWeek\": [\n                    {}\n                  ],\n                  \"timeZone\": {}\n                }\n              },\n              \"managedAppRegistrations\": [\n                {\n                  \"appIdentifier\": {},\n                  \"appliedPolicies\": [\n                    {\n                      \"roleScopeTagIds\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"flaggedReasons\": [\n                    null\n                  ],\n                  \"intendedPolicies\": [\n                    {}\n                  ],\n                  \"operations\": [\n                    {}\n                  ]\n                }\n              ],\n              \"managedDevices\": [\n                {\n                  \"assignmentFilterEvaluationStatusDetails\": [\n                    {}\n                  ],\n                  \"chromeOSDeviceInfo\": [\n                    {}\n                  ],\n                  \"cloudPcRemoteActionResults\": [\n                    {}\n                  ],\n                  \"configurationManagerClientEnabledFeatures\": {},\n                  \"configurationManagerClientHealthState\": {},\n                  \"configurationManagerClientInformation\": {},\n                  \"detectedApps\": [\n                    {\n                      \"managedDevices\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"deviceActionResults\": [\n                    {\n                      \"actionState\": {}\n                    }\n                  ],\n                  \"deviceCategory\": {\n                    \"roleScopeTagIds\": [\n                      null\n                    ]\n                  },\n                  \"deviceCompliancePolicyStates\": [\n                    {\n                      \"settingStates\": [\n                        {\n                          \"sources\": [\n                            {}\n                          ]\n                        }\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"deviceConfigurationStates\": [\n                    {\n                      \"platformType\": {},\n                      \"settingStates\": [\n                        {\n                          \"sources\": [\n                            {}\n                          ],\n                          \"state\": {}\n                        }\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"deviceHealthAttestationState\": {},\n                  \"deviceHealthScriptStates\": [\n                    {\n                      \"assignmentFilterIds\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"hardwareInformation\": {\n                    \"sharedDeviceCachedUsers\": [\n                      {}\n                    ],\n                    \"wiredIPv4Addresses\": [\n                      null\n                    ]\n                  },\n                  \"logCollectionRequests\": [\n                    {}\n                  ],\n                  \"managedDeviceMobileAppConfigurationStates\": [\n                    {\n                      \"platformType\": {},\n                      \"settingStates\": [\n                        {\n                          \"sources\": [\n                            {}\n                          ],\n                          \"state\": {}\n                        }\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"roleScopeTagIds\": [\n                    null\n                  ],\n                  \"securityBaselineStates\": [\n                    {\n                      \"settingStates\": [\n                        {\n                          \"contributingPolicies\": [\n                            {}\n                          ],\n                          \"sourcePolicies\": [\n                            {}\n                          ]\n                        }\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"users\": [\n                    {}\n                  ],\n                  \"usersLoggedOn\": [\n                    {}\n                  ],\n                  \"windowsProtectionState\": {\n                    \"detectedMalwareState\": [\n                      {}\n                    ]\n                  }\n                }\n              ],\n              \"manager\": {},\n              \"memberOf\": [\n                {}\n              ],\n              \"messages\": [\n                {}\n              ],\n              \"mobileAppIntentAndStates\": [\n                {\n                  \"mobileAppList\": [\n                    {\n                      \"supportedDeviceTypes\": [\n                        {\n                          \"type\": {}\n                        }\n                      ]\n                    }\n                  ]\n                }\n              ],\n              \"mobileAppTroubleshootingEvents\": [\n                {\n                  \"appLogCollectionRequests\": [\n                    {\n                      \"customLogFolders\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"history\": [\n                    {\n                      \"troubleshootingErrorDetails\": {}\n                    }\n                  ]\n                }\n              ],\n              \"notifications\": [\n                {\n                  \"payload\": {\n                    \"visualContent\": {}\n                  },\n                  \"targetPolicy\": {\n                    \"platformTypes\": [\n                      null\n                    ]\n                  }\n                }\n              ],\n              \"oauth2PermissionGrants\": [\n                {}\n              ],\n              \"onPremisesExtensionAttributes\": {},\n              \"onPremisesProvisioningErrors\": [\n                {}\n              ],\n              \"onenote\": {},\n              \"onlineMeetings\": [\n                {\n                  \"anonymizeIdentityForRoles\": [\n                    null\n                  ],\n                  \"attendanceReports\": [\n                    {\n                      \"attendanceRecords\": [\n                        {\n                          \"attendanceIntervals\": [\n                            {}\n                          ],\n                          \"identity\": {}\n                        }\n                      ]\n                    }\n                  ],\n                  \"audioConferencing\": {\n                    \"tollFreeNumbers\": [\n                      null\n                    ],\n                    \"tollNumbers\": [\n                      null\n                    ]\n                  },\n                  \"broadcastSettings\": {\n                    \"captions\": {\n                      \"translationLanguages\": [\n                        null\n                      ]\n                    }\n                  },\n                  \"capabilities\": [\n                    null\n                  ],\n                  \"chatInfo\": {},\n                  \"joinInformation\": {},\n                  \"joinMeetingIdSettings\": {},\n                  \"lobbyBypassSettings\": {},\n                  \"meetingAttendanceReport\": {},\n                  \"participants\": {\n                    \"attendees\": [\n                      {\n                        \"identity\": {},\n                        \"role\": {}\n                      }\n                    ],\n                    \"contributors\": [\n                      {}\n                    ],\n                    \"organizer\": {},\n                    \"producers\": [\n                      {}\n                    ]\n                  },\n                  \"registration\": {\n                    \"@odata.type\": \"#microsoft.graph.meetingRegistration\",\n                    \"registrants\": [\n                      {}\n                    ],\n                    \"customQuestions\": [\n                      {\n                        \"answerOptions\": [\n                          null\n                        ]\n                      }\n                    ],\n                    \"speakers\": [\n                      {}\n                    ]\n                  },\n                  \"transcripts\": [\n                    {}\n                  ],\n                  \"virtualAppointment\": {\n                    \"appointmentClients\": [\n                      {}\n                    ],\n                    \"settings\": {}\n                  },\n                  \"watermarkProtection\": {}\n                }\n              ],\n              \"otherMails\": [\n                null\n              ],\n              \"outlook\": {\n                \"masterCategories\": [\n                  {}\n                ],\n                \"taskFolders\": [\n                  {\n                    \"multiValueExtendedProperties\": [\n                      {}\n                    ],\n                    \"singleValueExtendedProperties\": [\n                      {}\n                    ],\n                    \"tasks\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.outlookTask\",\n                        \"attachments\": [\n                          {}\n                        ],\n                        \"body\": {},\n                        \"completedDateTime\": {},\n                        \"dueDateTime\": {},\n                        \"importance\": {},\n                        \"multiValueExtendedProperties\": [\n                          {}\n                        ],\n                        \"recurrence\": {},\n                        \"reminderDateTime\": {},\n                        \"sensitivity\": {},\n                        \"singleValueExtendedProperties\": [\n                          {}\n                        ],\n                        \"startDateTime\": {}\n                      }\n                    ]\n                  }\n                ],\n                \"taskGroups\": [\n                  {\n                    \"taskFolders\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              },\n              \"ownedDevices\": [\n                {}\n              ],\n              \"ownedObjects\": [\n                {}\n              ],\n              \"passwordProfile\": {},\n              \"pastProjects\": [\n                null\n              ],\n              \"pendingAccessReviewInstances\": [\n                {\n                  \"contactedReviewers\": [\n                    {}\n                  ],\n                  \"decisions\": [\n                    {\n                      \"appliedBy\": {\n                        \"@odata.type\": \"#microsoft.graph.userIdentity\"\n                      },\n                      \"insights\": [\n                        {}\n                      ],\n                      \"instance\": {},\n                      \"principal\": {},\n                      \"principalResourceMembership\": {},\n                      \"resource\": {},\n                      \"reviewedBy\": {},\n                      \"target\": {}\n                    }\n                  ],\n                  \"definition\": {\n                    \"additionalNotificationRecipients\": [\n                      {\n                        \"notificationRecipientScope\": {}\n                      }\n                    ],\n                    \"backupReviewers\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.accessReviewReviewerScope\"\n                      }\n                    ],\n                    \"createdBy\": {},\n                    \"fallbackReviewers\": [\n                      {}\n                    ],\n                    \"instanceEnumerationScope\": {},\n                    \"instances\": [\n                      {}\n                    ],\n                    \"reviewers\": [\n                      {}\n                    ],\n                    \"scope\": {},\n                    \"settings\": {\n                      \"applyActions\": [\n                        {}\n                      ],\n                      \"recommendationInsightSettings\": [\n                        {}\n                      ],\n                      \"recurrence\": {}\n                    },\n                    \"stageSettings\": [\n                      {\n                        \"decisionsThatWillMoveToNextStage\": [\n                          null\n                        ],\n                        \"dependsOn\": [\n                          null\n                        ],\n                        \"fallbackReviewers\": [\n                          {}\n                        ],\n                        \"recommendationInsightSettings\": [\n                          {}\n                        ],\n                        \"reviewers\": [\n                          {}\n                        ]\n                      }\n                    ]\n                  },\n                  \"errors\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.accessReviewError\"\n                    }\n                  ],\n                  \"fallbackReviewers\": [\n                    {}\n                  ],\n                  \"reviewers\": [\n                    {}\n                  ],\n                  \"scope\": {},\n                  \"stages\": [\n                    {\n                      \"decisions\": [\n                        {}\n                      ],\n                      \"fallbackReviewers\": [\n                        {}\n                      ],\n                      \"reviewers\": [\n                        {}\n                      ]\n                    }\n                  ]\n                }\n              ],\n              \"people\": [\n                {\n                  \"emailAddresses\": [\n                    {}\n                  ],\n                  \"phones\": [\n                    {}\n                  ],\n                  \"postalAddresses\": [\n                    {}\n                  ],\n                  \"sources\": [\n                    {}\n                  ],\n                  \"websites\": [\n                    {}\n                  ]\n                }\n              ],\n              \"photo\": {},\n              \"photos\": [\n                {}\n              ],\n              \"planner\": {\n                \"all\": [\n                  {}\n                ],\n                \"favoritePlanReferences\": {},\n                \"favoritePlans\": [\n                  {\n                    \"buckets\": [\n                      {\n                        \"creationSource\": {},\n                        \"tasks\": [\n                          {\n                            \"appliedCategories\": {},\n                            \"assignedToTaskBoardFormat\": {\n                              \"orderHintsByAssignee\": {}\n                            },\n                            \"assignments\": {},\n                            \"bucketTaskBoardFormat\": {},\n                            \"completedBy\": {},\n                            \"createdBy\": {},\n                            \"creationSource\": {\n                              \"creationSourceKind\": {},\n                              \"teamsPublicationInfo\": {\n                                \"@odata.type\": \"#microsoft.graph.plannerTeamsPublicationInfo\"\n                              }\n                            },\n                            \"details\": {\n                              \"checklist\": {},\n                              \"notes\": {},\n                              \"references\": {}\n                            },\n                            \"previewType\": {},\n                            \"progressTaskBoardFormat\": {},\n                            \"recurrence\": {\n                              \"schedule\": {\n                                \"pattern\": {}\n                              }\n                            }\n                          }\n                        ]\n                      }\n                    ],\n                    \"container\": {},\n                    \"contexts\": {},\n                    \"createdBy\": {},\n                    \"creationSource\": {\n                      \"creationSourceKind\": {}\n                    },\n                    \"details\": {\n                      \"categoryDescriptions\": {},\n                      \"contextDetails\": {},\n                      \"sharedWith\": {}\n                    },\n                    \"sharedWithContainers\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.plannerSharedWithContainer\"\n                      }\n                    ],\n                    \"tasks\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"plans\": [\n                  {}\n                ],\n                \"recentPlanReferences\": {},\n                \"recentPlans\": [\n                  {}\n                ],\n                \"rosterPlans\": [\n                  {}\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              },\n              \"presence\": {\n                \"outOfOfficeSettings\": {},\n                \"statusMessage\": {\n                  \"expiryDateTime\": {},\n                  \"message\": {}\n                }\n              },\n              \"print\": {\n                \"recentPrinterShares\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.printerShare\",\n                    \"capabilities\": {\n                      \"bottomMargins\": [\n                        null\n                      ],\n                      \"colorModes\": [\n                        null\n                      ],\n                      \"contentTypes\": [\n                        null\n                      ],\n                      \"copiesPerJob\": {},\n                      \"dpis\": [\n                        null\n                      ],\n                      \"duplexModes\": [\n                        null\n                      ],\n                      \"feedDirections\": [\n                        null\n                      ],\n                      \"feedOrientations\": [\n                        null\n                      ],\n                      \"finishings\": [\n                        null\n                      ],\n                      \"inputBins\": [\n                        null\n                      ],\n                      \"leftMargins\": [\n                        null\n                      ],\n                      \"mediaColors\": [\n                        null\n                      ],\n                      \"mediaSizes\": [\n                        null\n                      ],\n                      \"mediaTypes\": [\n                        null\n                      ],\n                      \"multipageLayouts\": [\n                        null\n                      ],\n                      \"orientations\": [\n                        null\n                      ],\n                      \"outputBins\": [\n                        null\n                      ],\n                      \"pagesPerSheet\": [\n                        null\n                      ],\n                      \"qualities\": [\n                        null\n                      ],\n                      \"rightMargins\": [\n                        null\n                      ],\n                      \"scalings\": [\n                        null\n                      ],\n                      \"supportedColorConfigurations\": [\n                        null\n                      ],\n                      \"supportedCopiesPerJob\": {},\n                      \"supportedDocumentMimeTypes\": [\n                        null\n                      ],\n                      \"supportedDuplexConfigurations\": [\n                        null\n                      ],\n                      \"supportedFinishings\": [\n                        {}\n                      ],\n                      \"supportedMediaColors\": [\n                        null\n                      ],\n                      \"supportedMediaSizes\": [\n                        null\n                      ],\n                      \"supportedMediaTypes\": [\n                        null\n                      ],\n                      \"supportedOrientations\": [\n                        {}\n                      ],\n                      \"supportedOutputBins\": [\n                        null\n                      ],\n                      \"supportedPagesPerSheet\": {},\n                      \"supportedPresentationDirections\": [\n                        null\n                      ],\n                      \"supportedPrintQualities\": [\n                        {}\n                      ],\n                      \"topMargins\": [\n                        null\n                      ]\n                    },\n                    \"defaults\": {\n                      \"colorMode\": {},\n                      \"duplexConfiguration\": {},\n                      \"duplexMode\": {},\n                      \"finishings\": [\n                        {}\n                      ],\n                      \"multipageLayout\": {},\n                      \"orientation\": {},\n                      \"presentationDirection\": {},\n                      \"printColorConfiguration\": {},\n                      \"printQuality\": {},\n                      \"quality\": {},\n                      \"scaling\": {}\n                    },\n                    \"jobs\": [\n                      {\n                        \"configuration\": {\n                          \"colorMode\": {},\n                          \"duplexMode\": {},\n                          \"feedOrientation\": {},\n                          \"finishings\": [\n                            {}\n                          ],\n                          \"margin\": {},\n                          \"multipageLayout\": {},\n                          \"orientation\": {},\n                          \"pageRanges\": [\n                            {}\n                          ],\n                          \"quality\": {},\n                          \"scaling\": {}\n                        },\n                        \"createdBy\": {},\n                        \"documents\": [\n                          {\n                            \"configuration\": {\n                              \"colorMode\": {},\n                              \"duplexMode\": {},\n                              \"feedDirection\": {},\n                              \"feedOrientation\": {},\n                              \"finishings\": [\n                                {}\n                              ],\n                              \"margin\": {},\n                              \"multipageLayout\": {},\n                              \"orientation\": {},\n                              \"pageRanges\": [\n                                {}\n                              ],\n                              \"quality\": {},\n                              \"scaling\": {}\n                            }\n                          }\n                        ],\n                        \"status\": {\n                          \"details\": [\n                            null\n                          ],\n                          \"state\": {}\n                        },\n                        \"tasks\": [\n                          {\n                            \"definition\": {\n                              \"createdBy\": {},\n                              \"tasks\": [\n                                {}\n                              ]\n                            },\n                            \"status\": {},\n                            \"trigger\": {\n                              \"definition\": {}\n                            }\n                          }\n                        ]\n                      }\n                    ],\n                    \"location\": {\n                      \"organization\": [\n                        null\n                      ],\n                      \"subdivision\": [\n                        null\n                      ],\n                      \"subunit\": [\n                        null\n                      ]\n                    },\n                    \"status\": {\n                      \"details\": [\n                        null\n                      ],\n                      \"processingStateReasons\": [\n                        null\n                      ],\n                      \"state\": {}\n                    },\n                    \"allowedGroups\": [\n                      {}\n                    ],\n                    \"allowedUsers\": [\n                      {}\n                    ],\n                    \"printer\": {\n                      \"@odata.type\": \"#microsoft.graph.printer\",\n                      \"connectors\": [\n                        {\n                          \"deviceHealth\": {},\n                          \"location\": {}\n                        }\n                      ],\n                      \"share\": {},\n                      \"shares\": [\n                        {}\n                      ],\n                      \"taskTriggers\": [\n                        {}\n                      ]\n                    },\n                    \"viewPoint\": {}\n                  }\n                ]\n              },\n              \"profile\": {\n                \"account\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.userAccountInformation\",\n                    \"createdBy\": {},\n                    \"inference\": {},\n                    \"lastModifiedBy\": {},\n                    \"source\": {\n                      \"type\": [\n                        null\n                      ]\n                    },\n                    \"preferredLanguageTag\": {}\n                  }\n                ],\n                \"addresses\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemAddress\",\n                    \"detail\": {},\n                    \"geoCoordinates\": {}\n                  }\n                ],\n                \"anniversaries\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personAnnualEvent\"\n                  }\n                ],\n                \"awards\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personAward\"\n                  }\n                ],\n                \"certifications\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personCertification\"\n                  }\n                ],\n                \"educationalActivities\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.educationalActivity\",\n                    \"institution\": {\n                      \"location\": {}\n                    },\n                    \"program\": {\n                      \"activities\": [\n                        null\n                      ],\n                      \"awards\": [\n                        null\n                      ],\n                      \"fieldsOfStudy\": [\n                        null\n                      ]\n                    }\n                  }\n                ],\n                \"emails\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemEmail\",\n                    \"type\": {}\n                  }\n                ],\n                \"interests\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personInterest\",\n                    \"categories\": [\n                      null\n                    ],\n                    \"collaborationTags\": [\n                      null\n                    ]\n                  }\n                ],\n                \"languages\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.languageProficiency\",\n                    \"reading\": {},\n                    \"spoken\": {},\n                    \"written\": {}\n                  }\n                ],\n                \"names\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personName\",\n                    \"pronunciation\": {}\n                  }\n                ],\n                \"notes\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personAnnotation\",\n                    \"detail\": {}\n                  }\n                ],\n                \"patents\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemPatent\"\n                  }\n                ],\n                \"phones\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemPhone\",\n                    \"type\": {}\n                  }\n                ],\n                \"positions\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.workPosition\",\n                    \"categories\": [\n                      null\n                    ],\n                    \"colleagues\": [\n                      {}\n                    ],\n                    \"detail\": {\n                      \"company\": {\n                        \"address\": {}\n                      }\n                    },\n                    \"manager\": {}\n                  }\n                ],\n                \"projects\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.projectParticipation\",\n                    \"categories\": [\n                      null\n                    ],\n                    \"client\": {},\n                    \"collaborationTags\": [\n                      null\n                    ],\n                    \"colleagues\": [\n                      {}\n                    ],\n                    \"detail\": {},\n                    \"sponsors\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"publications\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemPublication\"\n                  }\n                ],\n                \"skills\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.skillProficiency\",\n                    \"categories\": [\n                      null\n                    ],\n                    \"collaborationTags\": [\n                      null\n                    ]\n                  }\n                ],\n                \"webAccounts\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.webAccount\",\n                    \"service\": {}\n                  }\n                ],\n                \"websites\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personWebsite\",\n                    \"categories\": [\n                      null\n                    ]\n                  }\n                ]\n              },\n              \"provisionedPlans\": [\n                {}\n              ],\n              \"proxyAddresses\": [\n                null\n              ],\n              \"registeredDevices\": [\n                {}\n              ],\n              \"responsibilities\": [\n                null\n              ],\n              \"schools\": [\n                null\n              ],\n              \"scopedRoleMemberOf\": [\n                {}\n              ],\n              \"security\": {\n                \"informationProtection\": {\n                  \"labelPolicySettings\": {},\n                  \"sensitivityLabels\": [\n                    {\n                      \"contentFormats\": [\n                        null\n                      ],\n                      \"parent\": {}\n                    }\n                  ]\n                }\n              },\n              \"settings\": {\n                \"contactMergeSuggestions\": {},\n                \"itemInsights\": {},\n                \"regionalAndLanguageSettings\": {\n                  \"authoringLanguages\": [\n                    {}\n                  ],\n                  \"defaultDisplayLanguage\": {},\n                  \"defaultRegionalFormat\": {},\n                  \"defaultSpeechInputLanguage\": {},\n                  \"defaultTranslationLanguage\": {},\n                  \"regionalFormatOverrides\": {},\n                  \"translationPreferences\": {\n                    \"languageOverrides\": [\n                      {}\n                    ],\n                    \"translationBehavior\": {},\n                    \"untranslatedLanguages\": [\n                      null\n                    ]\n                  }\n                },\n                \"shiftPreferences\": {\n                  \"@odata.type\": \"#microsoft.graph.shiftPreferences\",\n                  \"availability\": [\n                    {\n                      \"recurrence\": {},\n                      \"timeSlots\": [\n                        {}\n                      ]\n                    }\n                  ]\n                }\n              },\n              \"signInActivity\": {},\n              \"skills\": [\n                null\n              ],\n              \"teamwork\": {\n                \"associatedTeams\": [\n                  {}\n                ],\n                \"installedApps\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.userScopeTeamsAppInstallation\",\n                    \"chat\": {}\n                  }\n                ]\n              },\n              \"todo\": {\n                \"lists\": [\n                  {\n                    \"extensions\": [\n                      {}\n                    ],\n                    \"tasks\": [\n                      {\n                        \"attachmentSessions\": [\n                          {\n                            \"nextExpectedRanges\": [\n                              null\n                            ]\n                          }\n                        ],\n                        \"attachments\": [\n                          {}\n                        ],\n                        \"body\": {},\n                        \"categories\": [\n                          null\n                        ],\n                        \"checklistItems\": [\n                          {}\n                        ],\n                        \"completedDateTime\": {},\n                        \"dueDateTime\": {},\n                        \"extensions\": [\n                          {}\n                        ],\n                        \"importance\": {},\n                        \"linkedResources\": [\n                          {}\n                        ],\n                        \"recurrence\": {},\n                        \"reminderDateTime\": {},\n                        \"startDateTime\": {},\n                        \"status\": {}\n                      }\n                    ]\n                  }\n                ]\n              },\n              \"transitiveMemberOf\": [\n                {}\n              ],\n              \"transitiveReports\": [\n                {}\n              ],\n              \"usageRights\": [\n                {}\n              ],\n              \"windowsInformationProtectionDeviceRegistrations\": [\n                {}\n              ]\n            },\n            \"lastModifiedBy\": {},\n            \"lastModifiedByUser\": {},\n            \"parentReference\": {},\n            \"activities\": [\n              {}\n            ],\n            \"bundles\": [\n              {}\n            ],\n            \"following\": [\n              {}\n            ],\n            \"items\": [\n              {}\n            ],\n            \"list\": {},\n            \"owner\": {},\n            \"quota\": {\n              \"storagePlanInformation\": {}\n            },\n            \"root\": {},\n            \"sharePointIds\": {},\n            \"special\": [\n              {}\n            ],\n            \"system\": {}\n          },\n          \"drives\": [\n            {}\n          ],\n          \"endpoints\": [\n            {}\n          ],\n          \"events\": [\n            {}\n          ],\n          \"extensions\": [\n            {}\n          ],\n          \"groupLifecyclePolicies\": [\n            {}\n          ],\n          \"groupTypes\": [\n            null\n          ],\n          \"infoCatalogs\": [\n            null\n          ],\n          \"licenseProcessingState\": {},\n          \"memberOf\": [\n            {}\n          ],\n          \"members\": [\n            {}\n          ],\n          \"membersWithLicenseErrors\": [\n            {}\n          ],\n          \"membershipRuleProcessingStatus\": {},\n          \"onPremisesProvisioningErrors\": [\n            {}\n          ],\n          \"onenote\": {},\n          \"owners\": [\n            {}\n          ],\n          \"permissionGrants\": [\n            {}\n          ],\n          \"photo\": {},\n          \"photos\": [\n            {}\n          ],\n          \"planner\": {\n            \"plans\": [\n              {}\n            ]\n          },\n          \"proxyAddresses\": [\n            null\n          ],\n          \"rejectedSenders\": [\n            {}\n          ],\n          \"resourceBehaviorOptions\": [\n            null\n          ],\n          \"resourceProvisioningOptions\": [\n            null\n          ],\n          \"settings\": [\n            {\n              \"values\": [\n                {}\n              ]\n            }\n          ],\n          \"sites\": [\n            {}\n          ],\n          \"team\": {},\n          \"threads\": [\n            {}\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"transitiveMembers\": [\n            {}\n          ],\n          \"writebackConfiguration\": {}\n        },\n        \"members\": [\n          {\n            \"assignedLicenses\": [\n              {}\n            ],\n            \"assignedPlans\": [\n              {}\n            ],\n            \"assignments\": [\n              {}\n            ],\n            \"businessPhones\": [\n              null\n            ],\n            \"classes\": [\n              {}\n            ],\n            \"createdBy\": {},\n            \"externalSource\": {},\n            \"mailingAddress\": {},\n            \"onPremisesInfo\": {},\n            \"passwordProfile\": {},\n            \"provisionedPlans\": [\n              {}\n            ],\n            \"relatedContacts\": [\n              {}\n            ],\n            \"residenceAddress\": {},\n            \"rubrics\": [\n              {}\n            ],\n            \"schools\": [\n              {}\n            ],\n            \"student\": {},\n            \"taughtClasses\": [\n              {}\n            ],\n            \"teacher\": {},\n            \"user\": {}\n          }\n        ],\n        \"schools\": [\n          {}\n        ],\n        \"teachers\": [\n          {}\n        ],\n        \"term\": {}\n      }\n    ],\n    \"createdBy\": {},\n    \"users\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "schools",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Update Education Root"
					]
				}
			}
		},
		{
			"displayName": "Synchronization Profiles",
			"name": "synchronizationProfiles",
			"type": "json",
			"default": "[\n  {\n    \"dataProvider\": {},\n    \"errors\": [\n      {}\n    ],\n    \"identitySynchronizationConfiguration\": {},\n    \"licensesToAssign\": [\n      {\n        \"skuIds\": [\n          null\n        ]\n      }\n    ],\n    \"profileStatus\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "synchronizationProfiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Update Education Root"
					]
				}
			}
		},
		{
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  {\n    \"assignedLicenses\": [\n      {\n        \"disabledPlans\": [\n          null\n        ]\n      }\n    ],\n    \"assignedPlans\": [\n      {}\n    ],\n    \"assignments\": [\n      {\n        \"assignTo\": {},\n        \"categories\": [\n          {}\n        ],\n        \"createdBy\": {\n          \"application\": {},\n          \"device\": {},\n          \"user\": {}\n        },\n        \"grading\": {},\n        \"instructions\": {},\n        \"lastModifiedBy\": {},\n        \"resources\": [\n          {\n            \"resource\": {\n              \"createdBy\": {},\n              \"lastModifiedBy\": {}\n            }\n          }\n        ],\n        \"rubric\": {\n          \"createdBy\": {},\n          \"description\": {},\n          \"grading\": {},\n          \"lastModifiedBy\": {},\n          \"levels\": [\n            {\n              \"description\": {},\n              \"grading\": {}\n            }\n          ],\n          \"qualities\": [\n            {\n              \"criteria\": [\n                {\n                  \"description\": {}\n                }\n              ],\n              \"description\": {}\n            }\n          ]\n        },\n        \"submissions\": [\n          {\n            \"outcomes\": [\n              {\n                \"lastModifiedBy\": {}\n              }\n            ],\n            \"reassignedBy\": {},\n            \"recipient\": {},\n            \"resources\": [\n              {\n                \"resource\": {}\n              }\n            ],\n            \"returnedBy\": {},\n            \"submittedBy\": {},\n            \"submittedResources\": [\n              {}\n            ],\n            \"unsubmittedBy\": {}\n          }\n        ]\n      }\n    ],\n    \"businessPhones\": [\n      null\n    ],\n    \"classes\": [\n      {\n        \"assignmentCategories\": [\n          {}\n        ],\n        \"assignmentDefaults\": {\n          \"addToCalendarAction\": {},\n          \"addedStudentAction\": {}\n        },\n        \"assignmentSettings\": {},\n        \"assignments\": [\n          {}\n        ],\n        \"course\": {},\n        \"createdBy\": {},\n        \"group\": {\n          \"@odata.type\": \"#microsoft.graph.group\",\n          \"acceptedSenders\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"assignedLabels\": [\n            {}\n          ],\n          \"assignedLicenses\": [\n            {}\n          ],\n          \"calendar\": {\n            \"allowedOnlineMeetingProviders\": [\n              null\n            ],\n            \"calendarPermissions\": [\n              {\n                \"allowedRoles\": [\n                  null\n                ],\n                \"emailAddress\": {},\n                \"role\": {}\n              }\n            ],\n            \"calendarView\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.event\",\n                \"categories\": [\n                  null\n                ],\n                \"attachments\": [\n                  {}\n                ],\n                \"attendees\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.attendee\",\n                    \"emailAddress\": {},\n                    \"proposedNewTime\": {\n                      \"end\": {},\n                      \"start\": {}\n                    },\n                    \"status\": {}\n                  }\n                ],\n                \"body\": {\n                  \"contentType\": {}\n                },\n                \"calendar\": {},\n                \"cancelledOccurrences\": [\n                  null\n                ],\n                \"end\": {},\n                \"exceptionOccurrences\": [\n                  {}\n                ],\n                \"extensions\": [\n                  {}\n                ],\n                \"instances\": [\n                  {}\n                ],\n                \"location\": {\n                  \"address\": {},\n                  \"coordinates\": {}\n                },\n                \"locations\": [\n                  {}\n                ],\n                \"multiValueExtendedProperties\": [\n                  {\n                    \"value\": [\n                      null\n                    ]\n                  }\n                ],\n                \"onlineMeeting\": {\n                  \"phones\": [\n                    {}\n                  ],\n                  \"tollFreeNumbers\": [\n                    null\n                  ]\n                },\n                \"onlineMeetingProvider\": {},\n                \"organizer\": {},\n                \"recurrence\": {\n                  \"pattern\": {\n                    \"daysOfWeek\": [\n                      null\n                    ],\n                    \"firstDayOfWeek\": {}\n                  },\n                  \"range\": {}\n                },\n                \"responseStatus\": {},\n                \"singleValueExtendedProperties\": [\n                  {}\n                ],\n                \"start\": {}\n              }\n            ],\n            \"defaultOnlineMeetingProvider\": {},\n            \"events\": [\n              {}\n            ],\n            \"multiValueExtendedProperties\": [\n              {}\n            ],\n            \"owner\": {},\n            \"singleValueExtendedProperties\": [\n              {}\n            ]\n          },\n          \"calendarView\": [\n            {}\n          ],\n          \"conversations\": [\n            {\n              \"threads\": [\n                {\n                  \"ccRecipients\": [\n                    {}\n                  ],\n                  \"posts\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.post\",\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"from\": {},\n                      \"importance\": {},\n                      \"inReplyTo\": {},\n                      \"mentions\": [\n                        {\n                          \"createdBy\": {},\n                          \"mentioned\": {}\n                        }\n                      ],\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"newParticipants\": [\n                        {}\n                      ],\n                      \"sender\": {},\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"toRecipients\": [\n                    {}\n                  ],\n                  \"uniqueSenders\": [\n                    null\n                  ]\n                }\n              ],\n              \"uniqueSenders\": [\n                null\n              ]\n            }\n          ],\n          \"createdOnBehalfOf\": {},\n          \"drive\": {\n            \"@odata.type\": \"#microsoft.graph.drive\",\n            \"createdBy\": {},\n            \"createdByUser\": {\n              \"@odata.type\": \"#microsoft.graph.user\",\n              \"activities\": [\n                {\n                  \"contentInfo\": {},\n                  \"historyItems\": [\n                    {\n                      \"activity\": {}\n                    }\n                  ],\n                  \"status\": {},\n                  \"visualElements\": {\n                    \"attribution\": {},\n                    \"content\": {}\n                  }\n                }\n              ],\n              \"agreementAcceptances\": [\n                {}\n              ],\n              \"analytics\": {\n                \"activityStatistics\": [\n                  {}\n                ],\n                \"settings\": {}\n              },\n              \"appConsentRequestsForApproval\": [\n                {\n                  \"pendingScopes\": [\n                    {}\n                  ],\n                  \"userConsentRequests\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.userConsentRequest\",\n                      \"createdBy\": {},\n                      \"approval\": {\n                        \"steps\": [\n                          {\n                            \"reviewedBy\": {}\n                          }\n                        ]\n                      }\n                    }\n                  ]\n                }\n              ],\n              \"appRoleAssignedResources\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.servicePrincipal\",\n                  \"addIns\": [\n                    {\n                      \"properties\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"alternativeNames\": [\n                    null\n                  ],\n                  \"appManagementPolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.appManagementPolicy\",\n                      \"appliesTo\": [\n                        {}\n                      ],\n                      \"restrictions\": {\n                        \"keyCredentials\": [\n                          {}\n                        ],\n                        \"passwordCredentials\": [\n                          {}\n                        ]\n                      }\n                    }\n                  ],\n                  \"appRoleAssignedTo\": [\n                    {}\n                  ],\n                  \"appRoleAssignments\": [\n                    {}\n                  ],\n                  \"appRoles\": [\n                    {\n                      \"allowedMemberTypes\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"claimsMappingPolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.claimsMappingPolicy\",\n                      \"appliesTo\": [\n                        {}\n                      ],\n                      \"definition\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"createdObjects\": [\n                    {}\n                  ],\n                  \"customSecurityAttributes\": {},\n                  \"delegatedPermissionClassifications\": [\n                    {}\n                  ],\n                  \"endpoints\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.endpoint\"\n                    }\n                  ],\n                  \"federatedIdentityCredentials\": [\n                    {\n                      \"audiences\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"homeRealmDiscoveryPolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.homeRealmDiscoveryPolicy\"\n                    }\n                  ],\n                  \"info\": {},\n                  \"keyCredentials\": [\n                    {}\n                  ],\n                  \"licenseDetails\": [\n                    {\n                      \"servicePlans\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"memberOf\": [\n                    {}\n                  ],\n                  \"notificationEmailAddresses\": [\n                    null\n                  ],\n                  \"oauth2PermissionGrants\": [\n                    {}\n                  ],\n                  \"ownedObjects\": [\n                    {}\n                  ],\n                  \"owners\": [\n                    {}\n                  ],\n                  \"passwordCredentials\": [\n                    {}\n                  ],\n                  \"passwordSingleSignOnSettings\": {\n                    \"fields\": [\n                      {}\n                    ]\n                  },\n                  \"publishedPermissionScopes\": [\n                    {}\n                  ],\n                  \"replyUrls\": [\n                    null\n                  ],\n                  \"samlSingleSignOnSettings\": {},\n                  \"servicePrincipalNames\": [\n                    null\n                  ],\n                  \"synchronization\": {\n                    \"jobs\": [\n                      {\n                        \"schedule\": {},\n                        \"schema\": {\n                          \"directories\": [\n                            {\n                              \"objects\": [\n                                {\n                                  \"attributes\": [\n                                    {\n                                      \"apiExpressions\": [\n                                        {}\n                                      ],\n                                      \"metadata\": [\n                                        {}\n                                      ],\n                                      \"referencedObjects\": [\n                                        {}\n                                      ]\n                                    }\n                                  ],\n                                  \"metadata\": [\n                                    {}\n                                  ],\n                                  \"supportedApis\": [\n                                    null\n                                  ]\n                                }\n                              ]\n                            }\n                          ],\n                          \"synchronizationRules\": [\n                            {\n                              \"metadata\": [\n                                {}\n                              ],\n                              \"objectMappings\": [\n                                {\n                                  \"attributeMappings\": [\n                                    {\n                                      \"source\": {\n                                        \"parameters\": [\n                                          {\n                                            \"value\": {}\n                                          }\n                                        ]\n                                      }\n                                    }\n                                  ],\n                                  \"metadata\": [\n                                    {}\n                                  ],\n                                  \"scope\": {\n                                    \"categoryFilterGroups\": [\n                                      {\n                                        \"clauses\": [\n                                          {\n                                            \"targetOperand\": {\n                                              \"values\": [\n                                                null\n                                              ]\n                                            }\n                                          }\n                                        ]\n                                      }\n                                    ],\n                                    \"groups\": [\n                                      {}\n                                    ],\n                                    \"inputFilterGroups\": [\n                                      {}\n                                    ]\n                                  }\n                                }\n                              ]\n                            }\n                          ]\n                        },\n                        \"status\": {\n                          \"lastExecution\": {\n                            \"error\": {}\n                          },\n                          \"lastSuccessfulExecution\": {},\n                          \"lastSuccessfulExecutionWithExports\": {},\n                          \"progress\": [\n                            {}\n                          ],\n                          \"quarantine\": {\n                            \"error\": {}\n                          },\n                          \"synchronizedEntryCountByType\": [\n                            {}\n                          ]\n                        },\n                        \"synchronizationJobSettings\": [\n                          {}\n                        ]\n                      }\n                    ],\n                    \"secrets\": [\n                      {}\n                    ],\n                    \"templates\": [\n                      {\n                        \"metadata\": [\n                          {}\n                        ],\n                        \"schema\": {}\n                      }\n                    ]\n                  },\n                  \"tags\": [\n                    null\n                  ],\n                  \"tokenIssuancePolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.tokenIssuancePolicy\"\n                    }\n                  ],\n                  \"tokenLifetimePolicies\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.tokenLifetimePolicy\"\n                    }\n                  ],\n                  \"transitiveMemberOf\": [\n                    {}\n                  ],\n                  \"verifiedPublisher\": {}\n                }\n              ],\n              \"appRoleAssignments\": [\n                {}\n              ],\n              \"approvals\": [\n                {}\n              ],\n              \"assignedLicenses\": [\n                {}\n              ],\n              \"assignedPlans\": [\n                {}\n              ],\n              \"authentication\": {\n                \"emailMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.emailAuthenticationMethod\"\n                  }\n                ],\n                \"fido2Methods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.fido2AuthenticationMethod\",\n                    \"attestationCertificates\": [\n                      null\n                    ]\n                  }\n                ],\n                \"methods\": [\n                  {}\n                ],\n                \"microsoftAuthenticatorMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.microsoftAuthenticatorAuthenticationMethod\",\n                    \"device\": {\n                      \"@odata.type\": \"#microsoft.graph.device\",\n                      \"alternativeSecurityIds\": [\n                        {}\n                      ],\n                      \"commands\": [\n                        {\n                          \"payload\": {},\n                          \"responsepayload\": {}\n                        }\n                      ],\n                      \"extensionAttributes\": {},\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"hostnames\": [\n                        null\n                      ],\n                      \"memberOf\": [\n                        {}\n                      ],\n                      \"physicalIds\": [\n                        null\n                      ],\n                      \"registeredOwners\": [\n                        {}\n                      ],\n                      \"registeredUsers\": [\n                        {}\n                      ],\n                      \"systemLabels\": [\n                        null\n                      ],\n                      \"transitiveMemberOf\": [\n                        {}\n                      ],\n                      \"usageRights\": [\n                        {}\n                      ]\n                    }\n                  }\n                ],\n                \"operations\": [\n                  {}\n                ],\n                \"passwordMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.passwordAuthenticationMethod\"\n                  }\n                ],\n                \"passwordlessMicrosoftAuthenticatorMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod\",\n                    \"device\": {}\n                  }\n                ],\n                \"phoneMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.phoneAuthenticationMethod\"\n                  }\n                ],\n                \"softwareOathMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.softwareOathAuthenticationMethod\"\n                  }\n                ],\n                \"temporaryAccessPassMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.temporaryAccessPassAuthenticationMethod\"\n                  }\n                ],\n                \"windowsHelloForBusinessMethods\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.windowsHelloForBusinessAuthenticationMethod\",\n                    \"device\": {}\n                  }\n                ]\n              },\n              \"authorizationInfo\": {\n                \"certificateUserIds\": [\n                  null\n                ]\n              },\n              \"businessPhones\": [\n                null\n              ],\n              \"calendar\": {},\n              \"calendarGroups\": [\n                {\n                  \"calendars\": [\n                    {}\n                  ]\n                }\n              ],\n              \"calendarView\": [\n                {}\n              ],\n              \"calendars\": [\n                {}\n              ],\n              \"chats\": [\n                {\n                  \"installedApps\": [\n                    {\n                      \"teamsApp\": {\n                        \"appDefinitions\": [\n                          {\n                            \"bot\": {},\n                            \"colorIcon\": {\n                              \"hostedContent\": {}\n                            },\n                            \"createdBy\": {},\n                            \"outlineIcon\": {}\n                          }\n                        ]\n                      },\n                      \"teamsAppDefinition\": {}\n                    }\n                  ],\n                  \"lastMessagePreview\": {\n                    \"body\": {},\n                    \"eventDetail\": {},\n                    \"from\": {\n                      \"@odata.type\": \"#microsoft.graph.chatMessageFromIdentitySet\"\n                    }\n                  },\n                  \"members\": [\n                    {\n                      \"roles\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"messages\": [\n                    {\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"channelIdentity\": {},\n                      \"eventDetail\": {},\n                      \"from\": {},\n                      \"hostedContents\": [\n                        {\n                          \"@odata.type\": \"#microsoft.graph.chatMessageHostedContent\"\n                        }\n                      ],\n                      \"mentions\": [\n                        {\n                          \"mentioned\": {\n                            \"@odata.type\": \"#microsoft.graph.chatMessageMentionedIdentitySet\",\n                            \"conversation\": {\n                              \"@odata.type\": \"#microsoft.graph.teamworkConversationIdentity\"\n                            },\n                            \"tag\": {\n                              \"@odata.type\": \"#microsoft.graph.teamworkTagIdentity\"\n                            }\n                          }\n                        }\n                      ],\n                      \"messageHistory\": [\n                        {\n                          \"reaction\": {\n                            \"user\": {\n                              \"@odata.type\": \"#microsoft.graph.chatMessageReactionIdentitySet\"\n                            }\n                          }\n                        }\n                      ],\n                      \"messageType\": {},\n                      \"onBehalfOf\": {},\n                      \"policyViolation\": {\n                        \"policyTip\": {\n                          \"matchedConditionDescriptions\": [\n                            null\n                          ]\n                        }\n                      },\n                      \"reactions\": [\n                        {}\n                      ],\n                      \"replies\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"onlineMeetingInfo\": {\n                    \"organizer\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkUserIdentity\"\n                    }\n                  },\n                  \"operations\": [\n                    {\n                      \"error\": {}\n                    }\n                  ],\n                  \"permissionGrants\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.resourceSpecificPermissionGrant\"\n                    }\n                  ],\n                  \"pinnedMessages\": [\n                    {\n                      \"message\": {}\n                    }\n                  ],\n                  \"tabs\": [\n                    {\n                      \"configuration\": {},\n                      \"teamsApp\": {}\n                    }\n                  ],\n                  \"viewpoint\": {}\n                }\n              ],\n              \"cloudPCs\": [\n                {\n                  \"connectivityResult\": {\n                    \"failedHealthCheckItems\": [\n                      {}\n                    ]\n                  },\n                  \"lastLoginResult\": {},\n                  \"lastRemoteActionResult\": {\n                    \"statusDetails\": {\n                      \"additionalInformation\": [\n                        {}\n                      ]\n                    }\n                  },\n                  \"partnerAgentInstallResults\": [\n                    {}\n                  ],\n                  \"statusDetails\": {}\n                }\n              ],\n              \"contactFolders\": [\n                {\n                  \"childFolders\": [\n                    {}\n                  ],\n                  \"contacts\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.contact\",\n                      \"children\": [\n                        null\n                      ],\n                      \"emailAddresses\": [\n                        {\n                          \"@odata.type\": \"#microsoft.graph.typedEmailAddress\"\n                        }\n                      ],\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"flag\": {\n                        \"completedDateTime\": {},\n                        \"dueDateTime\": {},\n                        \"startDateTime\": {}\n                      },\n                      \"imAddresses\": [\n                        null\n                      ],\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"phones\": [\n                        {}\n                      ],\n                      \"photo\": {},\n                      \"postalAddresses\": [\n                        {}\n                      ],\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"websites\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"multiValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"singleValueExtendedProperties\": [\n                    {}\n                  ]\n                }\n              ],\n              \"contacts\": [\n                {}\n              ],\n              \"createdObjects\": [\n                {}\n              ],\n              \"customSecurityAttributes\": {},\n              \"deviceEnrollmentConfigurations\": [\n                {\n                  \"assignments\": [\n                    {\n                      \"target\": {}\n                    }\n                  ],\n                  \"roleScopeTagIds\": [\n                    null\n                  ]\n                }\n              ],\n              \"deviceKeys\": [\n                {}\n              ],\n              \"deviceManagementTroubleshootingEvents\": [\n                {\n                  \"additionalInformation\": [\n                    {}\n                  ],\n                  \"troubleshootingErrorDetails\": {\n                    \"resources\": [\n                      {}\n                    ]\n                  }\n                }\n              ],\n              \"devices\": [\n                {}\n              ],\n              \"directReports\": [\n                {}\n              ],\n              \"drive\": {},\n              \"drives\": [\n                {}\n              ],\n              \"employeeOrgData\": {},\n              \"events\": [\n                {}\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"followedSites\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.site\",\n                  \"analytics\": {\n                    \"allTime\": {\n                      \"access\": {},\n                      \"activities\": [\n                        {\n                          \"access\": {},\n                          \"actor\": {},\n                          \"driveItem\": {\n                            \"@odata.type\": \"#microsoft.graph.driveItem\",\n                            \"activities\": [\n                              {\n                                \"action\": {\n                                  \"comment\": {\n                                    \"parentAuthor\": {},\n                                    \"participants\": [\n                                      {}\n                                    ]\n                                  },\n                                  \"create\": {},\n                                  \"delete\": {},\n                                  \"edit\": {},\n                                  \"mention\": {\n                                    \"mentionees\": [\n                                      {}\n                                    ]\n                                  },\n                                  \"move\": {},\n                                  \"rename\": {},\n                                  \"restore\": {},\n                                  \"share\": {\n                                    \"recipients\": [\n                                      {}\n                                    ]\n                                  },\n                                  \"version\": {}\n                                },\n                                \"actor\": {},\n                                \"driveItem\": {},\n                                \"listItem\": {\n                                  \"@odata.type\": \"#microsoft.graph.listItem\",\n                                  \"activities\": [\n                                    {}\n                                  ],\n                                  \"analytics\": {},\n                                  \"contentType\": {},\n                                  \"deleted\": {},\n                                  \"documentSetVersions\": [\n                                    {\n                                      \"@odata.type\": \"#microsoft.graph.documentSetVersion\",\n                                      \"lastModifiedBy\": {},\n                                      \"publication\": {},\n                                      \"fields\": {},\n                                      \"createdBy\": {},\n                                      \"items\": [\n                                        {}\n                                      ]\n                                    }\n                                  ],\n                                  \"driveItem\": {},\n                                  \"fields\": {},\n                                  \"sharepointIds\": {},\n                                  \"versions\": [\n                                    {}\n                                  ]\n                                },\n                                \"times\": {}\n                              }\n                            ],\n                            \"analytics\": {},\n                            \"audio\": {},\n                            \"bundle\": {\n                              \"album\": {}\n                            },\n                            \"children\": [\n                              {}\n                            ],\n                            \"deleted\": {},\n                            \"file\": {\n                              \"hashes\": {}\n                            },\n                            \"fileSystemInfo\": {},\n                            \"folder\": {\n                              \"view\": {}\n                            },\n                            \"image\": {},\n                            \"listItem\": {},\n                            \"location\": {},\n                            \"malware\": {},\n                            \"media\": {\n                              \"mediaSource\": {}\n                            },\n                            \"package\": {},\n                            \"pendingOperations\": {\n                              \"pendingContentUpdate\": {}\n                            },\n                            \"permissions\": [\n                              {\n                                \"grantedTo\": {},\n                                \"grantedToIdentities\": [\n                                  {}\n                                ],\n                                \"grantedToIdentitiesV2\": [\n                                  {\n                                    \"@odata.type\": \"#microsoft.graph.sharePointIdentitySet\",\n                                    \"group\": {},\n                                    \"siteGroup\": {\n                                      \"@odata.type\": \"#microsoft.graph.sharePointIdentity\"\n                                    },\n                                    \"siteUser\": {}\n                                  }\n                                ],\n                                \"grantedToV2\": {},\n                                \"inheritedFrom\": {\n                                  \"sharepointIds\": {}\n                                },\n                                \"invitation\": {\n                                  \"invitedBy\": {}\n                                },\n                                \"link\": {\n                                  \"application\": {}\n                                },\n                                \"roles\": [\n                                  null\n                                ]\n                              }\n                            ],\n                            \"photo\": {},\n                            \"publication\": {},\n                            \"remoteItem\": {\n                              \"createdBy\": {},\n                              \"file\": {},\n                              \"fileSystemInfo\": {},\n                              \"folder\": {},\n                              \"image\": {},\n                              \"lastModifiedBy\": {},\n                              \"package\": {},\n                              \"parentReference\": {},\n                              \"shared\": {\n                                \"owner\": {},\n                                \"sharedBy\": {}\n                              },\n                              \"sharepointIds\": {},\n                              \"specialFolder\": {},\n                              \"video\": {}\n                            },\n                            \"root\": {},\n                            \"searchResult\": {},\n                            \"shared\": {},\n                            \"sharepointIds\": {},\n                            \"source\": {},\n                            \"specialFolder\": {},\n                            \"subscriptions\": [\n                              {}\n                            ],\n                            \"thumbnails\": [\n                              {\n                                \"large\": {},\n                                \"medium\": {},\n                                \"small\": {},\n                                \"source\": {}\n                              }\n                            ],\n                            \"versions\": [\n                              {\n                                \"@odata.type\": \"#microsoft.graph.driveItemVersion\"\n                              }\n                            ],\n                            \"video\": {},\n                            \"workbook\": {\n                              \"application\": {},\n                              \"comments\": [\n                                {\n                                  \"replies\": [\n                                    {}\n                                  ]\n                                }\n                              ],\n                              \"functions\": {},\n                              \"names\": [\n                                {\n                                  \"value\": {},\n                                  \"worksheet\": {\n                                    \"charts\": [\n                                      {\n                                        \"axes\": {\n                                          \"categoryAxis\": {\n                                            \"format\": {\n                                              \"font\": {},\n                                              \"line\": {}\n                                            },\n                                            \"majorGridlines\": {\n                                              \"format\": {\n                                                \"line\": {}\n                                              }\n                                            },\n                                            \"majorUnit\": {},\n                                            \"maximum\": {},\n                                            \"minimum\": {},\n                                            \"minorGridlines\": {},\n                                            \"minorUnit\": {},\n                                            \"title\": {\n                                              \"format\": {\n                                                \"font\": {}\n                                              }\n                                            }\n                                          },\n                                          \"seriesAxis\": {},\n                                          \"valueAxis\": {}\n                                        },\n                                        \"dataLabels\": {\n                                          \"format\": {\n                                            \"fill\": {},\n                                            \"font\": {}\n                                          }\n                                        },\n                                        \"format\": {\n                                          \"fill\": {},\n                                          \"font\": {}\n                                        },\n                                        \"legend\": {\n                                          \"format\": {\n                                            \"fill\": {},\n                                            \"font\": {}\n                                          }\n                                        },\n                                        \"series\": [\n                                          {\n                                            \"format\": {\n                                              \"fill\": {},\n                                              \"line\": {}\n                                            },\n                                            \"points\": [\n                                              {\n                                                \"format\": {\n                                                  \"fill\": {}\n                                                },\n                                                \"value\": {}\n                                              }\n                                            ]\n                                          }\n                                        ],\n                                        \"title\": {\n                                          \"format\": {\n                                            \"fill\": {},\n                                            \"font\": {}\n                                          }\n                                        },\n                                        \"worksheet\": {}\n                                      }\n                                    ],\n                                    \"names\": [\n                                      {}\n                                    ],\n                                    \"pivotTables\": [\n                                      {\n                                        \"worksheet\": {}\n                                      }\n                                    ],\n                                    \"protection\": {\n                                      \"options\": {}\n                                    },\n                                    \"tables\": [\n                                      {\n                                        \"columns\": [\n                                          {\n                                            \"filter\": {\n                                              \"criteria\": {\n                                                \"icon\": {},\n                                                \"values\": {}\n                                              }\n                                            },\n                                            \"values\": {}\n                                          }\n                                        ],\n                                        \"rows\": [\n                                          {\n                                            \"values\": {}\n                                          }\n                                        ],\n                                        \"sort\": {\n                                          \"fields\": [\n                                            {\n                                              \"icon\": {}\n                                            }\n                                          ]\n                                        },\n                                        \"worksheet\": {}\n                                      }\n                                    ]\n                                  }\n                                }\n                              ],\n                              \"operations\": [\n                                {\n                                  \"error\": {\n                                    \"innerError\": {}\n                                  }\n                                }\n                              ],\n                              \"tables\": [\n                                {}\n                              ],\n                              \"worksheets\": [\n                                {}\n                              ]\n                            }\n                          }\n                        }\n                      ],\n                      \"create\": {},\n                      \"delete\": {},\n                      \"edit\": {},\n                      \"incompleteData\": {},\n                      \"move\": {}\n                    },\n                    \"itemActivityStats\": [\n                      {}\n                    ],\n                    \"lastSevenDays\": {}\n                  },\n                  \"columns\": [\n                    {\n                      \"boolean\": {},\n                      \"calculated\": {},\n                      \"choice\": {\n                        \"choices\": [\n                          null\n                        ]\n                      },\n                      \"contentApprovalStatus\": {},\n                      \"currency\": {},\n                      \"dateTime\": {},\n                      \"defaultValue\": {},\n                      \"geolocation\": {},\n                      \"hyperlinkOrPicture\": {},\n                      \"lookup\": {},\n                      \"number\": {},\n                      \"personOrGroup\": {},\n                      \"sourceColumn\": {},\n                      \"sourceContentType\": {},\n                      \"term\": {\n                        \"parentTerm\": {\n                          \"children\": [\n                            {}\n                          ],\n                          \"descriptions\": [\n                            {}\n                          ],\n                          \"labels\": [\n                            {}\n                          ],\n                          \"properties\": [\n                            {}\n                          ],\n                          \"relations\": [\n                            {\n                              \"fromTerm\": {},\n                              \"set\": {\n                                \"children\": [\n                                  {}\n                                ],\n                                \"localizedNames\": [\n                                  {}\n                                ],\n                                \"parentGroup\": {\n                                  \"sets\": [\n                                    {}\n                                  ]\n                                },\n                                \"properties\": [\n                                  {}\n                                ],\n                                \"relations\": [\n                                  {}\n                                ],\n                                \"terms\": [\n                                  {}\n                                ]\n                              },\n                              \"toTerm\": {}\n                            }\n                          ],\n                          \"set\": {}\n                        },\n                        \"termSet\": {}\n                      },\n                      \"text\": {},\n                      \"thumbnail\": {},\n                      \"validation\": {\n                        \"descriptions\": [\n                          {}\n                        ]\n                      }\n                    }\n                  ],\n                  \"contentTypes\": [\n                    {\n                      \"associatedHubsUrls\": [\n                        null\n                      ],\n                      \"base\": {},\n                      \"baseTypes\": [\n                        {}\n                      ],\n                      \"columnLinks\": [\n                        {}\n                      ],\n                      \"columnPositions\": [\n                        {}\n                      ],\n                      \"columns\": [\n                        {}\n                      ],\n                      \"documentSet\": {\n                        \"allowedContentTypes\": [\n                          {}\n                        ],\n                        \"defaultContents\": [\n                          {\n                            \"contentType\": {}\n                          }\n                        ],\n                        \"sharedColumns\": [\n                          {}\n                        ],\n                        \"welcomePageColumns\": [\n                          {}\n                        ]\n                      },\n                      \"documentTemplate\": {},\n                      \"inheritedFrom\": {},\n                      \"order\": {}\n                    }\n                  ],\n                  \"deleted\": {},\n                  \"drive\": {},\n                  \"drives\": [\n                    {}\n                  ],\n                  \"externalColumns\": [\n                    {}\n                  ],\n                  \"informationProtection\": {\n                    \"bitlocker\": {\n                      \"recoveryKeys\": [\n                        {}\n                      ]\n                    },\n                    \"dataLossPreventionPolicies\": [\n                      {}\n                    ],\n                    \"policy\": {\n                      \"labels\": [\n                        {\n                          \"parent\": {\n                            \"parent\": {}\n                          }\n                        }\n                      ]\n                    },\n                    \"sensitivityLabels\": [\n                      {\n                        \"assignedPolicies\": [\n                          {}\n                        ],\n                        \"autoLabeling\": {\n                          \"sensitiveTypeIds\": [\n                            null\n                          ]\n                        },\n                        \"labelActions\": [\n                          {}\n                        ],\n                        \"sublabels\": [\n                          {}\n                        ]\n                      }\n                    ],\n                    \"sensitivityPolicySettings\": {\n                      \"applicableTo\": {}\n                    },\n                    \"threatAssessmentRequests\": [\n                      {\n                        \"createdBy\": {},\n                        \"results\": [\n                          {}\n                        ]\n                      }\n                    ]\n                  },\n                  \"items\": [\n                    {}\n                  ],\n                  \"lists\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.list\",\n                      \"activities\": [\n                        {}\n                      ],\n                      \"columns\": [\n                        {}\n                      ],\n                      \"contentTypes\": [\n                        {}\n                      ],\n                      \"drive\": {},\n                      \"items\": [\n                        {}\n                      ],\n                      \"list\": {},\n                      \"operations\": [\n                        {\n                          \"error\": {\n                            \"details\": [\n                              {}\n                            ],\n                            \"innerError\": {\n                              \"details\": [\n                                {}\n                              ]\n                            }\n                          }\n                        }\n                      ],\n                      \"sharepointIds\": {},\n                      \"subscriptions\": [\n                        {}\n                      ],\n                      \"system\": {}\n                    }\n                  ],\n                  \"onenote\": {\n                    \"notebooks\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.notebook\",\n                        \"createdBy\": {},\n                        \"lastModifiedBy\": {},\n                        \"links\": {\n                          \"oneNoteClientUrl\": {},\n                          \"oneNoteWebUrl\": {}\n                        },\n                        \"sectionGroups\": [\n                          {\n                            \"@odata.type\": \"#microsoft.graph.sectionGroup\",\n                            \"parentNotebook\": {},\n                            \"parentSectionGroup\": {},\n                            \"sectionGroups\": [\n                              {}\n                            ],\n                            \"sections\": [\n                              {\n                                \"@odata.type\": \"#microsoft.graph.onenoteSection\",\n                                \"links\": {\n                                  \"oneNoteClientUrl\": {},\n                                  \"oneNoteWebUrl\": {}\n                                },\n                                \"pages\": [\n                                  {\n                                    \"@odata.type\": \"#microsoft.graph.onenotePage\",\n                                    \"links\": {\n                                      \"oneNoteClientUrl\": {},\n                                      \"oneNoteWebUrl\": {}\n                                    },\n                                    \"parentNotebook\": {},\n                                    \"parentSection\": {},\n                                    \"userTags\": [\n                                      null\n                                    ]\n                                  }\n                                ],\n                                \"parentNotebook\": {},\n                                \"parentSectionGroup\": {}\n                              }\n                            ]\n                          }\n                        ],\n                        \"sections\": [\n                          {}\n                        ]\n                      }\n                    ],\n                    \"operations\": [\n                      {\n                        \"error\": {}\n                      }\n                    ],\n                    \"pages\": [\n                      {}\n                    ],\n                    \"resources\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.onenoteResource\"\n                      }\n                    ],\n                    \"sectionGroups\": [\n                      {}\n                    ],\n                    \"sections\": [\n                      {}\n                    ]\n                  },\n                  \"operations\": [\n                    {}\n                  ],\n                  \"pages\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.sitePage\",\n                      \"canvasLayout\": {\n                        \"horizontalSections\": [\n                          {\n                            \"columns\": [\n                              {\n                                \"webparts\": [\n                                  {}\n                                ]\n                              }\n                            ]\n                          }\n                        ],\n                        \"verticalSection\": {\n                          \"emphasis\": {},\n                          \"webparts\": [\n                            {}\n                          ]\n                        }\n                      },\n                      \"contentType\": {},\n                      \"publishingState\": {},\n                      \"reactions\": {},\n                      \"titleArea\": {\n                        \"serverProcessedContent\": {\n                          \"componentDependencies\": [\n                            {}\n                          ],\n                          \"customMetadata\": [\n                            {\n                              \"value\": {}\n                            }\n                          ],\n                          \"htmlStrings\": [\n                            {}\n                          ],\n                          \"imageSources\": [\n                            {}\n                          ],\n                          \"links\": [\n                            {}\n                          ],\n                          \"searchablePlainTexts\": [\n                            {}\n                          ]\n                        }\n                      },\n                      \"webParts\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"permissions\": [\n                    {}\n                  ],\n                  \"root\": {},\n                  \"settings\": {},\n                  \"sharepointIds\": {},\n                  \"siteCollection\": {\n                    \"root\": {}\n                  },\n                  \"sites\": [\n                    {}\n                  ],\n                  \"termStore\": {\n                    \"groups\": [\n                      {}\n                    ],\n                    \"languageTags\": [\n                      null\n                    ],\n                    \"sets\": [\n                      {}\n                    ]\n                  }\n                }\n              ],\n              \"identities\": [\n                {}\n              ],\n              \"imAddresses\": [\n                null\n              ],\n              \"inferenceClassification\": {\n                \"overrides\": [\n                  {\n                    \"senderEmailAddress\": {}\n                  }\n                ]\n              },\n              \"infoCatalogs\": [\n                null\n              ],\n              \"informationProtection\": {},\n              \"insights\": {\n                \"shared\": [\n                  {\n                    \"lastShared\": {\n                      \"sharedBy\": {},\n                      \"sharingReference\": {}\n                    },\n                    \"lastSharedMethod\": {},\n                    \"resource\": {},\n                    \"resourceReference\": {},\n                    \"resourceVisualization\": {},\n                    \"sharingHistory\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"trending\": [\n                  {\n                    \"resource\": {},\n                    \"resourceReference\": {},\n                    \"resourceVisualization\": {}\n                  }\n                ],\n                \"used\": [\n                  {\n                    \"lastUsed\": {},\n                    \"resource\": {},\n                    \"resourceReference\": {},\n                    \"resourceVisualization\": {}\n                  }\n                ]\n              },\n              \"interests\": [\n                null\n              ],\n              \"joinedGroups\": [\n                {}\n              ],\n              \"joinedTeams\": [\n                {\n                  \"allChannels\": [\n                    {\n                      \"filesFolder\": {},\n                      \"members\": [\n                        {}\n                      ],\n                      \"messages\": [\n                        {}\n                      ],\n                      \"moderationSettings\": {},\n                      \"sharedWithTeams\": [\n                        {\n                          \"team\": {},\n                          \"allowedMembers\": [\n                            {}\n                          ]\n                        }\n                      ],\n                      \"summary\": {},\n                      \"tabs\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"channels\": [\n                    {}\n                  ],\n                  \"discoverySettings\": {},\n                  \"funSettings\": {},\n                  \"group\": {},\n                  \"guestSettings\": {},\n                  \"incomingChannels\": [\n                    {}\n                  ],\n                  \"installedApps\": [\n                    {}\n                  ],\n                  \"memberSettings\": {},\n                  \"members\": [\n                    {}\n                  ],\n                  \"messagingSettings\": {},\n                  \"operations\": [\n                    {}\n                  ],\n                  \"owners\": [\n                    {}\n                  ],\n                  \"permissionGrants\": [\n                    {}\n                  ],\n                  \"photo\": {},\n                  \"primaryChannel\": {},\n                  \"schedule\": {\n                    \"offerShiftRequests\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.offerShiftRequest\",\n                        \"createdBy\": {},\n                        \"lastModifiedBy\": {}\n                      }\n                    ],\n                    \"openShiftChangeRequests\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.openShiftChangeRequest\"\n                      }\n                    ],\n                    \"openShifts\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.openShift\",\n                        \"draftOpenShift\": {\n                          \"@odata.type\": \"#microsoft.graph.openShiftItem\",\n                          \"activities\": [\n                            {\n                              \"theme\": {}\n                            }\n                          ]\n                        },\n                        \"sharedOpenShift\": {}\n                      }\n                    ],\n                    \"provisionStatus\": {},\n                    \"schedulingGroups\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.schedulingGroup\",\n                        \"userIds\": [\n                          null\n                        ]\n                      }\n                    ],\n                    \"shifts\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.shift\",\n                        \"draftShift\": {},\n                        \"sharedShift\": {}\n                      }\n                    ],\n                    \"swapShiftsChangeRequests\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.swapShiftsChangeRequest\"\n                      }\n                    ],\n                    \"timeCards\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.timeCard\",\n                        \"breaks\": [\n                          {\n                            \"end\": {\n                              \"notes\": {}\n                            },\n                            \"notes\": {},\n                            \"start\": {}\n                          }\n                        ],\n                        \"clockInEvent\": {},\n                        \"clockOutEvent\": {},\n                        \"notes\": {},\n                        \"originalEntry\": {\n                          \"breaks\": [\n                            {}\n                          ],\n                          \"clockInEvent\": {},\n                          \"clockOutEvent\": {}\n                        }\n                      }\n                    ],\n                    \"timeClockSettings\": {\n                      \"approvedLocation\": {}\n                    },\n                    \"timeOffReasons\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.timeOffReason\"\n                      }\n                    ],\n                    \"timeOffRequests\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.timeOffRequest\"\n                      }\n                    ],\n                    \"timesOff\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.timeOff\",\n                        \"draftTimeOff\": {},\n                        \"sharedTimeOff\": {}\n                      }\n                    ],\n                    \"workforceIntegrationIds\": [\n                      null\n                    ]\n                  },\n                  \"summary\": {},\n                  \"tags\": [\n                    {\n                      \"members\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"template\": {},\n                  \"templateDefinition\": {\n                    \"categories\": [\n                      null\n                    ],\n                    \"lastModifiedBy\": {},\n                    \"teamDefinition\": {}\n                  }\n                }\n              ],\n              \"licenseAssignmentStates\": [\n                {\n                  \"disabledPlans\": [\n                    null\n                  ]\n                }\n              ],\n              \"licenseDetails\": [\n                {}\n              ],\n              \"mailFolders\": [\n                {\n                  \"childFolders\": [\n                    {}\n                  ],\n                  \"messageRules\": [\n                    {\n                      \"actions\": {\n                        \"assignCategories\": [\n                          null\n                        ],\n                        \"forwardAsAttachmentTo\": [\n                          {}\n                        ],\n                        \"forwardTo\": [\n                          {}\n                        ],\n                        \"markImportance\": {},\n                        \"redirectTo\": [\n                          {}\n                        ]\n                      },\n                      \"conditions\": {\n                        \"bodyContains\": [\n                          null\n                        ],\n                        \"bodyOrSubjectContains\": [\n                          null\n                        ],\n                        \"categories\": [\n                          null\n                        ],\n                        \"fromAddresses\": [\n                          {}\n                        ],\n                        \"headerContains\": [\n                          null\n                        ],\n                        \"importance\": {},\n                        \"recipientContains\": [\n                          null\n                        ],\n                        \"senderContains\": [\n                          null\n                        ],\n                        \"sensitivity\": {},\n                        \"sentToAddresses\": [\n                          {}\n                        ],\n                        \"subjectContains\": [\n                          null\n                        ],\n                        \"withinSizeRange\": {}\n                      },\n                      \"exceptions\": {}\n                    }\n                  ],\n                  \"messages\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.message\",\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"bccRecipients\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"ccRecipients\": [\n                        {}\n                      ],\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"flag\": {},\n                      \"from\": {},\n                      \"importance\": {},\n                      \"inferenceClassification\": {},\n                      \"internetMessageHeaders\": [\n                        {}\n                      ],\n                      \"mentions\": [\n                        {}\n                      ],\n                      \"mentionsPreview\": {},\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"replyTo\": [\n                        {}\n                      ],\n                      \"sender\": {},\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"toRecipients\": [\n                        {}\n                      ],\n                      \"uniqueBody\": {},\n                      \"unsubscribeData\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"multiValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"singleValueExtendedProperties\": [\n                    {}\n                  ],\n                  \"userConfigurations\": [\n                    {}\n                  ]\n                }\n              ],\n              \"mailboxSettings\": {\n                \"automaticRepliesSetting\": {\n                  \"scheduledEndDateTime\": {},\n                  \"scheduledStartDateTime\": {}\n                },\n                \"language\": {},\n                \"workingHours\": {\n                  \"daysOfWeek\": [\n                    {}\n                  ],\n                  \"timeZone\": {}\n                }\n              },\n              \"managedAppRegistrations\": [\n                {\n                  \"appIdentifier\": {},\n                  \"appliedPolicies\": [\n                    {\n                      \"roleScopeTagIds\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"flaggedReasons\": [\n                    null\n                  ],\n                  \"intendedPolicies\": [\n                    {}\n                  ],\n                  \"operations\": [\n                    {}\n                  ]\n                }\n              ],\n              \"managedDevices\": [\n                {\n                  \"assignmentFilterEvaluationStatusDetails\": [\n                    {}\n                  ],\n                  \"chromeOSDeviceInfo\": [\n                    {}\n                  ],\n                  \"cloudPcRemoteActionResults\": [\n                    {}\n                  ],\n                  \"configurationManagerClientEnabledFeatures\": {},\n                  \"configurationManagerClientHealthState\": {},\n                  \"configurationManagerClientInformation\": {},\n                  \"detectedApps\": [\n                    {\n                      \"managedDevices\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"deviceActionResults\": [\n                    {\n                      \"actionState\": {}\n                    }\n                  ],\n                  \"deviceCategory\": {\n                    \"roleScopeTagIds\": [\n                      null\n                    ]\n                  },\n                  \"deviceCompliancePolicyStates\": [\n                    {\n                      \"settingStates\": [\n                        {\n                          \"sources\": [\n                            {}\n                          ]\n                        }\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"deviceConfigurationStates\": [\n                    {\n                      \"platformType\": {},\n                      \"settingStates\": [\n                        {\n                          \"sources\": [\n                            {}\n                          ],\n                          \"state\": {}\n                        }\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"deviceHealthAttestationState\": {},\n                  \"deviceHealthScriptStates\": [\n                    {\n                      \"assignmentFilterIds\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"hardwareInformation\": {\n                    \"sharedDeviceCachedUsers\": [\n                      {}\n                    ],\n                    \"wiredIPv4Addresses\": [\n                      null\n                    ]\n                  },\n                  \"logCollectionRequests\": [\n                    {}\n                  ],\n                  \"managedDeviceMobileAppConfigurationStates\": [\n                    {\n                      \"platformType\": {},\n                      \"settingStates\": [\n                        {\n                          \"sources\": [\n                            {}\n                          ],\n                          \"state\": {}\n                        }\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"roleScopeTagIds\": [\n                    null\n                  ],\n                  \"securityBaselineStates\": [\n                    {\n                      \"settingStates\": [\n                        {\n                          \"contributingPolicies\": [\n                            {}\n                          ],\n                          \"sourcePolicies\": [\n                            {}\n                          ]\n                        }\n                      ],\n                      \"state\": {}\n                    }\n                  ],\n                  \"users\": [\n                    {}\n                  ],\n                  \"usersLoggedOn\": [\n                    {}\n                  ],\n                  \"windowsProtectionState\": {\n                    \"detectedMalwareState\": [\n                      {}\n                    ]\n                  }\n                }\n              ],\n              \"manager\": {},\n              \"memberOf\": [\n                {}\n              ],\n              \"messages\": [\n                {}\n              ],\n              \"mobileAppIntentAndStates\": [\n                {\n                  \"mobileAppList\": [\n                    {\n                      \"supportedDeviceTypes\": [\n                        {\n                          \"type\": {}\n                        }\n                      ]\n                    }\n                  ]\n                }\n              ],\n              \"mobileAppTroubleshootingEvents\": [\n                {\n                  \"appLogCollectionRequests\": [\n                    {\n                      \"customLogFolders\": [\n                        null\n                      ]\n                    }\n                  ],\n                  \"history\": [\n                    {\n                      \"troubleshootingErrorDetails\": {}\n                    }\n                  ]\n                }\n              ],\n              \"notifications\": [\n                {\n                  \"payload\": {\n                    \"visualContent\": {}\n                  },\n                  \"targetPolicy\": {\n                    \"platformTypes\": [\n                      null\n                    ]\n                  }\n                }\n              ],\n              \"oauth2PermissionGrants\": [\n                {}\n              ],\n              \"onPremisesExtensionAttributes\": {},\n              \"onPremisesProvisioningErrors\": [\n                {}\n              ],\n              \"onenote\": {},\n              \"onlineMeetings\": [\n                {\n                  \"anonymizeIdentityForRoles\": [\n                    null\n                  ],\n                  \"attendanceReports\": [\n                    {\n                      \"attendanceRecords\": [\n                        {\n                          \"attendanceIntervals\": [\n                            {}\n                          ],\n                          \"identity\": {}\n                        }\n                      ]\n                    }\n                  ],\n                  \"audioConferencing\": {\n                    \"tollFreeNumbers\": [\n                      null\n                    ],\n                    \"tollNumbers\": [\n                      null\n                    ]\n                  },\n                  \"broadcastSettings\": {\n                    \"captions\": {\n                      \"translationLanguages\": [\n                        null\n                      ]\n                    }\n                  },\n                  \"capabilities\": [\n                    null\n                  ],\n                  \"chatInfo\": {},\n                  \"joinInformation\": {},\n                  \"joinMeetingIdSettings\": {},\n                  \"lobbyBypassSettings\": {},\n                  \"meetingAttendanceReport\": {},\n                  \"participants\": {\n                    \"attendees\": [\n                      {\n                        \"identity\": {},\n                        \"role\": {}\n                      }\n                    ],\n                    \"contributors\": [\n                      {}\n                    ],\n                    \"organizer\": {},\n                    \"producers\": [\n                      {}\n                    ]\n                  },\n                  \"registration\": {\n                    \"@odata.type\": \"#microsoft.graph.meetingRegistration\",\n                    \"registrants\": [\n                      {}\n                    ],\n                    \"customQuestions\": [\n                      {\n                        \"answerOptions\": [\n                          null\n                        ]\n                      }\n                    ],\n                    \"speakers\": [\n                      {}\n                    ]\n                  },\n                  \"transcripts\": [\n                    {}\n                  ],\n                  \"virtualAppointment\": {\n                    \"appointmentClients\": [\n                      {}\n                    ],\n                    \"settings\": {}\n                  },\n                  \"watermarkProtection\": {}\n                }\n              ],\n              \"otherMails\": [\n                null\n              ],\n              \"outlook\": {\n                \"masterCategories\": [\n                  {}\n                ],\n                \"taskFolders\": [\n                  {\n                    \"multiValueExtendedProperties\": [\n                      {}\n                    ],\n                    \"singleValueExtendedProperties\": [\n                      {}\n                    ],\n                    \"tasks\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.outlookTask\",\n                        \"attachments\": [\n                          {}\n                        ],\n                        \"body\": {},\n                        \"completedDateTime\": {},\n                        \"dueDateTime\": {},\n                        \"importance\": {},\n                        \"multiValueExtendedProperties\": [\n                          {}\n                        ],\n                        \"recurrence\": {},\n                        \"reminderDateTime\": {},\n                        \"sensitivity\": {},\n                        \"singleValueExtendedProperties\": [\n                          {}\n                        ],\n                        \"startDateTime\": {}\n                      }\n                    ]\n                  }\n                ],\n                \"taskGroups\": [\n                  {\n                    \"taskFolders\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              },\n              \"ownedDevices\": [\n                {}\n              ],\n              \"ownedObjects\": [\n                {}\n              ],\n              \"passwordProfile\": {},\n              \"pastProjects\": [\n                null\n              ],\n              \"pendingAccessReviewInstances\": [\n                {\n                  \"contactedReviewers\": [\n                    {}\n                  ],\n                  \"decisions\": [\n                    {\n                      \"appliedBy\": {\n                        \"@odata.type\": \"#microsoft.graph.userIdentity\"\n                      },\n                      \"insights\": [\n                        {}\n                      ],\n                      \"instance\": {},\n                      \"principal\": {},\n                      \"principalResourceMembership\": {},\n                      \"resource\": {},\n                      \"reviewedBy\": {},\n                      \"target\": {}\n                    }\n                  ],\n                  \"definition\": {\n                    \"additionalNotificationRecipients\": [\n                      {\n                        \"notificationRecipientScope\": {}\n                      }\n                    ],\n                    \"backupReviewers\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.accessReviewReviewerScope\"\n                      }\n                    ],\n                    \"createdBy\": {},\n                    \"fallbackReviewers\": [\n                      {}\n                    ],\n                    \"instanceEnumerationScope\": {},\n                    \"instances\": [\n                      {}\n                    ],\n                    \"reviewers\": [\n                      {}\n                    ],\n                    \"scope\": {},\n                    \"settings\": {\n                      \"applyActions\": [\n                        {}\n                      ],\n                      \"recommendationInsightSettings\": [\n                        {}\n                      ],\n                      \"recurrence\": {}\n                    },\n                    \"stageSettings\": [\n                      {\n                        \"decisionsThatWillMoveToNextStage\": [\n                          null\n                        ],\n                        \"dependsOn\": [\n                          null\n                        ],\n                        \"fallbackReviewers\": [\n                          {}\n                        ],\n                        \"recommendationInsightSettings\": [\n                          {}\n                        ],\n                        \"reviewers\": [\n                          {}\n                        ]\n                      }\n                    ]\n                  },\n                  \"errors\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.accessReviewError\"\n                    }\n                  ],\n                  \"fallbackReviewers\": [\n                    {}\n                  ],\n                  \"reviewers\": [\n                    {}\n                  ],\n                  \"scope\": {},\n                  \"stages\": [\n                    {\n                      \"decisions\": [\n                        {}\n                      ],\n                      \"fallbackReviewers\": [\n                        {}\n                      ],\n                      \"reviewers\": [\n                        {}\n                      ]\n                    }\n                  ]\n                }\n              ],\n              \"people\": [\n                {\n                  \"emailAddresses\": [\n                    {}\n                  ],\n                  \"phones\": [\n                    {}\n                  ],\n                  \"postalAddresses\": [\n                    {}\n                  ],\n                  \"sources\": [\n                    {}\n                  ],\n                  \"websites\": [\n                    {}\n                  ]\n                }\n              ],\n              \"photo\": {},\n              \"photos\": [\n                {}\n              ],\n              \"planner\": {\n                \"all\": [\n                  {}\n                ],\n                \"favoritePlanReferences\": {},\n                \"favoritePlans\": [\n                  {\n                    \"buckets\": [\n                      {\n                        \"creationSource\": {},\n                        \"tasks\": [\n                          {\n                            \"appliedCategories\": {},\n                            \"assignedToTaskBoardFormat\": {\n                              \"orderHintsByAssignee\": {}\n                            },\n                            \"assignments\": {},\n                            \"bucketTaskBoardFormat\": {},\n                            \"completedBy\": {},\n                            \"createdBy\": {},\n                            \"creationSource\": {\n                              \"creationSourceKind\": {},\n                              \"teamsPublicationInfo\": {\n                                \"@odata.type\": \"#microsoft.graph.plannerTeamsPublicationInfo\"\n                              }\n                            },\n                            \"details\": {\n                              \"checklist\": {},\n                              \"notes\": {},\n                              \"references\": {}\n                            },\n                            \"previewType\": {},\n                            \"progressTaskBoardFormat\": {},\n                            \"recurrence\": {\n                              \"schedule\": {\n                                \"pattern\": {}\n                              }\n                            }\n                          }\n                        ]\n                      }\n                    ],\n                    \"container\": {},\n                    \"contexts\": {},\n                    \"createdBy\": {},\n                    \"creationSource\": {\n                      \"creationSourceKind\": {}\n                    },\n                    \"details\": {\n                      \"categoryDescriptions\": {},\n                      \"contextDetails\": {},\n                      \"sharedWith\": {}\n                    },\n                    \"sharedWithContainers\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.plannerSharedWithContainer\"\n                      }\n                    ],\n                    \"tasks\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"plans\": [\n                  {}\n                ],\n                \"recentPlanReferences\": {},\n                \"recentPlans\": [\n                  {}\n                ],\n                \"rosterPlans\": [\n                  {}\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              },\n              \"presence\": {\n                \"outOfOfficeSettings\": {},\n                \"statusMessage\": {\n                  \"expiryDateTime\": {},\n                  \"message\": {}\n                }\n              },\n              \"print\": {\n                \"recentPrinterShares\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.printerShare\",\n                    \"capabilities\": {\n                      \"bottomMargins\": [\n                        null\n                      ],\n                      \"colorModes\": [\n                        null\n                      ],\n                      \"contentTypes\": [\n                        null\n                      ],\n                      \"copiesPerJob\": {},\n                      \"dpis\": [\n                        null\n                      ],\n                      \"duplexModes\": [\n                        null\n                      ],\n                      \"feedDirections\": [\n                        null\n                      ],\n                      \"feedOrientations\": [\n                        null\n                      ],\n                      \"finishings\": [\n                        null\n                      ],\n                      \"inputBins\": [\n                        null\n                      ],\n                      \"leftMargins\": [\n                        null\n                      ],\n                      \"mediaColors\": [\n                        null\n                      ],\n                      \"mediaSizes\": [\n                        null\n                      ],\n                      \"mediaTypes\": [\n                        null\n                      ],\n                      \"multipageLayouts\": [\n                        null\n                      ],\n                      \"orientations\": [\n                        null\n                      ],\n                      \"outputBins\": [\n                        null\n                      ],\n                      \"pagesPerSheet\": [\n                        null\n                      ],\n                      \"qualities\": [\n                        null\n                      ],\n                      \"rightMargins\": [\n                        null\n                      ],\n                      \"scalings\": [\n                        null\n                      ],\n                      \"supportedColorConfigurations\": [\n                        null\n                      ],\n                      \"supportedCopiesPerJob\": {},\n                      \"supportedDocumentMimeTypes\": [\n                        null\n                      ],\n                      \"supportedDuplexConfigurations\": [\n                        null\n                      ],\n                      \"supportedFinishings\": [\n                        {}\n                      ],\n                      \"supportedMediaColors\": [\n                        null\n                      ],\n                      \"supportedMediaSizes\": [\n                        null\n                      ],\n                      \"supportedMediaTypes\": [\n                        null\n                      ],\n                      \"supportedOrientations\": [\n                        {}\n                      ],\n                      \"supportedOutputBins\": [\n                        null\n                      ],\n                      \"supportedPagesPerSheet\": {},\n                      \"supportedPresentationDirections\": [\n                        null\n                      ],\n                      \"supportedPrintQualities\": [\n                        {}\n                      ],\n                      \"topMargins\": [\n                        null\n                      ]\n                    },\n                    \"defaults\": {\n                      \"colorMode\": {},\n                      \"duplexConfiguration\": {},\n                      \"duplexMode\": {},\n                      \"finishings\": [\n                        {}\n                      ],\n                      \"multipageLayout\": {},\n                      \"orientation\": {},\n                      \"presentationDirection\": {},\n                      \"printColorConfiguration\": {},\n                      \"printQuality\": {},\n                      \"quality\": {},\n                      \"scaling\": {}\n                    },\n                    \"jobs\": [\n                      {\n                        \"configuration\": {\n                          \"colorMode\": {},\n                          \"duplexMode\": {},\n                          \"feedOrientation\": {},\n                          \"finishings\": [\n                            {}\n                          ],\n                          \"margin\": {},\n                          \"multipageLayout\": {},\n                          \"orientation\": {},\n                          \"pageRanges\": [\n                            {}\n                          ],\n                          \"quality\": {},\n                          \"scaling\": {}\n                        },\n                        \"createdBy\": {},\n                        \"documents\": [\n                          {\n                            \"configuration\": {\n                              \"colorMode\": {},\n                              \"duplexMode\": {},\n                              \"feedDirection\": {},\n                              \"feedOrientation\": {},\n                              \"finishings\": [\n                                {}\n                              ],\n                              \"margin\": {},\n                              \"multipageLayout\": {},\n                              \"orientation\": {},\n                              \"pageRanges\": [\n                                {}\n                              ],\n                              \"quality\": {},\n                              \"scaling\": {}\n                            }\n                          }\n                        ],\n                        \"status\": {\n                          \"details\": [\n                            null\n                          ],\n                          \"state\": {}\n                        },\n                        \"tasks\": [\n                          {\n                            \"definition\": {\n                              \"createdBy\": {},\n                              \"tasks\": [\n                                {}\n                              ]\n                            },\n                            \"status\": {},\n                            \"trigger\": {\n                              \"definition\": {}\n                            }\n                          }\n                        ]\n                      }\n                    ],\n                    \"location\": {\n                      \"organization\": [\n                        null\n                      ],\n                      \"subdivision\": [\n                        null\n                      ],\n                      \"subunit\": [\n                        null\n                      ]\n                    },\n                    \"status\": {\n                      \"details\": [\n                        null\n                      ],\n                      \"processingStateReasons\": [\n                        null\n                      ],\n                      \"state\": {}\n                    },\n                    \"allowedGroups\": [\n                      {}\n                    ],\n                    \"allowedUsers\": [\n                      {}\n                    ],\n                    \"printer\": {\n                      \"@odata.type\": \"#microsoft.graph.printer\",\n                      \"connectors\": [\n                        {\n                          \"deviceHealth\": {},\n                          \"location\": {}\n                        }\n                      ],\n                      \"share\": {},\n                      \"shares\": [\n                        {}\n                      ],\n                      \"taskTriggers\": [\n                        {}\n                      ]\n                    },\n                    \"viewPoint\": {}\n                  }\n                ]\n              },\n              \"profile\": {\n                \"account\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.userAccountInformation\",\n                    \"createdBy\": {},\n                    \"inference\": {},\n                    \"lastModifiedBy\": {},\n                    \"source\": {\n                      \"type\": [\n                        null\n                      ]\n                    },\n                    \"preferredLanguageTag\": {}\n                  }\n                ],\n                \"addresses\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemAddress\",\n                    \"detail\": {},\n                    \"geoCoordinates\": {}\n                  }\n                ],\n                \"anniversaries\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personAnnualEvent\"\n                  }\n                ],\n                \"awards\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personAward\"\n                  }\n                ],\n                \"certifications\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personCertification\"\n                  }\n                ],\n                \"educationalActivities\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.educationalActivity\",\n                    \"institution\": {\n                      \"location\": {}\n                    },\n                    \"program\": {\n                      \"activities\": [\n                        null\n                      ],\n                      \"awards\": [\n                        null\n                      ],\n                      \"fieldsOfStudy\": [\n                        null\n                      ]\n                    }\n                  }\n                ],\n                \"emails\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemEmail\",\n                    \"type\": {}\n                  }\n                ],\n                \"interests\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personInterest\",\n                    \"categories\": [\n                      null\n                    ],\n                    \"collaborationTags\": [\n                      null\n                    ]\n                  }\n                ],\n                \"languages\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.languageProficiency\",\n                    \"reading\": {},\n                    \"spoken\": {},\n                    \"written\": {}\n                  }\n                ],\n                \"names\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personName\",\n                    \"pronunciation\": {}\n                  }\n                ],\n                \"notes\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personAnnotation\",\n                    \"detail\": {}\n                  }\n                ],\n                \"patents\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemPatent\"\n                  }\n                ],\n                \"phones\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemPhone\",\n                    \"type\": {}\n                  }\n                ],\n                \"positions\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.workPosition\",\n                    \"categories\": [\n                      null\n                    ],\n                    \"colleagues\": [\n                      {}\n                    ],\n                    \"detail\": {\n                      \"company\": {\n                        \"address\": {}\n                      }\n                    },\n                    \"manager\": {}\n                  }\n                ],\n                \"projects\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.projectParticipation\",\n                    \"categories\": [\n                      null\n                    ],\n                    \"client\": {},\n                    \"collaborationTags\": [\n                      null\n                    ],\n                    \"colleagues\": [\n                      {}\n                    ],\n                    \"detail\": {},\n                    \"sponsors\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"publications\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.itemPublication\"\n                  }\n                ],\n                \"skills\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.skillProficiency\",\n                    \"categories\": [\n                      null\n                    ],\n                    \"collaborationTags\": [\n                      null\n                    ]\n                  }\n                ],\n                \"webAccounts\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.webAccount\",\n                    \"service\": {}\n                  }\n                ],\n                \"websites\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.personWebsite\",\n                    \"categories\": [\n                      null\n                    ]\n                  }\n                ]\n              },\n              \"provisionedPlans\": [\n                {}\n              ],\n              \"proxyAddresses\": [\n                null\n              ],\n              \"registeredDevices\": [\n                {}\n              ],\n              \"responsibilities\": [\n                null\n              ],\n              \"schools\": [\n                null\n              ],\n              \"scopedRoleMemberOf\": [\n                {\n                  \"roleMemberInfo\": {}\n                }\n              ],\n              \"security\": {\n                \"informationProtection\": {\n                  \"labelPolicySettings\": {},\n                  \"sensitivityLabels\": [\n                    {\n                      \"contentFormats\": [\n                        null\n                      ],\n                      \"parent\": {}\n                    }\n                  ]\n                }\n              },\n              \"settings\": {\n                \"contactMergeSuggestions\": {},\n                \"itemInsights\": {},\n                \"regionalAndLanguageSettings\": {\n                  \"authoringLanguages\": [\n                    {}\n                  ],\n                  \"defaultDisplayLanguage\": {},\n                  \"defaultRegionalFormat\": {},\n                  \"defaultSpeechInputLanguage\": {},\n                  \"defaultTranslationLanguage\": {},\n                  \"regionalFormatOverrides\": {},\n                  \"translationPreferences\": {\n                    \"languageOverrides\": [\n                      {}\n                    ],\n                    \"translationBehavior\": {},\n                    \"untranslatedLanguages\": [\n                      null\n                    ]\n                  }\n                },\n                \"shiftPreferences\": {\n                  \"@odata.type\": \"#microsoft.graph.shiftPreferences\",\n                  \"availability\": [\n                    {\n                      \"recurrence\": {},\n                      \"timeSlots\": [\n                        {}\n                      ]\n                    }\n                  ]\n                }\n              },\n              \"signInActivity\": {},\n              \"skills\": [\n                null\n              ],\n              \"teamwork\": {\n                \"associatedTeams\": [\n                  {}\n                ],\n                \"installedApps\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.userScopeTeamsAppInstallation\",\n                    \"chat\": {}\n                  }\n                ]\n              },\n              \"todo\": {\n                \"lists\": [\n                  {\n                    \"extensions\": [\n                      {}\n                    ],\n                    \"tasks\": [\n                      {\n                        \"attachmentSessions\": [\n                          {\n                            \"nextExpectedRanges\": [\n                              null\n                            ]\n                          }\n                        ],\n                        \"attachments\": [\n                          {}\n                        ],\n                        \"body\": {},\n                        \"categories\": [\n                          null\n                        ],\n                        \"checklistItems\": [\n                          {}\n                        ],\n                        \"completedDateTime\": {},\n                        \"dueDateTime\": {},\n                        \"extensions\": [\n                          {}\n                        ],\n                        \"importance\": {},\n                        \"linkedResources\": [\n                          {}\n                        ],\n                        \"recurrence\": {},\n                        \"reminderDateTime\": {},\n                        \"startDateTime\": {},\n                        \"status\": {}\n                      }\n                    ]\n                  }\n                ]\n              },\n              \"transitiveMemberOf\": [\n                {}\n              ],\n              \"transitiveReports\": [\n                {}\n              ],\n              \"usageRights\": [\n                {}\n              ],\n              \"windowsInformationProtectionDeviceRegistrations\": [\n                {}\n              ]\n            },\n            \"lastModifiedBy\": {},\n            \"lastModifiedByUser\": {},\n            \"parentReference\": {},\n            \"activities\": [\n              {}\n            ],\n            \"bundles\": [\n              {}\n            ],\n            \"following\": [\n              {}\n            ],\n            \"items\": [\n              {}\n            ],\n            \"list\": {},\n            \"owner\": {},\n            \"quota\": {\n              \"storagePlanInformation\": {}\n            },\n            \"root\": {},\n            \"sharePointIds\": {},\n            \"special\": [\n              {}\n            ],\n            \"system\": {}\n          },\n          \"drives\": [\n            {}\n          ],\n          \"endpoints\": [\n            {}\n          ],\n          \"events\": [\n            {}\n          ],\n          \"extensions\": [\n            {}\n          ],\n          \"groupLifecyclePolicies\": [\n            {}\n          ],\n          \"groupTypes\": [\n            null\n          ],\n          \"infoCatalogs\": [\n            null\n          ],\n          \"licenseProcessingState\": {},\n          \"memberOf\": [\n            {}\n          ],\n          \"members\": [\n            {}\n          ],\n          \"membersWithLicenseErrors\": [\n            {}\n          ],\n          \"membershipRuleProcessingStatus\": {},\n          \"onPremisesProvisioningErrors\": [\n            {}\n          ],\n          \"onenote\": {},\n          \"owners\": [\n            {}\n          ],\n          \"permissionGrants\": [\n            {}\n          ],\n          \"photo\": {},\n          \"photos\": [\n            {}\n          ],\n          \"planner\": {\n            \"plans\": [\n              {}\n            ]\n          },\n          \"proxyAddresses\": [\n            null\n          ],\n          \"rejectedSenders\": [\n            {}\n          ],\n          \"resourceBehaviorOptions\": [\n            null\n          ],\n          \"resourceProvisioningOptions\": [\n            null\n          ],\n          \"settings\": [\n            {\n              \"values\": [\n                {}\n              ]\n            }\n          ],\n          \"sites\": [\n            {}\n          ],\n          \"team\": {},\n          \"threads\": [\n            {}\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"transitiveMembers\": [\n            {}\n          ],\n          \"writebackConfiguration\": {}\n        },\n        \"members\": [\n          {}\n        ],\n        \"schools\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.educationSchool\",\n            \"externalSource\": {},\n            \"address\": {},\n            \"administrativeUnit\": {\n              \"@odata.type\": \"#microsoft.graph.administrativeUnit\",\n              \"extensions\": [\n                {}\n              ],\n              \"members\": [\n                {}\n              ],\n              \"scopedRoleMembers\": [\n                {}\n              ]\n            },\n            \"classes\": [\n              {}\n            ],\n            \"createdBy\": {},\n            \"users\": [\n              {}\n            ]\n          }\n        ],\n        \"teachers\": [\n          {}\n        ],\n        \"term\": {}\n      }\n    ],\n    \"createdBy\": {},\n    \"externalSource\": {},\n    \"mailingAddress\": {},\n    \"onPremisesInfo\": {},\n    \"passwordProfile\": {},\n    \"provisionedPlans\": [\n      {}\n    ],\n    \"relatedContacts\": [\n      {}\n    ],\n    \"residenceAddress\": {},\n    \"rubrics\": [\n      {}\n    ],\n    \"schools\": [\n      {}\n    ],\n    \"student\": {},\n    \"taughtClasses\": [\n      {}\n    ],\n    \"teacher\": {},\n    \"user\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Root"
					],
					"operation": [
						"Education Education Root Update Education Root"
					]
				}
			}
		},
];
