import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accessReviewDecisionsAccessReviewDecisionDescription } from './resources/access-review-decisions-access-review-decision';
import { accessReviewsAccessReviewDescription } from './resources/access-reviews-access-review';
import { accessReviewsAccessReviewDecisionDescription } from './resources/access-reviews-access-review-decision';
import { accessReviewsActionsDescription } from './resources/access-reviews-actions';
import { accessReviewsAccessReviewReviewerDescription } from './resources/access-reviews-access-review-reviewer';
import { activitystatisticsActivityStatisticsDescription } from './resources/activitystatistics-activity-statistics';
import { adminAdminDescription } from './resources/admin-admin';
import { adminEdgeDescription } from './resources/admin-edge';
import { adminActionsDescription } from './resources/admin-actions';
import { adminAdminReportSettingsDescription } from './resources/admin-admin-report-settings';
import { adminServiceAnnouncementDescription } from './resources/admin-service-announcement';
import { adminFunctionsDescription } from './resources/admin-functions';
import { adminSharepointDescription } from './resources/admin-sharepoint';
import { adminAdminWindowsDescription } from './resources/admin-admin-windows';
import { administrativeUnitsAdministrativeUnitDescription } from './resources/administrative-units-administrative-unit';
import { administrativeUnitsExtensionDescription } from './resources/administrative-units-extension';
import { administrativeUnitsDirectoryObjectDescription } from './resources/administrative-units-directory-object';
import { directoryObjectApplicationDescription } from './resources/directory-object-application';
import { directoryObjectDeviceDescription } from './resources/directory-object-device';
import { directoryObjectGroupDescription } from './resources/directory-object-group';
import { directoryObjectOrgContactDescription } from './resources/directory-object-org-contact';
import { directoryObjectServicePrincipalDescription } from './resources/directory-object-service-principal';
import { directoryObjectUserDescription } from './resources/directory-object-user';
import { administrativeUnitsActionsDescription } from './resources/administrative-units-actions';
import { administrativeUnitsScopedRoleMembershipDescription } from './resources/administrative-units-scoped-role-membership';
import { administrativeUnitsFunctionsDescription } from './resources/administrative-units-functions';
import { agreementAcceptancesAgreementAcceptanceDescription } from './resources/agreement-acceptances-agreement-acceptance';
import { agreementsAgreementDescription } from './resources/agreements-agreement';
import { agreementsAgreementAcceptanceDescription } from './resources/agreements-agreement-acceptance';
import { agreementsAgreementFileDescription } from './resources/agreements-agreement-file';
import { agreementsAgreementFileLocalizationDescription } from './resources/agreements-agreement-file-localization';
import { allowedDataLocationsAllowedDataLocationDescription } from './resources/allowed-data-locations-allowed-data-location';
import { appCommsApplicationDescription } from './resources/app-comms-application';
import { appCallDescription } from './resources/app-call';
import { appActionsDescription } from './resources/app-actions';
import { appOnlineMeetingDescription } from './resources/app-online-meeting';
import { appCatalogsAppCatalogsDescription } from './resources/app-catalogs-app-catalogs';
import { appCatalogsTeamsAppDescription } from './resources/app-catalogs-teams-app';
import { applicationsApplicationDescription } from './resources/applications-application';
import { applicationsAppManagementPolicyDescription } from './resources/applications-app-management-policy';
import { applicationsConnectorGroupDescription } from './resources/applications-connector-group';
import { applicationsDirectoryObjectDescription } from './resources/applications-directory-object';
import { applicationsExtensionPropertyDescription } from './resources/applications-extension-property';
import { applicationsFederatedIdentityCredentialDescription } from './resources/applications-federated-identity-credential';
import { applicationsHomeRealmDiscoveryPolicyDescription } from './resources/applications-home-realm-discovery-policy';
import { applicationsActionsDescription } from './resources/applications-actions';
import { directoryObjectEndpointDescription } from './resources/directory-object-endpoint';
import { applicationsSynchronizationDescription } from './resources/applications-synchronization';
import { applicationsFunctionsDescription } from './resources/applications-functions';
import { applicationsTokenIssuancePolicyDescription } from './resources/applications-token-issuance-policy';
import { applicationsTokenLifetimePolicyDescription } from './resources/applications-token-lifetime-policy';
import { applicationTemplatesApplicationTemplateDescription } from './resources/application-templates-application-template';
import { applicationTemplatesActionsDescription } from './resources/application-templates-actions';
import { appRoleAssignmentsAppRoleAssignmentDescription } from './resources/app-role-assignments-app-role-assignment';
import { approvalWorkflowProvidersApprovalWorkflowProviderDescription } from './resources/approval-workflow-providers-approval-workflow-provider';
import { approvalWorkflowProvidersBusinessFlowDescription } from './resources/approval-workflow-providers-business-flow';
import { approvalWorkflowProvidersActionsDescription } from './resources/approval-workflow-providers-actions';
import { approvalWorkflowProvidersGovernancePolicyTemplateDescription } from './resources/approval-workflow-providers-governance-policy-template';
import { auditLogsAuditLogRootDescription } from './resources/audit-logs-audit-log-root';
import { auditLogsDirectoryAuditDescription } from './resources/audit-logs-directory-audit';
import { auditLogsProvisioningObjectSummaryDescription } from './resources/audit-logs-provisioning-object-summary';
import { auditLogsSignInDescription } from './resources/audit-logs-sign-in';
import { auditLogsActionsDescription } from './resources/audit-logs-actions';
import { authenticationMethodConfigurationsAuthenticationMethodConfigurationDescription } from './resources/authentication-method-configurations-authentication-method-configuration';
import { authenticationMethodsPolicyAuthenticationMethodsPolicyDescription } from './resources/authentication-methods-policy-authentication-methods-policy';
import { authenticationMethodsPolicyAuthenticationMethodConfigurationDescription } from './resources/authentication-methods-policy-authentication-method-configuration';
import { bookingBusinessesBookingBusinessDescription } from './resources/booking-businesses-booking-business';
import { bookingBusinessesBookingAppointmentDescription } from './resources/booking-businesses-booking-appointment';
import { bookingBusinessesActionsDescription } from './resources/booking-businesses-actions';
import { bookingBusinessesBookingCustomerDescription } from './resources/booking-businesses-booking-customer';
import { bookingBusinessesBookingCustomQuestionDescription } from './resources/booking-businesses-booking-custom-question';
import { bookingBusinessesBookingServiceDescription } from './resources/booking-businesses-booking-service';
import { bookingBusinessesBookingStaffMemberDescription } from './resources/booking-businesses-booking-staff-member';
import { bookingCurrenciesBookingCurrencyDescription } from './resources/booking-currencies-booking-currency';
import { brandingOrganizationalBrandingDescription } from './resources/branding-organizational-branding';
import { brandingOrganizationalBrandingLocalizationDescription } from './resources/branding-organizational-branding-localization';
import { businessFlowTemplatesBusinessFlowTemplateDescription } from './resources/business-flow-templates-business-flow-template';
import { certificateBasedAuthConfigurationCertificateBasedAuthConfigurationDescription } from './resources/certificate-based-auth-configuration-certificate-based-auth-configuration';
import { chatsChatDescription } from './resources/chats-chat';
import { chatsTeamsAppInstallationDescription } from './resources/chats-teams-app-installation';
import { chatsActionsDescription } from './resources/chats-actions';
import { chatsChatMessageInfoDescription } from './resources/chats-chat-message-info';
import { chatsConversationMemberDescription } from './resources/chats-conversation-member';
import { chatsChatMessageDescription } from './resources/chats-chat-message';
import { chatsFunctionsDescription } from './resources/chats-functions';
import { chatsTeamsAsyncOperationDescription } from './resources/chats-teams-async-operation';
import { chatsResourceSpecificPermissionGrantDescription } from './resources/chats-resource-specific-permission-grant';
import { chatsPinnedChatMessageInfoDescription } from './resources/chats-pinned-chat-message-info';
import { chatsTeamsTabDescription } from './resources/chats-teams-tab';
import { commandsCommandDescription } from './resources/commands-command';
import { commandsPayloadResponseDescription } from './resources/commands-payload-response';
import { communicationsCloudCommunicationsDescription } from './resources/communications-cloud-communications';
import { communicationsCallRecordDescription } from './resources/communications-call-record';
import { communicationsFunctionsDescription } from './resources/communications-functions';
import { communicationsCallDescription } from './resources/communications-call';
import { communicationsActionsDescription } from './resources/communications-actions';
import { communicationsOnlineMeetingDescription } from './resources/communications-online-meeting';
import { communicationsPresenceDescription } from './resources/communications-presence';
import { complianceComplianceDescription } from './resources/compliance-compliance';
import { connectionsExternalConnectionDescription } from './resources/connections-external-connection';
import { connectionsExternalGroupDescription } from './resources/connections-external-group';
import { connectionsExternalItemDescription } from './resources/connections-external-item';
import { connectionsActionsDescription } from './resources/connections-actions';
import { connectionsConnectionOperationDescription } from './resources/connections-connection-operation';
import { connectionsConnectionQuotaDescription } from './resources/connections-connection-quota';
import { connectionsSchemaDescription } from './resources/connections-schema';
import { contactsOrgContactDescription } from './resources/contacts-org-contact';
import { contactsDirectoryObjectDescription } from './resources/contacts-directory-object';
import { contactsActionsDescription } from './resources/contacts-actions';
import { contactsFunctionsDescription } from './resources/contacts-functions';
import { contractsContractDescription } from './resources/contracts-contract';
import { contractsActionsDescription } from './resources/contracts-actions';
import { dataClassificationDataClassificationServiceDescription } from './resources/data-classification-data-classification-service';
import { dataClassificationJobResponseBaseDescription } from './resources/data-classification-job-response-base';
import { dataClassificationExactMatchDataStoreDescription } from './resources/data-classification-exact-match-data-store';
import { dataClassificationActionsDescription } from './resources/data-classification-actions';
import { dataClassificationExactMatchUploadAgentDescription } from './resources/data-classification-exact-match-upload-agent';
import { dataClassificationSensitiveTypeDescription } from './resources/data-classification-sensitive-type';
import { dataClassificationSensitivityLabelDescription } from './resources/data-classification-sensitivity-label';
import { dataPolicyOperationsDataPolicyOperationDescription } from './resources/data-policy-operations-data-policy-operation';
import { deviceAppManagementDeviceAppManagementDescription } from './resources/device-app-management-device-app-management';
import { deviceAppManagementAndroidManagedAppProtectionDescription } from './resources/device-app-management-android-managed-app-protection';
import { deviceAppManagementActionsDescription } from './resources/device-app-management-actions';
import { deviceAppManagementDefaultManagedAppProtectionDescription } from './resources/device-app-management-default-managed-app-protection';
import { deviceAppManagementDeviceAppManagementTaskDescription } from './resources/device-app-management-device-app-management-task';
import { deviceAppManagementEnterpriseCodeSigningCertificateDescription } from './resources/device-app-management-enterprise-code-signing-certificate';
import { deviceAppManagementIosLobAppProvisioningConfigurationDescription } from './resources/device-app-management-ios-lob-app-provisioning-configuration';
import { deviceAppManagementIosManagedAppProtectionDescription } from './resources/device-app-management-ios-managed-app-protection';
import { deviceAppManagementManagedAppPolicyDescription } from './resources/device-app-management-managed-app-policy';
import { deviceAppManagementManagedAppRegistrationDescription } from './resources/device-app-management-managed-app-registration';
import { deviceAppManagementFunctionsDescription } from './resources/device-app-management-functions';
import { deviceAppManagementManagedAppStatusDescription } from './resources/device-app-management-managed-app-status';
import { deviceAppManagementManagedEBookCategoryDescription } from './resources/device-app-management-managed-e-book-category';
import { deviceAppManagementManagedEBookDescription } from './resources/device-app-management-managed-e-book';
import { deviceAppManagementMdmWindowsInformationProtectionPolicyDescription } from './resources/device-app-management-mdm-windows-information-protection-policy';
import { deviceAppManagementMobileAppCategoryDescription } from './resources/device-app-management-mobile-app-category';
import { deviceAppManagementManagedDeviceMobileAppConfigurationDescription } from './resources/device-app-management-managed-device-mobile-app-configuration';
import { deviceAppManagementMobileAppDescription } from './resources/device-app-management-mobile-app';
import { mobileAppManagedMobileLobAppDescription } from './resources/mobile-app-managed-mobile-lob-app';
import { mobileAppMobileLobAppDescription } from './resources/mobile-app-mobile-lob-app';
import { deviceAppManagementPolicySetDescription } from './resources/device-app-management-policy-set';
import { deviceAppManagementSymantecCodeSigningCertificateDescription } from './resources/device-app-management-symantec-code-signing-certificate';
import { deviceAppManagementTargetedManagedAppConfigurationDescription } from './resources/device-app-management-targeted-managed-app-configuration';
import { deviceAppManagementVppTokenDescription } from './resources/device-app-management-vpp-token';
import { deviceAppManagementWindowsDefenderApplicationControlSupplementalPolicyDescription } from './resources/device-app-management-windows-defender-application-control-supplemental-policy';
import { deviceAppManagementWindowsInformationProtectionDeviceRegistrationDescription } from './resources/device-app-management-windows-information-protection-device-registration';
import { deviceAppManagementWindowsInformationProtectionPolicyDescription } from './resources/device-app-management-windows-information-protection-policy';
import { deviceAppManagementWindowsInformationProtectionWipeActionDescription } from './resources/device-app-management-windows-information-protection-wipe-action';
import { deviceAppManagementWindowsManagedAppProtectionDescription } from './resources/device-app-management-windows-managed-app-protection';
import { deviceAppManagementWindowsManagementAppDescription } from './resources/device-app-management-windows-management-app';
import { deviceManagementDeviceManagementDescription } from './resources/device-management-device-management';
import { deviceManagementAdvancedThreatProtectionOnboardingStateSummaryDescription } from './resources/device-management-advanced-threat-protection-onboarding-state-summary';
import { deviceManagementAndroidDeviceOwnerEnrollmentProfileDescription } from './resources/device-management-android-device-owner-enrollment-profile';
import { deviceManagementActionsDescription } from './resources/device-management-actions';
import { deviceManagementAndroidForWorkAppConfigurationSchemaDescription } from './resources/device-management-android-for-work-app-configuration-schema';
import { deviceManagementAndroidForWorkEnrollmentProfileDescription } from './resources/device-management-android-for-work-enrollment-profile';
import { deviceManagementAndroidForWorkSettingsDescription } from './resources/device-management-android-for-work-settings';
import { deviceManagementAndroidManagedStoreAccountEnterpriseSettingsDescription } from './resources/device-management-android-managed-store-account-enterprise-settings';
import { deviceManagementAndroidManagedStoreAppConfigurationSchemaDescription } from './resources/device-management-android-managed-store-app-configuration-schema';
import { deviceManagementApplePushNotificationCertificateDescription } from './resources/device-management-apple-push-notification-certificate';
import { deviceManagementFunctionsDescription } from './resources/device-management-functions';
import { deviceManagementAppleUserInitiatedEnrollmentProfileDescription } from './resources/device-management-apple-user-initiated-enrollment-profile';
import { deviceManagementDeviceAndAppManagementAssignmentFilterDescription } from './resources/device-management-device-and-app-management-assignment-filter';
import { deviceManagementAuditEventDescription } from './resources/device-management-audit-event';
import { deviceManagementDeviceManagementAutopilotEventDescription } from './resources/device-management-device-management-autopilot-event';
import { deviceManagementCartToClassAssociationDescription } from './resources/device-management-cart-to-class-association';
import { deviceManagementDeviceManagementSettingCategoryDescription } from './resources/device-management-device-management-setting-category';
import { deviceManagementCertificateConnectorDetailsDescription } from './resources/device-management-certificate-connector-details';
import { deviceManagementChromeOsOnboardingSettingsDescription } from './resources/device-management-chrome-os-onboarding-settings';
import { deviceManagementCloudPcConnectivityIssueDescription } from './resources/device-management-cloud-pc-connectivity-issue';
import { deviceManagementManagedDeviceDescription } from './resources/device-management-managed-device';
import { deviceManagementComanagementEligibleDeviceDescription } from './resources/device-management-comanagement-eligible-device';
import { deviceManagementDeviceManagementConfigurationCategoryDescription } from './resources/device-management-device-management-configuration-category';
import { deviceManagementComplianceManagementPartnerDescription } from './resources/device-management-compliance-management-partner';
import { deviceManagementDeviceManagementCompliancePolicyDescription } from './resources/device-management-device-management-compliance-policy';
import { deviceManagementDeviceManagementConfigurationSettingDefinitionDescription } from './resources/device-management-device-management-configuration-setting-definition';
import { deviceManagementOnPremisesConditionalAccessSettingsDescription } from './resources/device-management-on-premises-conditional-access-settings';
import { deviceManagementConfigManagerCollectionDescription } from './resources/device-management-config-manager-collection';
import { deviceManagementDeviceManagementConfigurationPolicyDescription } from './resources/device-management-device-management-configuration-policy';
import { deviceManagementDeviceManagementConfigurationPolicyTemplateDescription } from './resources/device-management-device-management-configuration-policy-template';
import { deviceManagementDataSharingConsentDescription } from './resources/device-management-data-sharing-consent';
import { deviceManagementDepOnboardingSettingDescription } from './resources/device-management-dep-onboarding-setting';
import { deviceManagementDeviceManagementDerivedCredentialSettingsDescription } from './resources/device-management-device-management-derived-credential-settings';
import { deviceManagementDetectedAppDescription } from './resources/device-management-detected-app';
import { deviceManagementDeviceCategoryDescription } from './resources/device-management-device-category';
import { deviceManagementDeviceCompliancePolicyDescription } from './resources/device-management-device-compliance-policy';
import { deviceManagementDeviceCompliancePolicyDeviceStateSummaryDescription } from './resources/device-management-device-compliance-policy-device-state-summary';
import { deviceManagementDeviceCompliancePolicySettingStateSummaryDescription } from './resources/device-management-device-compliance-policy-setting-state-summary';
import { deviceManagementDeviceComplianceScriptDescription } from './resources/device-management-device-compliance-script';
import { deviceManagementDeviceConfigurationConflictSummaryDescription } from './resources/device-management-device-configuration-conflict-summary';
import { deviceManagementDeviceConfigurationDeviceStateSummaryDescription } from './resources/device-management-device-configuration-device-state-summary';
import { deviceManagementRestrictedAppsViolationDescription } from './resources/device-management-restricted-apps-violation';
import { deviceManagementDeviceConfigurationDescription } from './resources/device-management-device-configuration';
import { deviceManagementManagedAllDeviceCertificateStateDescription } from './resources/device-management-managed-all-device-certificate-state';
import { deviceManagementDeviceConfigurationUserStateSummaryDescription } from './resources/device-management-device-configuration-user-state-summary';
import { deviceManagementDeviceCustomAttributeShellScriptDescription } from './resources/device-management-device-custom-attribute-shell-script';
import { deviceManagementDeviceEnrollmentConfigurationDescription } from './resources/device-management-device-enrollment-configuration';
import { deviceManagementDeviceHealthScriptDescription } from './resources/device-management-device-health-script';
import { deviceManagementDeviceManagementPartnerDescription } from './resources/device-management-device-management-partner';
import { deviceManagementDeviceManagementScriptDescription } from './resources/device-management-device-management-script';
import { deviceManagementDeviceShellScriptDescription } from './resources/device-management-device-shell-script';
import { deviceManagementDeviceManagementDomainJoinConnectorDescription } from './resources/device-management-device-management-domain-join-connector';
import { deviceManagementEmbeddedSimActivationCodePoolDescription } from './resources/device-management-embedded-sim-activation-code-pool';
import { deviceManagementDeviceManagementExchangeConnectorDescription } from './resources/device-management-device-management-exchange-connector';
import { deviceManagementDeviceManagementExchangeOnPremisesPolicyDescription } from './resources/device-management-device-management-exchange-on-premises-policy';
import { deviceManagementGroupPolicyCategoryDescription } from './resources/device-management-group-policy-category';
import { deviceManagementGroupPolicyConfigurationDescription } from './resources/device-management-group-policy-configuration';
import { deviceManagementGroupPolicyDefinitionFileDescription } from './resources/device-management-group-policy-definition-file';
import { deviceManagementGroupPolicyDefinitionDescription } from './resources/device-management-group-policy-definition';
import { deviceManagementGroupPolicyMigrationReportDescription } from './resources/device-management-group-policy-migration-report';
import { deviceManagementGroupPolicyObjectFileDescription } from './resources/device-management-group-policy-object-file';
import { deviceManagementGroupPolicyUploadedDefinitionFileDescription } from './resources/device-management-group-policy-uploaded-definition-file';
import { deviceManagementImportedDeviceIdentityDescription } from './resources/device-management-imported-device-identity';
import { deviceManagementImportedWindowsAutopilotDeviceIdentityDescription } from './resources/device-management-imported-windows-autopilot-device-identity';
import { deviceManagementDeviceManagementIntentDescription } from './resources/device-management-device-management-intent';
import { deviceManagementIntuneBrandingProfileDescription } from './resources/device-management-intune-branding-profile';
import { deviceManagementIosUpdateDeviceStatusDescription } from './resources/device-management-ios-update-device-status';
import { deviceManagementMacOsSoftwareUpdateAccountSummaryDescription } from './resources/device-management-mac-os-software-update-account-summary';
import { deviceManagementManagedDeviceEncryptionStateDescription } from './resources/device-management-managed-device-encryption-state';
import { deviceManagementManagedDeviceOverviewDescription } from './resources/device-management-managed-device-overview';
import { deviceManagementMicrosoftTunnelConfigurationDescription } from './resources/device-management-microsoft-tunnel-configuration';
import { deviceManagementMicrosoftTunnelHealthThresholdDescription } from './resources/device-management-microsoft-tunnel-health-threshold';
import { deviceManagementMicrosoftTunnelServerLogCollectionResponseDescription } from './resources/device-management-microsoft-tunnel-server-log-collection-response';
import { deviceManagementMicrosoftTunnelSiteDescription } from './resources/device-management-microsoft-tunnel-site';
import { deviceManagementMobileAppTroubleshootingEventDescription } from './resources/device-management-mobile-app-troubleshooting-event';
import { deviceManagementMobileThreatDefenseConnectorDescription } from './resources/device-management-mobile-threat-defense-connector';
import { deviceManagementMonitoringDescription } from './resources/device-management-monitoring';
import { deviceManagementNdesConnectorDescription } from './resources/device-management-ndes-connector';
import { deviceManagementNotificationMessageTemplateDescription } from './resources/device-management-notification-message-template';
import { deviceManagementOemWarrantyInformationOnboardingDescription } from './resources/device-management-oem-warranty-information-onboarding';
import { deviceManagementRemoteActionAuditDescription } from './resources/device-management-remote-action-audit';
import { deviceManagementRemoteAssistancePartnerDescription } from './resources/device-management-remote-assistance-partner';
import { deviceManagementRemoteAssistanceSettingsDescription } from './resources/device-management-remote-assistance-settings';
import { deviceManagementDeviceManagementReportsDescription } from './resources/device-management-device-management-reports';
import { deviceManagementDeviceManagementResourceAccessProfileBaseDescription } from './resources/device-management-device-management-resource-access-profile-base';
import { deviceManagementResourceOperationDescription } from './resources/device-management-resource-operation';
import { deviceManagementDeviceManagementReusablePolicySettingDescription } from './resources/device-management-device-management-reusable-policy-setting';
import { deviceManagementDeviceAndAppManagementRoleAssignmentDescription } from './resources/device-management-device-and-app-management-role-assignment';
import { deviceManagementRoleDefinitionDescription } from './resources/device-management-role-definition';
import { deviceManagementRoleScopeTagDescription } from './resources/device-management-role-scope-tag';
import { deviceManagementServiceNowConnectionDescription } from './resources/device-management-service-now-connection';
import { deviceManagementDeviceManagementSettingDefinitionDescription } from './resources/device-management-device-management-setting-definition';
import { deviceManagementSoftwareUpdateStatusSummaryDescription } from './resources/device-management-software-update-status-summary';
import { deviceManagementTelecomExpenseManagementPartnerDescription } from './resources/device-management-telecom-expense-management-partner';
import { deviceManagementDeviceManagementTemplateDescription } from './resources/device-management-device-management-template';
import { deviceManagementDeviceManagementConfigurationSettingTemplateDescription } from './resources/device-management-device-management-configuration-setting-template';
import { deviceManagementTenantAttachRbacDescription } from './resources/device-management-tenant-attach-rbac';
import { deviceManagementTermsAndConditionsDescription } from './resources/device-management-terms-and-conditions';
import { deviceManagementDeviceManagementTroubleshootingEventDescription } from './resources/device-management-device-management-troubleshooting-event';
import { deviceManagementUserExperienceAnalyticsAnomalyDescription } from './resources/device-management-user-experience-analytics-anomaly';
import { deviceManagementUserExperienceAnalyticsAnomalyDeviceDescription } from './resources/device-management-user-experience-analytics-anomaly-device';
import { deviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceDescription } from './resources/device-management-user-experience-analytics-app-health-application-performance';
import { deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDescription } from './resources/device-management-user-experience-analytics-app-health-app-performance-by-app-version';
import { deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsDescription } from './resources/device-management-user-experience-analytics-app-health-app-performance-by-app-version-details';
import { deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdDescription } from './resources/device-management-user-experience-analytics-app-health-app-performance-by-app-version-device-id';
import { deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByOsVersionDescription } from './resources/device-management-user-experience-analytics-app-health-app-performance-by-os-version';
import { deviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceDescription } from './resources/device-management-user-experience-analytics-app-health-device-model-performance';
import { deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDescription } from './resources/device-management-user-experience-analytics-app-health-device-performance';
import { deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsDescription } from './resources/device-management-user-experience-analytics-app-health-device-performance-details';
import { deviceManagementUserExperienceAnalyticsAppHealthOsVersionPerformanceDescription } from './resources/device-management-user-experience-analytics-app-health-os-version-performance';
import { deviceManagementUserExperienceAnalyticsCategoryDescription } from './resources/device-management-user-experience-analytics-category';
import { deviceManagementUserExperienceAnalyticsBaselineDescription } from './resources/device-management-user-experience-analytics-baseline';
import { deviceManagementUserExperienceAnalyticsBatteryHealthAppImpactDescription } from './resources/device-management-user-experience-analytics-battery-health-app-impact';
import { deviceManagementUserExperienceAnalyticsBatteryHealthCapacityDetailsDescription } from './resources/device-management-user-experience-analytics-battery-health-capacity-details';
import { deviceManagementUserExperienceAnalyticsBatteryHealthDeviceAppImpactDescription } from './resources/device-management-user-experience-analytics-battery-health-device-app-impact';
import { deviceManagementUserExperienceAnalyticsBatteryHealthDevicePerformanceDescription } from './resources/device-management-user-experience-analytics-battery-health-device-performance';
import { deviceManagementUserExperienceAnalyticsBatteryHealthDeviceRuntimeHistoryDescription } from './resources/device-management-user-experience-analytics-battery-health-device-runtime-history';
import { deviceManagementUserExperienceAnalyticsBatteryHealthModelPerformanceDescription } from './resources/device-management-user-experience-analytics-battery-health-model-performance';
import { deviceManagementUserExperienceAnalyticsBatteryHealthOsPerformanceDescription } from './resources/device-management-user-experience-analytics-battery-health-os-performance';
import { deviceManagementUserExperienceAnalyticsBatteryHealthRuntimeDetailsDescription } from './resources/device-management-user-experience-analytics-battery-health-runtime-details';
import { deviceManagementUserExperienceAnalyticsMetricHistoryDescription } from './resources/device-management-user-experience-analytics-metric-history';
import { deviceManagementUserExperienceAnalyticsDevicePerformanceDescription } from './resources/device-management-user-experience-analytics-device-performance';
import { deviceManagementUserExperienceAnalyticsDeviceScopeDescription } from './resources/device-management-user-experience-analytics-device-scope';
import { deviceManagementUserExperienceAnalyticsDeviceScoresDescription } from './resources/device-management-user-experience-analytics-device-scores';
import { deviceManagementUserExperienceAnalyticsDeviceStartupHistoryDescription } from './resources/device-management-user-experience-analytics-device-startup-history';
import { deviceManagementUserExperienceAnalyticsDeviceStartupProcessDescription } from './resources/device-management-user-experience-analytics-device-startup-process';
import { deviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceDescription } from './resources/device-management-user-experience-analytics-device-startup-process-performance';
import { deviceManagementUserExperienceAnalyticsDeviceWithoutCloudIdentityDescription } from './resources/device-management-user-experience-analytics-device-without-cloud-identity';
import { deviceManagementUserExperienceAnalyticsDeviceTimelineEventDescription } from './resources/device-management-user-experience-analytics-device-timeline-event';
import { deviceManagementUserExperienceAnalyticsImpactingProcessDescription } from './resources/device-management-user-experience-analytics-impacting-process';
import { deviceManagementUserExperienceAnalyticsModelScoresDescription } from './resources/device-management-user-experience-analytics-model-scores';
import { deviceManagementUserExperienceAnalyticsNotAutopilotReadyDeviceDescription } from './resources/device-management-user-experience-analytics-not-autopilot-ready-device';
import { deviceManagementUserExperienceAnalyticsOverviewDescription } from './resources/device-management-user-experience-analytics-overview';
import { deviceManagementUserExperienceAnalyticsRemoteConnectionDescription } from './resources/device-management-user-experience-analytics-remote-connection';
import { deviceManagementUserExperienceAnalyticsResourcePerformanceDescription } from './resources/device-management-user-experience-analytics-resource-performance';
import { deviceManagementUserExperienceAnalyticsScoreHistoryDescription } from './resources/device-management-user-experience-analytics-score-history';
import { deviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricDescription } from './resources/device-management-user-experience-analytics-work-from-anywhere-hardware-readiness-metric';
import { deviceManagementUserExperienceAnalyticsWorkFromAnywhereMetricDescription } from './resources/device-management-user-experience-analytics-work-from-anywhere-metric';
import { deviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceDescription } from './resources/device-management-user-experience-analytics-work-from-anywhere-model-performance';
import { deviceManagementUserPfxCertificateDescription } from './resources/device-management-user-pfx-certificate';
import { deviceManagementVirtualEndpointDescription } from './resources/device-management-virtual-endpoint';
import { deviceManagementWindowsAutopilotDeploymentProfileDescription } from './resources/device-management-windows-autopilot-deployment-profile';
import { deviceManagementWindowsAutopilotDeviceIdentityDescription } from './resources/device-management-windows-autopilot-device-identity';
import { deviceManagementWindowsAutopilotSettingsDescription } from './resources/device-management-windows-autopilot-settings';
import { deviceManagementWindowsDriverUpdateProfileDescription } from './resources/device-management-windows-driver-update-profile';
import { deviceManagementWindowsFeatureUpdateProfileDescription } from './resources/device-management-windows-feature-update-profile';
import { deviceManagementWindowsInformationProtectionAppLearningSummaryDescription } from './resources/device-management-windows-information-protection-app-learning-summary';
import { deviceManagementWindowsInformationProtectionNetworkLearningSummaryDescription } from './resources/device-management-windows-information-protection-network-learning-summary';
import { deviceManagementWindowsMalwareInformationDescription } from './resources/device-management-windows-malware-information';
import { deviceManagementWindowsQualityUpdateProfileDescription } from './resources/device-management-windows-quality-update-profile';
import { deviceManagementWindowsUpdateCatalogItemDescription } from './resources/device-management-windows-update-catalog-item';
import { deviceManagementZebraFotaArtifactDescription } from './resources/device-management-zebra-fota-artifact';
import { deviceManagementZebraFotaConnectorDescription } from './resources/device-management-zebra-fota-connector';
import { deviceManagementZebraFotaDeploymentDescription } from './resources/device-management-zebra-fota-deployment';
import { devicesDeviceDescription } from './resources/devices-device';
import { devicesCommandDescription } from './resources/devices-command';
import { devicesExtensionDescription } from './resources/devices-extension';
import { devicesDirectoryObjectDescription } from './resources/devices-directory-object';
import { devicesActionsDescription } from './resources/devices-actions';
import { devicesUsageRightDescription } from './resources/devices-usage-right';
import { devicesFunctionsDescription } from './resources/devices-functions';
import { directoryDirectoryDescription } from './resources/directory-directory';
import { directoryAdministrativeUnitDescription } from './resources/directory-administrative-unit';
import { directoryActionsDescription } from './resources/directory-actions';
import { directoryFunctionsDescription } from './resources/directory-functions';
import { directoryAttributeSetDescription } from './resources/directory-attribute-set';
import { directoryCustomSecurityAttributeDefinitionDescription } from './resources/directory-custom-security-attribute-definition';
import { directoryDirectoryObjectDescription } from './resources/directory-directory-object';
import { directoryIdentityProviderBaseDescription } from './resources/directory-identity-provider-base';
import { directoryImpactedResourceDescription } from './resources/directory-impacted-resource';
import { directoryInboundSharedUserProfileDescription } from './resources/directory-inbound-shared-user-profile';
import { directoryOnPremisesDirectorySynchronizationDescription } from './resources/directory-on-premises-directory-synchronization';
import { directoryOutboundSharedUserProfileDescription } from './resources/directory-outbound-shared-user-profile';
import { directoryRecommendationDescription } from './resources/directory-recommendation';
import { directorySharedEmailDomainDescription } from './resources/directory-shared-email-domain';
import { directoryObjectsDirectoryObjectDescription } from './resources/directory-objects-directory-object';
import { directoryObjectsActionsDescription } from './resources/directory-objects-actions';
import { directoryRolesDirectoryRoleDescription } from './resources/directory-roles-directory-role';
import { directoryRolesDirectoryObjectDescription } from './resources/directory-roles-directory-object';
import { directoryRolesActionsDescription } from './resources/directory-roles-actions';
import { directoryRolesScopedRoleMembershipDescription } from './resources/directory-roles-scoped-role-membership';
import { directoryRolesFunctionsDescription } from './resources/directory-roles-functions';
import { directoryRoleTemplatesDirectoryRoleTemplateDescription } from './resources/directory-role-templates-directory-role-template';
import { directoryRoleTemplatesActionsDescription } from './resources/directory-role-templates-actions';
import { directorySettingTemplatesDirectorySettingTemplateDescription } from './resources/directory-setting-templates-directory-setting-template';
import { directorySettingTemplatesActionsDescription } from './resources/directory-setting-templates-actions';
import { domainDnsRecordsDomainDnsRecordDescription } from './resources/domain-dns-records-domain-dns-record';
import { domainsDomainDescription } from './resources/domains-domain';
import { domainsDirectoryObjectDescription } from './resources/domains-directory-object';
import { domainsInternalDomainFederationDescription } from './resources/domains-internal-domain-federation';
import { domainsActionsDescription } from './resources/domains-actions';
import { domainsDomainDnsRecordDescription } from './resources/domains-domain-dns-record';
import { domainsSharedEmailDomainInvitationDescription } from './resources/domains-shared-email-domain-invitation';
import { drivesDriveDescription } from './resources/drives-drive';
import { drivesItemActivityOldDescription } from './resources/drives-item-activity-old';
import { drivesDriveItemDescription } from './resources/drives-drive-item';
import { drivesActionsDescription } from './resources/drives-actions';
import { drivesFunctionsDescription } from './resources/drives-functions';
import { drivesListDescription } from './resources/drives-list';
import { educationEducationRootDescription } from './resources/education-education-root';
import { educationEducationClassDescription } from './resources/education-education-class';
import { educationFunctionsDescription } from './resources/education-functions';
import { educationActionsDescription } from './resources/education-actions';
import { educationEducationUserDescription } from './resources/education-education-user';
import { educationEducationSchoolDescription } from './resources/education-education-school';
import { educationEducationSynchronizationProfileDescription } from './resources/education-education-synchronization-profile';
import { employeeExperienceEmployeeExperienceDescription } from './resources/employee-experience-employee-experience';
import { employeeExperienceLearningProviderDescription } from './resources/employee-experience-learning-provider';
import { externalExternalDescription } from './resources/external-external';
import { externalExternalConnectionDescription } from './resources/external-external-connection';
import { externalActionsDescription } from './resources/external-actions';
import { filterOperatorsFilterOperatorSchemaDescription } from './resources/filter-operators-filter-operator-schema';
import { financialsFinancialsDescription } from './resources/financials-financials';
import { financialsCompanyDescription } from './resources/financials-company';
import { financialsActionsDescription } from './resources/financials-actions';
import { functionsAttributeMappingFunctionSchemaDescription } from './resources/functions-attribute-mapping-function-schema';
import { governanceResourcesGovernanceResourceDescription } from './resources/governance-resources-governance-resource';
import { governanceResourcesGovernanceRoleAssignmentRequestDescription } from './resources/governance-resources-governance-role-assignment-request';
import { governanceResourcesActionsDescription } from './resources/governance-resources-actions';
import { governanceResourcesGovernanceRoleAssignmentDescription } from './resources/governance-resources-governance-role-assignment';
import { governanceResourcesFunctionsDescription } from './resources/governance-resources-functions';
import { governanceResourcesGovernanceRoleDefinitionDescription } from './resources/governance-resources-governance-role-definition';
import { governanceResourcesGovernanceRoleSettingDescription } from './resources/governance-resources-governance-role-setting';
import { governanceRoleAssignmentRequestsGovernanceRoleAssignmentRequestDescription } from './resources/governance-role-assignment-requests-governance-role-assignment-request';
import { governanceRoleAssignmentRequestsActionsDescription } from './resources/governance-role-assignment-requests-actions';
import { governanceRoleAssignmentRequestsGovernanceResourceDescription } from './resources/governance-role-assignment-requests-governance-resource';
import { governanceRoleAssignmentRequestsGovernanceRoleDefinitionDescription } from './resources/governance-role-assignment-requests-governance-role-definition';
import { governanceRoleAssignmentRequestsGovernanceSubjectDescription } from './resources/governance-role-assignment-requests-governance-subject';
import { governanceRoleAssignmentsGovernanceRoleAssignmentDescription } from './resources/governance-role-assignments-governance-role-assignment';
import { governanceRoleAssignmentsGovernanceResourceDescription } from './resources/governance-role-assignments-governance-resource';
import { governanceRoleAssignmentsGovernanceRoleDefinitionDescription } from './resources/governance-role-assignments-governance-role-definition';
import { governanceRoleAssignmentsGovernanceSubjectDescription } from './resources/governance-role-assignments-governance-subject';
import { governanceRoleAssignmentsFunctionsDescription } from './resources/governance-role-assignments-functions';
import { governanceRoleDefinitionsGovernanceRoleDefinitionDescription } from './resources/governance-role-definitions-governance-role-definition';
import { governanceRoleDefinitionsGovernanceResourceDescription } from './resources/governance-role-definitions-governance-resource';
import { governanceRoleDefinitionsGovernanceRoleSettingDescription } from './resources/governance-role-definitions-governance-role-setting';
import { governanceRoleSettingsGovernanceRoleSettingDescription } from './resources/governance-role-settings-governance-role-setting';
import { governanceRoleSettingsGovernanceResourceDescription } from './resources/governance-role-settings-governance-resource';
import { governanceRoleSettingsGovernanceRoleDefinitionDescription } from './resources/governance-role-settings-governance-role-definition';
import { governanceSubjectsGovernanceSubjectDescription } from './resources/governance-subjects-governance-subject';
import { groupLifecyclePoliciesGroupLifecyclePolicyDescription } from './resources/group-lifecycle-policies-group-lifecycle-policy';
import { groupLifecyclePoliciesActionsDescription } from './resources/group-lifecycle-policies-actions';
import { groupsGroupDescription } from './resources/groups-group';
import { groupsDirectoryObjectDescription } from './resources/groups-directory-object';
import { groupsAppRoleAssignmentDescription } from './resources/groups-app-role-assignment';
import { groupsCalendarDescription } from './resources/groups-calendar';
import { groupsActionsDescription } from './resources/groups-actions';
import { groupsFunctionsDescription } from './resources/groups-functions';
import { groupsEventDescription } from './resources/groups-event';
import { groupsConversationDescription } from './resources/groups-conversation';
import { groupsDriveDescription } from './resources/groups-drive';
import { groupsEndpointDescription } from './resources/groups-endpoint';
import { groupsExtensionDescription } from './resources/groups-extension';
import { groupsGroupLifecyclePolicyDescription } from './resources/groups-group-lifecycle-policy';
import { groupsOnenoteDescription } from './resources/groups-onenote';
import { groupsResourceSpecificPermissionGrantDescription } from './resources/groups-resource-specific-permission-grant';
import { groupsProfilePhotoDescription } from './resources/groups-profile-photo';
import { groupsPlannerGroupDescription } from './resources/groups-planner-group';
import { groupsDirectorySettingDescription } from './resources/groups-directory-setting';
import { groupsSiteDescription } from './resources/groups-site';
import { groupsTeamDescription } from './resources/groups-team';
import { groupsConversationThreadDescription } from './resources/groups-conversation-thread';
import { identityIdentityContainerDescription } from './resources/identity-identity-container';
import { identityIdentityApiConnectorDescription } from './resources/identity-identity-api-connector';
import { identityActionsDescription } from './resources/identity-actions';
import { identityAuthenticationEventListenerDescription } from './resources/identity-authentication-event-listener';
import { identityB2CIdentityUserFlowDescription } from './resources/identity-b-2-c-identity-user-flow';
import { identityFunctionsDescription } from './resources/identity-functions';
import { identityB2XIdentityUserFlowDescription } from './resources/identity-b-2-x-identity-user-flow';
import { identityConditionalAccessRootDescription } from './resources/identity-conditional-access-root';
import { identityContinuousAccessEvaluationPolicyDescription } from './resources/identity-continuous-access-evaluation-policy';
import { identityCustomAuthenticationExtensionDescription } from './resources/identity-custom-authentication-extension';
import { identityIdentityProviderBaseDescription } from './resources/identity-identity-provider-base';
import { identityIdentityUserFlowAttributeDescription } from './resources/identity-identity-user-flow-attribute';
import { identityGovernanceIdentityGovernanceDescription } from './resources/identity-governance-identity-governance';
import { identityGovernanceAccessReviewSetDescription } from './resources/identity-governance-access-review-set';
import { identityGovernanceFunctionsDescription } from './resources/identity-governance-functions';
import { identityGovernanceActionsDescription } from './resources/identity-governance-actions';
import { identityGovernanceAppConsentApprovalRouteDescription } from './resources/identity-governance-app-consent-approval-route';
import { identityGovernanceEntitlementManagementDescription } from './resources/identity-governance-entitlement-management';
import { identityGovernanceLifecycleWorkflowsContainerDescription } from './resources/identity-governance-lifecycle-workflows-container';
import { identityGovernancePrivilegedAccessRootDescription } from './resources/identity-governance-privileged-access-root';
import { identityGovernanceTermsOfUseContainerDescription } from './resources/identity-governance-terms-of-use-container';
import { identityProtectionIdentityProtectionRootDescription } from './resources/identity-protection-identity-protection-root';
import { identityProtectionRiskDetectionDescription } from './resources/identity-protection-risk-detection';
import { identityProtectionRiskyServicePrincipalDescription } from './resources/identity-protection-risky-service-principal';
import { identityProtectionActionsDescription } from './resources/identity-protection-actions';
import { identityProtectionRiskyUserDescription } from './resources/identity-protection-risky-user';
import { identityProtectionServicePrincipalRiskDetectionDescription } from './resources/identity-protection-service-principal-risk-detection';
import { informationProtectionInformationProtectionDescription } from './resources/information-protection-information-protection';
import { informationProtectionBitlockerDescription } from './resources/information-protection-bitlocker';
import { informationProtectionDataLossPreventionPolicyDescription } from './resources/information-protection-data-loss-prevention-policy';
import { informationProtectionActionsDescription } from './resources/information-protection-actions';
import { informationProtectionSensitivityLabelDescription } from './resources/information-protection-sensitivity-label';
import { informationProtectionSensitivityPolicySettingsDescription } from './resources/information-protection-sensitivity-policy-settings';
import { informationProtectionThreatAssessmentRequestDescription } from './resources/information-protection-threat-assessment-request';
import { invitationsInvitationDescription } from './resources/invitations-invitation';
import { invitationsUserDescription } from './resources/invitations-user';
import { meUserDescription } from './resources/me-user';
import { meUserActivityDescription } from './resources/me-user-activity';
import { meFunctionsDescription } from './resources/me-functions';
import { meAgreementAcceptanceDescription } from './resources/me-agreement-acceptance';
import { meUserAnalyticsDescription } from './resources/me-user-analytics';
import { meAppConsentRequestDescription } from './resources/me-app-consent-request';
import { meServicePrincipalDescription } from './resources/me-service-principal';
import { meAppRoleAssignmentDescription } from './resources/me-app-role-assignment';
import { meApprovalDescription } from './resources/me-approval';
import { meAuthenticationDescription } from './resources/me-authentication';
import { meActionsDescription } from './resources/me-actions';
import { meCalendarDescription } from './resources/me-calendar';
import { meCalendarGroupDescription } from './resources/me-calendar-group';
import { meEventDescription } from './resources/me-event';
import { meChatDescription } from './resources/me-chat';
import { meCloudPcDescription } from './resources/me-cloud-pc';
import { meContactFolderDescription } from './resources/me-contact-folder';
import { meContactDescription } from './resources/me-contact';
import { meDirectoryObjectDescription } from './resources/me-directory-object';
import { meDeviceEnrollmentConfigurationDescription } from './resources/me-device-enrollment-configuration';
import { meDeviceManagementTroubleshootingEventDescription } from './resources/me-device-management-troubleshooting-event';
import { meDeviceDescription } from './resources/me-device';
import { meDriveDescription } from './resources/me-drive';
import { meExtensionDescription } from './resources/me-extension';
import { meSiteDescription } from './resources/me-site';
import { meInferenceClassificationDescription } from './resources/me-inference-classification';
import { meInformationProtectionDescription } from './resources/me-information-protection';
import { meItemInsightsDescription } from './resources/me-item-insights';
import { meGroupDescription } from './resources/me-group';
import { meTeamDescription } from './resources/me-team';
import { meLicenseDetailsDescription } from './resources/me-license-details';
import { meMailFolderDescription } from './resources/me-mail-folder';
import { meManagedAppRegistrationDescription } from './resources/me-managed-app-registration';
import { meManagedDeviceDescription } from './resources/me-managed-device';
import { meMessageDescription } from './resources/me-message';
import { meMobileAppIntentAndStateDescription } from './resources/me-mobile-app-intent-and-state';
import { meMobileAppTroubleshootingEventDescription } from './resources/me-mobile-app-troubleshooting-event';
import { meNotificationDescription } from './resources/me-notification';
import { meOAuth2PermissionGrantDescription } from './resources/me-o-auth-2-permission-grant';
import { meOnenoteDescription } from './resources/me-onenote';
import { meOnlineMeetingDescription } from './resources/me-online-meeting';
import { meOutlookUserDescription } from './resources/me-outlook-user';
import { meAccessReviewInstanceDescription } from './resources/me-access-review-instance';
import { mePersonDescription } from './resources/me-person';
import { meProfilePhotoDescription } from './resources/me-profile-photo';
import { mePlannerUserDescription } from './resources/me-planner-user';
import { mePresenceDescription } from './resources/me-presence';
import { meProfileDescription } from './resources/me-profile';
import { meScopedRoleMembershipDescription } from './resources/me-scoped-role-membership';
import { meSecurityDescription } from './resources/me-security';
import { meUserSettingsDescription } from './resources/me-user-settings';
import { meUserTeamworkDescription } from './resources/me-user-teamwork';
import { meTodoDescription } from './resources/me-todo';
import { meUsageRightDescription } from './resources/me-usage-right';
import { meWindowsInformationProtectionDeviceRegistrationDescription } from './resources/me-windows-information-protection-device-registration';
import { messageEventsMessageEventDescription } from './resources/message-events-message-event';
import { messageRecipientsMessageRecipientDescription } from './resources/message-recipients-message-recipient';
import { messageRecipientsMessageEventDescription } from './resources/message-recipients-message-event';
import { messageTracesMessageTraceDescription } from './resources/message-traces-message-trace';
import { messageTracesMessageRecipientDescription } from './resources/message-traces-message-recipient';
import { mobilityManagementPoliciesMobilityManagementPolicyDescription } from './resources/mobility-management-policies-mobility-management-policy';
import { mobilityManagementPoliciesGroupDescription } from './resources/mobility-management-policies-group';
import { monitoringMonitoringDescription } from './resources/monitoring-monitoring';
import { monitoringAlertRecordDescription } from './resources/monitoring-alert-record';
import { monitoringActionsDescription } from './resources/monitoring-actions';
import { monitoringFunctionsDescription } from './resources/monitoring-functions';
import { monitoringAlertRuleDescription } from './resources/monitoring-alert-rule';
import { oauth2PermissionGrantsOAuth2PermissionGrantDescription } from './resources/oauth-2-permission-grants-o-auth-2-permission-grant';
import { oauth2PermissionGrantsFunctionsDescription } from './resources/oauth-2-permission-grants-functions';
import { officeConfigurationOfficeConfigurationDescription } from './resources/office-configuration-office-configuration';
import { officeConfigurationOfficeClientConfigurationDescription } from './resources/office-configuration-office-client-configuration';
import { officeConfigurationActionsDescription } from './resources/office-configuration-actions';
import { onPremisesPublishingProfilesOnPremisesPublishingProfileDescription } from './resources/on-premises-publishing-profiles-on-premises-publishing-profile';
import { onPremisesPublishingProfilesOnPremisesAgentGroupDescription } from './resources/on-premises-publishing-profiles-on-premises-agent-group';
import { onPremisesPublishingProfilesOnPremisesAgentDescription } from './resources/on-premises-publishing-profiles-on-premises-agent';
import { onPremisesPublishingProfilesConnectorGroupDescription } from './resources/on-premises-publishing-profiles-connector-group';
import { onPremisesPublishingProfilesConnectorDescription } from './resources/on-premises-publishing-profiles-connector';
import { onPremisesPublishingProfilesPublishedResourceDescription } from './resources/on-premises-publishing-profiles-published-resource';
import { organizationOrganizationDescription } from './resources/organization-organization';
import { organizationOrganizationalBrandingDescription } from './resources/organization-organizational-branding';
import { organizationCertificateBasedAuthConfigurationDescription } from './resources/organization-certificate-based-auth-configuration';
import { organizationExtensionDescription } from './resources/organization-extension';
import { organizationActionsDescription } from './resources/organization-actions';
import { organizationOrganizationSettingsDescription } from './resources/organization-organization-settings';
import { payloadResponsePayloadResponseDescription } from './resources/payload-response-payload-response';
import { permissionGrantsResourceSpecificPermissionGrantDescription } from './resources/permission-grants-resource-specific-permission-grant';
import { permissionGrantsActionsDescription } from './resources/permission-grants-actions';
import { placesPlaceDescription } from './resources/places-place';
import { placeRoomDescription } from './resources/place-room';
import { plannerPlannerDescription } from './resources/planner-planner';
import { plannerPlannerBucketDescription } from './resources/planner-planner-bucket';
import { plannerPlannerPlanDescription } from './resources/planner-planner-plan';
import { plannerPlannerRosterDescription } from './resources/planner-planner-roster';
import { plannerPlannerTaskDescription } from './resources/planner-planner-task';
import { policiesPolicyRootDescription } from './resources/policies-policy-root';
import { policiesAccessReviewPolicyDescription } from './resources/policies-access-review-policy';
import { policiesActivityBasedTimeoutPolicyDescription } from './resources/policies-activity-based-timeout-policy';
import { policiesAdminConsentRequestPolicyDescription } from './resources/policies-admin-consent-request-policy';
import { policiesAppManagementPolicyDescription } from './resources/policies-app-management-policy';
import { policiesAuthenticationFlowsPolicyDescription } from './resources/policies-authentication-flows-policy';
import { policiesAuthenticationMethodsPolicyDescription } from './resources/policies-authentication-methods-policy';
import { policiesAuthenticationStrengthPolicyDescription } from './resources/policies-authentication-strength-policy';
import { policiesActionsDescription } from './resources/policies-actions';
import { policiesFunctionsDescription } from './resources/policies-functions';
import { policiesAuthorizationPolicyDescription } from './resources/policies-authorization-policy';
import { policiesB2CAuthenticationMethodsPolicyDescription } from './resources/policies-b-2-c-authentication-methods-policy';
import { policiesClaimsMappingPolicyDescription } from './resources/policies-claims-mapping-policy';
import { policiesConditionalAccessPolicyDescription } from './resources/policies-conditional-access-policy';
import { policiesCrossTenantAccessPolicyDescription } from './resources/policies-cross-tenant-access-policy';
import { policiesTenantAppManagementPolicyDescription } from './resources/policies-tenant-app-management-policy';
import { policiesDeviceRegistrationPolicyDescription } from './resources/policies-device-registration-policy';
import { policiesDirectoryRoleAccessReviewPolicyDescription } from './resources/policies-directory-role-access-review-policy';
import { policiesExternalIdentitiesPolicyDescription } from './resources/policies-external-identities-policy';
import { policiesFeatureRolloutPolicyDescription } from './resources/policies-feature-rollout-policy';
import { policiesHomeRealmDiscoveryPolicyDescription } from './resources/policies-home-realm-discovery-policy';
import { policiesIdentitySecurityDefaultsEnforcementPolicyDescription } from './resources/policies-identity-security-defaults-enforcement-policy';
import { policiesMobilityManagementPolicyDescription } from './resources/policies-mobility-management-policy';
import { policiesPermissionGrantPolicyDescription } from './resources/policies-permission-grant-policy';
import { policiesUnifiedRoleManagementPolicyDescription } from './resources/policies-unified-role-management-policy';
import { policiesUnifiedRoleManagementPolicyAssignmentDescription } from './resources/policies-unified-role-management-policy-assignment';
import { policiesServicePrincipalCreationPolicyDescription } from './resources/policies-service-principal-creation-policy';
import { policiesTokenIssuancePolicyDescription } from './resources/policies-token-issuance-policy';
import { policiesTokenLifetimePolicyDescription } from './resources/policies-token-lifetime-policy';
import { printPrintDescription } from './resources/print-print';
import { printPrintConnectorDescription } from './resources/print-print-connector';
import { printPrintOperationDescription } from './resources/print-print-operation';
import { printPrinterDescription } from './resources/print-printer';
import { printFunctionsDescription } from './resources/print-functions';
import { printActionsDescription } from './resources/print-actions';
import { printPrinterShareDescription } from './resources/print-printer-share';
import { printReportRootDescription } from './resources/print-report-root';
import { printPrintServiceDescription } from './resources/print-print-service';
import { printPrintTaskDefinitionDescription } from './resources/print-print-task-definition';
import { privacyPrivacyDescription } from './resources/privacy-privacy';
import { privilegedAccessPrivilegedAccessDescription } from './resources/privileged-access-privileged-access';
import { privilegedAccessGovernanceResourceDescription } from './resources/privileged-access-governance-resource';
import { privilegedAccessActionsDescription } from './resources/privileged-access-actions';
import { privilegedAccessFunctionsDescription } from './resources/privileged-access-functions';
import { privilegedAccessGovernanceRoleAssignmentRequestDescription } from './resources/privileged-access-governance-role-assignment-request';
import { privilegedAccessGovernanceRoleAssignmentDescription } from './resources/privileged-access-governance-role-assignment';
import { privilegedAccessGovernanceRoleDefinitionDescription } from './resources/privileged-access-governance-role-definition';
import { privilegedAccessGovernanceRoleSettingDescription } from './resources/privileged-access-governance-role-setting';
import { privilegedApprovalPrivilegedApprovalDescription } from './resources/privileged-approval-privileged-approval';
import { privilegedApprovalPrivilegedRoleAssignmentRequestDescription } from './resources/privileged-approval-privileged-role-assignment-request';
import { privilegedApprovalPrivilegedRoleDescription } from './resources/privileged-approval-privileged-role';
import { privilegedApprovalActionsDescription } from './resources/privileged-approval-actions';
import { privilegedApprovalFunctionsDescription } from './resources/privileged-approval-functions';
import { privilegedOperationEventsPrivilegedOperationEventDescription } from './resources/privileged-operation-events-privileged-operation-event';
import { privilegedRoleAssignmentRequestsPrivilegedRoleAssignmentRequestDescription } from './resources/privileged-role-assignment-requests-privileged-role-assignment-request';
import { privilegedRoleAssignmentRequestsActionsDescription } from './resources/privileged-role-assignment-requests-actions';
import { privilegedRoleAssignmentRequestsPrivilegedRoleDescription } from './resources/privileged-role-assignment-requests-privileged-role';
import { privilegedRoleAssignmentRequestsFunctionsDescription } from './resources/privileged-role-assignment-requests-functions';
import { privilegedRoleAssignmentsPrivilegedRoleAssignmentDescription } from './resources/privileged-role-assignments-privileged-role-assignment';
import { privilegedRoleAssignmentsActionsDescription } from './resources/privileged-role-assignments-actions';
import { privilegedRoleAssignmentsPrivilegedRoleDescription } from './resources/privileged-role-assignments-privileged-role';
import { privilegedRoleAssignmentsFunctionsDescription } from './resources/privileged-role-assignments-functions';
import { privilegedRolesPrivilegedRoleDescription } from './resources/privileged-roles-privileged-role';
import { privilegedRolesPrivilegedRoleAssignmentDescription } from './resources/privileged-roles-privileged-role-assignment';
import { privilegedRolesActionsDescription } from './resources/privileged-roles-actions';
import { privilegedRolesPrivilegedRoleSettingsDescription } from './resources/privileged-roles-privileged-role-settings';
import { privilegedRolesPrivilegedRoleSummaryDescription } from './resources/privileged-roles-privileged-role-summary';
import { privilegedSignupStatusPrivilegedSignupStatusDescription } from './resources/privileged-signup-status-privileged-signup-status';
import { privilegedSignupStatusFunctionsDescription } from './resources/privileged-signup-status-functions';
import { privilegedSignupStatusActionsDescription } from './resources/privileged-signup-status-actions';
import { programControlsProgramControlDescription } from './resources/program-controls-program-control';
import { programControlsProgramDescription } from './resources/program-controls-program';
import { programControlTypesProgramControlTypeDescription } from './resources/program-control-types-program-control-type';
import { programsProgramDescription } from './resources/programs-program';
import { programsProgramControlDescription } from './resources/programs-program-control';
import { reportsReportRootDescription } from './resources/reports-report-root';
import { reportsApplicationSignInDetailedSummaryDescription } from './resources/reports-application-sign-in-detailed-summary';
import { reportsAuthenticationMethodsRootDescription } from './resources/reports-authentication-methods-root';
import { reportsFunctionsDescription } from './resources/reports-functions';
import { reportsCredentialUserRegistrationDetailsDescription } from './resources/reports-credential-user-registration-details';
import { reportsPrintUsageDescription } from './resources/reports-print-usage';
import { reportsPrintUsageByPrinterDescription } from './resources/reports-print-usage-by-printer';
import { reportsPrintUsageByUserDescription } from './resources/reports-print-usage-by-user';
import { reportsSecurityReportsRootDescription } from './resources/reports-security-reports-root';
import { reportsUserCredentialUsageDetailsDescription } from './resources/reports-user-credential-usage-details';
import { riskDetectionsRiskDetectionDescription } from './resources/risk-detections-risk-detection';
import { riskyUsersRiskyUserDescription } from './resources/risky-users-risky-user';
import { riskyUsersRiskyUserHistoryItemDescription } from './resources/risky-users-risky-user-history-item';
import { riskyUsersActionsDescription } from './resources/risky-users-actions';
import { roleManagementRoleManagementDescription } from './resources/role-management-role-management';
import { roleManagementRbacApplicationMultipleDescription } from './resources/role-management-rbac-application-multiple';
import { roleManagementActionsDescription } from './resources/role-management-actions';
import { roleManagementFunctionsDescription } from './resources/role-management-functions';
import { roleManagementRbacApplicationDescription } from './resources/role-management-rbac-application';
import { roleManagementUnifiedRbacApplicationDescription } from './resources/role-management-unified-rbac-application';
import { schemaExtensionsSchemaExtensionDescription } from './resources/schema-extensions-schema-extension';
import { scopedRoleMembershipsScopedRoleMembershipDescription } from './resources/scoped-role-memberships-scoped-role-membership';
import { searchSearchEntityDescription } from './resources/search-search-entity';
import { searchAcronymDescription } from './resources/search-acronym';
import { searchBookmarkDescription } from './resources/search-bookmark';
import { searchActionsDescription } from './resources/search-actions';
import { searchQnaDescription } from './resources/search-qna';
import { securitySecurityDescription } from './resources/security-security';
import { securityAlertDescription } from './resources/security-alert';
import { securityActionsDescription } from './resources/security-actions';
import { securityAttackSimulationRootDescription } from './resources/security-attack-simulation-root';
import { securityCasesRootDescription } from './resources/security-cases-root';
import { securityFunctionsDescription } from './resources/security-functions';
import { securityCloudAppSecurityProfileDescription } from './resources/security-cloud-app-security-profile';
import { securityDomainSecurityProfileDescription } from './resources/security-domain-security-profile';
import { securityFileSecurityProfileDescription } from './resources/security-file-security-profile';
import { securityHostSecurityProfileDescription } from './resources/security-host-security-profile';
import { securityIncidentDescription } from './resources/security-incident';
import { securityInformationProtectionDescription } from './resources/security-information-protection';
import { securityIpSecurityProfileDescription } from './resources/security-ip-security-profile';
import { securityLabelsRootDescription } from './resources/security-labels-root';
import { securityProviderTenantSettingDescription } from './resources/security-provider-tenant-setting';
import { securitySecureScoreControlProfileDescription } from './resources/security-secure-score-control-profile';
import { securitySecureScoreDescription } from './resources/security-secure-score';
import { securitySecurityActionDescription } from './resources/security-security-action';
import { securitySubjectRightsRequestDescription } from './resources/security-subject-rights-request';
import { securityThreatSubmissionRootDescription } from './resources/security-threat-submission-root';
import { securityTiIndicatorDescription } from './resources/security-ti-indicator';
import { securityTriggersRootDescription } from './resources/security-triggers-root';
import { securityTriggerTypesRootDescription } from './resources/security-trigger-types-root';
import { securityUserSecurityProfileDescription } from './resources/security-user-security-profile';
import { servicePrincipalsServicePrincipalDescription } from './resources/service-principals-service-principal';
import { servicePrincipalsAppManagementPolicyDescription } from './resources/service-principals-app-management-policy';
import { servicePrincipalsAppRoleAssignmentDescription } from './resources/service-principals-app-role-assignment';
import { servicePrincipalsClaimsMappingPolicyDescription } from './resources/service-principals-claims-mapping-policy';
import { servicePrincipalsDirectoryObjectDescription } from './resources/service-principals-directory-object';
import { servicePrincipalsDelegatedPermissionClassificationDescription } from './resources/service-principals-delegated-permission-classification';
import { servicePrincipalsEndpointDescription } from './resources/service-principals-endpoint';
import { servicePrincipalsFederatedIdentityCredentialDescription } from './resources/service-principals-federated-identity-credential';
import { servicePrincipalsHomeRealmDiscoveryPolicyDescription } from './resources/service-principals-home-realm-discovery-policy';
import { servicePrincipalsLicenseDetailsDescription } from './resources/service-principals-license-details';
import { servicePrincipalsActionsDescription } from './resources/service-principals-actions';
import { servicePrincipalsOAuth2PermissionGrantDescription } from './resources/service-principals-o-auth-2-permission-grant';
import { servicePrincipalsSynchronizationDescription } from './resources/service-principals-synchronization';
import { servicePrincipalsFunctionsDescription } from './resources/service-principals-functions';
import { servicePrincipalsTokenIssuancePolicyDescription } from './resources/service-principals-token-issuance-policy';
import { servicePrincipalsTokenLifetimePolicyDescription } from './resources/service-principals-token-lifetime-policy';
import { settingsDirectorySettingDescription } from './resources/settings-directory-setting';
import { sharesSharedDriveItemDescription } from './resources/shares-shared-drive-item';
import { sharesDriveItemDescription } from './resources/shares-drive-item';
import { sharesListDescription } from './resources/shares-list';
import { sharesActionsDescription } from './resources/shares-actions';
import { sharesFunctionsDescription } from './resources/shares-functions';
import { sharesListItemDescription } from './resources/shares-list-item';
import { sharesPermissionDescription } from './resources/shares-permission';
import { sharesSiteDescription } from './resources/shares-site';
import { sitesSiteDescription } from './resources/sites-site';
import { sitesItemAnalyticsDescription } from './resources/sites-item-analytics';
import { sitesColumnDefinitionDescription } from './resources/sites-column-definition';
import { sitesContentTypeDescription } from './resources/sites-content-type';
import { sitesActionsDescription } from './resources/sites-actions';
import { sitesFunctionsDescription } from './resources/sites-functions';
import { sitesDriveDescription } from './resources/sites-drive';
import { sitesInformationProtectionDescription } from './resources/sites-information-protection';
import { sitesBaseItemDescription } from './resources/sites-base-item';
import { sitesListDescription } from './resources/sites-list';
import { sitesOnenoteDescription } from './resources/sites-onenote';
import { sitesRichLongRunningOperationDescription } from './resources/sites-rich-long-running-operation';
import { sitesSitePageDescription } from './resources/sites-site-page';
import { sitesPermissionDescription } from './resources/sites-permission';
import { sitesStoreDescription } from './resources/sites-store';
import { solutionsSolutionsRootDescription } from './resources/solutions-solutions-root';
import { solutionsBusinessScenarioDescription } from './resources/solutions-business-scenario';
import { solutionsActionsDescription } from './resources/solutions-actions';
import { storageStorageDescription } from './resources/storage-storage';
import { subscribedSkusSubscribedSkuDescription } from './resources/subscribed-skus-subscribed-sku';
import { subscriptionsSubscriptionDescription } from './resources/subscriptions-subscription';
import { subscriptionsActionsDescription } from './resources/subscriptions-actions';
import { teamsTeamDescription } from './resources/teams-team';
import { teamsChannelDescription } from './resources/teams-channel';
import { teamsActionsDescription } from './resources/teams-actions';
import { teamsFunctionsDescription } from './resources/teams-functions';
import { teamsGroupDescription } from './resources/teams-group';
import { teamsTeamsAppInstallationDescription } from './resources/teams-teams-app-installation';
import { teamsConversationMemberDescription } from './resources/teams-conversation-member';
import { teamsTeamsAsyncOperationDescription } from './resources/teams-teams-async-operation';
import { teamsUserDescription } from './resources/teams-user';
import { teamsResourceSpecificPermissionGrantDescription } from './resources/teams-resource-specific-permission-grant';
import { teamsProfilePhotoDescription } from './resources/teams-profile-photo';
import { teamsScheduleDescription } from './resources/teams-schedule';
import { teamsTeamworkTagDescription } from './resources/teams-teamwork-tag';
import { teamsTeamsTemplateDescription } from './resources/teams-teams-template';
import { teamsTeamTemplateDefinitionDescription } from './resources/teams-team-template-definition';
import { teamsTemplatesTeamsTemplateDescription } from './resources/teams-templates-teams-template';
import { teamTemplateDefinitionTeamTemplateDefinitionDescription } from './resources/team-template-definition-team-template-definition';
import { teamTemplateDefinitionTeamDescription } from './resources/team-template-definition-team';
import { teamTemplateDefinitionActionsDescription } from './resources/team-template-definition-actions';
import { teamTemplateDefinitionFunctionsDescription } from './resources/team-template-definition-functions';
import { teamworkTeamworkDescription } from './resources/teamwork-teamwork';
import { teamworkDeletedTeamDescription } from './resources/teamwork-deleted-team';
import { teamworkActionsDescription } from './resources/teamwork-actions';
import { teamworkFunctionsDescription } from './resources/teamwork-functions';
import { teamworkTeamworkDeviceDescription } from './resources/teamwork-teamwork-device';
import { teamworkTeamsAppSettingsDescription } from './resources/teamwork-teams-app-settings';
import { teamworkTeamTemplateDescription } from './resources/teamwork-team-template';
import { teamworkWorkforceIntegrationDescription } from './resources/teamwork-workforce-integration';
import { tenantRelationshipsTenantRelationshipDescription } from './resources/tenant-relationships-tenant-relationship';
import { tenantRelationshipsDelegatedAdminCustomerDescription } from './resources/tenant-relationships-delegated-admin-customer';
import { tenantRelationshipsDelegatedAdminRelationshipDescription } from './resources/tenant-relationships-delegated-admin-relationship';
import { tenantRelationshipsManagedTenantDescription } from './resources/tenant-relationships-managed-tenant';
import { tenantRelationshipsActionsDescription } from './resources/tenant-relationships-actions';
import { tenantRelationshipsFunctionsDescription } from './resources/tenant-relationships-functions';
import { termStoreStoreDescription } from './resources/term-store-store';
import { termStoreGroupDescription } from './resources/term-store-group';
import { termStoreSetDescription } from './resources/term-store-set';
import { threatSubmissionThreatSubmissionRootDescription } from './resources/threat-submission-threat-submission-root';
import { threatSubmissionEmailThreatSubmissionDescription } from './resources/threat-submission-email-threat-submission';
import { threatSubmissionEmailThreatSubmissionPolicyDescription } from './resources/threat-submission-email-threat-submission-policy';
import { threatSubmissionFileThreatSubmissionDescription } from './resources/threat-submission-file-threat-submission';
import { threatSubmissionUrlThreatSubmissionDescription } from './resources/threat-submission-url-threat-submission';
import { trustFrameworkTrustFrameworkDescription } from './resources/trust-framework-trust-framework';
import { trustFrameworkTrustFrameworkKeySetDescription } from './resources/trust-framework-trust-framework-key-set';
import { trustFrameworkActionsDescription } from './resources/trust-framework-actions';
import { trustFrameworkFunctionsDescription } from './resources/trust-framework-functions';
import { trustFrameworkTrustFrameworkPolicyDescription } from './resources/trust-framework-trust-framework-policy';
import { usersUserDescription } from './resources/users-user';
import { usersUserActivityDescription } from './resources/users-user-activity';
import { usersFunctionsDescription } from './resources/users-functions';
import { usersAgreementAcceptanceDescription } from './resources/users-agreement-acceptance';
import { usersUserAnalyticsDescription } from './resources/users-user-analytics';
import { usersAppConsentRequestDescription } from './resources/users-app-consent-request';
import { usersServicePrincipalDescription } from './resources/users-service-principal';
import { usersAppRoleAssignmentDescription } from './resources/users-app-role-assignment';
import { usersApprovalDescription } from './resources/users-approval';
import { usersAuthenticationDescription } from './resources/users-authentication';
import { usersActionsDescription } from './resources/users-actions';
import { usersCalendarDescription } from './resources/users-calendar';
import { usersCalendarGroupDescription } from './resources/users-calendar-group';
import { usersEventDescription } from './resources/users-event';
import { usersChatDescription } from './resources/users-chat';
import { usersCloudPcDescription } from './resources/users-cloud-pc';
import { usersContactFolderDescription } from './resources/users-contact-folder';
import { usersContactDescription } from './resources/users-contact';
import { usersDirectoryObjectDescription } from './resources/users-directory-object';
import { usersDeviceEnrollmentConfigurationDescription } from './resources/users-device-enrollment-configuration';
import { usersDeviceManagementTroubleshootingEventDescription } from './resources/users-device-management-troubleshooting-event';
import { usersDeviceDescription } from './resources/users-device';
import { usersDriveDescription } from './resources/users-drive';
import { usersExtensionDescription } from './resources/users-extension';
import { usersSiteDescription } from './resources/users-site';
import { usersInferenceClassificationDescription } from './resources/users-inference-classification';
import { usersInformationProtectionDescription } from './resources/users-information-protection';
import { usersItemInsightsDescription } from './resources/users-item-insights';
import { usersGroupDescription } from './resources/users-group';
import { usersTeamDescription } from './resources/users-team';
import { usersLicenseDetailsDescription } from './resources/users-license-details';
import { usersMailFolderDescription } from './resources/users-mail-folder';
import { usersManagedAppRegistrationDescription } from './resources/users-managed-app-registration';
import { usersManagedDeviceDescription } from './resources/users-managed-device';
import { usersMessageDescription } from './resources/users-message';
import { usersMobileAppIntentAndStateDescription } from './resources/users-mobile-app-intent-and-state';
import { usersMobileAppTroubleshootingEventDescription } from './resources/users-mobile-app-troubleshooting-event';
import { usersNotificationDescription } from './resources/users-notification';
import { usersOAuth2PermissionGrantDescription } from './resources/users-o-auth-2-permission-grant';
import { usersOnenoteDescription } from './resources/users-onenote';
import { usersOnlineMeetingDescription } from './resources/users-online-meeting';
import { usersOutlookUserDescription } from './resources/users-outlook-user';
import { usersAccessReviewInstanceDescription } from './resources/users-access-review-instance';
import { usersPersonDescription } from './resources/users-person';
import { usersProfilePhotoDescription } from './resources/users-profile-photo';
import { usersPlannerUserDescription } from './resources/users-planner-user';
import { usersPresenceDescription } from './resources/users-presence';
import { usersProfileDescription } from './resources/users-profile';
import { usersScopedRoleMembershipDescription } from './resources/users-scoped-role-membership';
import { usersSecurityDescription } from './resources/users-security';
import { usersUserSettingsDescription } from './resources/users-user-settings';
import { usersUserTeamworkDescription } from './resources/users-user-teamwork';
import { usersTodoDescription } from './resources/users-todo';
import { usersUsageRightDescription } from './resources/users-usage-right';
import { usersWindowsInformationProtectionDeviceRegistrationDescription } from './resources/users-windows-information-protection-device-registration';
import { defaultDescription } from './resources/default';

export class MicrosoftGraphBeta implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'microsoft-graph-beta',
		name: 'N8nDevMicrosoftGraphBeta',
		icon: { light: 'file:./microsoft-graph-beta.png', dark: 'file:./microsoft-graph-beta.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'This OData service is located at https://graph.microsoft.com/beta',
		defaults: { name: 'microsoft-graph-beta' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevMicrosoftGraphBetaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Access Review Decisions Access Review Decision",
					"value": "Access Review Decisions Access Review Decision",
					"description": ""
				},
				{
					"name": "Access Reviews Access Review",
					"value": "Access Reviews Access Review",
					"description": ""
				},
				{
					"name": "Access Reviews Access Review Decision",
					"value": "Access Reviews Access Review Decision",
					"description": ""
				},
				{
					"name": "Access Reviews Actions",
					"value": "Access Reviews Actions",
					"description": ""
				},
				{
					"name": "Access Reviews Access Review Reviewer",
					"value": "Access Reviews Access Review Reviewer",
					"description": ""
				},
				{
					"name": "Activitystatistics Activity Statistics",
					"value": "Activitystatistics Activity Statistics",
					"description": ""
				},
				{
					"name": "Admin Admin",
					"value": "Admin Admin",
					"description": ""
				},
				{
					"name": "Admin Edge",
					"value": "Admin Edge",
					"description": ""
				},
				{
					"name": "Admin Actions",
					"value": "Admin Actions",
					"description": ""
				},
				{
					"name": "Admin Admin Report Settings",
					"value": "Admin Admin Report Settings",
					"description": ""
				},
				{
					"name": "Admin Service Announcement",
					"value": "Admin Service Announcement",
					"description": ""
				},
				{
					"name": "Admin Functions",
					"value": "Admin Functions",
					"description": ""
				},
				{
					"name": "Admin Sharepoint",
					"value": "Admin Sharepoint",
					"description": ""
				},
				{
					"name": "Admin Admin Windows",
					"value": "Admin Admin Windows",
					"description": ""
				},
				{
					"name": "Administrative Units Administrative Unit",
					"value": "Administrative Units Administrative Unit",
					"description": ""
				},
				{
					"name": "Administrative Units Extension",
					"value": "Administrative Units Extension",
					"description": ""
				},
				{
					"name": "Administrative Units Directory Object",
					"value": "Administrative Units Directory Object",
					"description": ""
				},
				{
					"name": "Directory Object Application",
					"value": "Directory Object Application",
					"description": ""
				},
				{
					"name": "Directory Object Device",
					"value": "Directory Object Device",
					"description": ""
				},
				{
					"name": "Directory Object Group",
					"value": "Directory Object Group",
					"description": ""
				},
				{
					"name": "Directory Object Org Contact",
					"value": "Directory Object Org Contact",
					"description": ""
				},
				{
					"name": "Directory Object Service Principal",
					"value": "Directory Object Service Principal",
					"description": ""
				},
				{
					"name": "Directory Object User",
					"value": "Directory Object User",
					"description": ""
				},
				{
					"name": "Administrative Units Actions",
					"value": "Administrative Units Actions",
					"description": ""
				},
				{
					"name": "Administrative Units Scoped Role Membership",
					"value": "Administrative Units Scoped Role Membership",
					"description": ""
				},
				{
					"name": "Administrative Units Functions",
					"value": "Administrative Units Functions",
					"description": ""
				},
				{
					"name": "Agreement Acceptances Agreement Acceptance",
					"value": "Agreement Acceptances Agreement Acceptance",
					"description": ""
				},
				{
					"name": "Agreements Agreement",
					"value": "Agreements Agreement",
					"description": ""
				},
				{
					"name": "Agreements Agreement Acceptance",
					"value": "Agreements Agreement Acceptance",
					"description": ""
				},
				{
					"name": "Agreements Agreement File",
					"value": "Agreements Agreement File",
					"description": ""
				},
				{
					"name": "Agreements Agreement File Localization",
					"value": "Agreements Agreement File Localization",
					"description": ""
				},
				{
					"name": "Allowed Data Locations Allowed Data Location",
					"value": "Allowed Data Locations Allowed Data Location",
					"description": ""
				},
				{
					"name": "App Comms Application",
					"value": "App Comms Application",
					"description": ""
				},
				{
					"name": "App Call",
					"value": "App Call",
					"description": ""
				},
				{
					"name": "App Actions",
					"value": "App Actions",
					"description": ""
				},
				{
					"name": "App Online Meeting",
					"value": "App Online Meeting",
					"description": ""
				},
				{
					"name": "App Catalogs App Catalogs",
					"value": "App Catalogs App Catalogs",
					"description": ""
				},
				{
					"name": "App Catalogs Teams App",
					"value": "App Catalogs Teams App",
					"description": ""
				},
				{
					"name": "Applications Application",
					"value": "Applications Application",
					"description": ""
				},
				{
					"name": "Applications App Management Policy",
					"value": "Applications App Management Policy",
					"description": ""
				},
				{
					"name": "Applications Connector Group",
					"value": "Applications Connector Group",
					"description": ""
				},
				{
					"name": "Applications Directory Object",
					"value": "Applications Directory Object",
					"description": ""
				},
				{
					"name": "Applications Extension Property",
					"value": "Applications Extension Property",
					"description": ""
				},
				{
					"name": "Applications Federated Identity Credential",
					"value": "Applications Federated Identity Credential",
					"description": ""
				},
				{
					"name": "Applications Home Realm Discovery Policy",
					"value": "Applications Home Realm Discovery Policy",
					"description": ""
				},
				{
					"name": "Applications Actions",
					"value": "Applications Actions",
					"description": ""
				},
				{
					"name": "Directory Object Endpoint",
					"value": "Directory Object Endpoint",
					"description": ""
				},
				{
					"name": "Applications Synchronization",
					"value": "Applications Synchronization",
					"description": ""
				},
				{
					"name": "Applications Functions",
					"value": "Applications Functions",
					"description": ""
				},
				{
					"name": "Applications Token Issuance Policy",
					"value": "Applications Token Issuance Policy",
					"description": ""
				},
				{
					"name": "Applications Token Lifetime Policy",
					"value": "Applications Token Lifetime Policy",
					"description": ""
				},
				{
					"name": "Application Templates Application Template",
					"value": "Application Templates Application Template",
					"description": ""
				},
				{
					"name": "Application Templates Actions",
					"value": "Application Templates Actions",
					"description": ""
				},
				{
					"name": "App Role Assignments App Role Assignment",
					"value": "App Role Assignments App Role Assignment",
					"description": ""
				},
				{
					"name": "Approval Workflow Providers Approval Workflow Provider",
					"value": "Approval Workflow Providers Approval Workflow Provider",
					"description": ""
				},
				{
					"name": "Approval Workflow Providers Business Flow",
					"value": "Approval Workflow Providers Business Flow",
					"description": ""
				},
				{
					"name": "Approval Workflow Providers Actions",
					"value": "Approval Workflow Providers Actions",
					"description": ""
				},
				{
					"name": "Approval Workflow Providers Governance Policy Template",
					"value": "Approval Workflow Providers Governance Policy Template",
					"description": ""
				},
				{
					"name": "Audit Logs Audit Log Root",
					"value": "Audit Logs Audit Log Root",
					"description": ""
				},
				{
					"name": "Audit Logs Directory Audit",
					"value": "Audit Logs Directory Audit",
					"description": ""
				},
				{
					"name": "Audit Logs Provisioning Object Summary",
					"value": "Audit Logs Provisioning Object Summary",
					"description": ""
				},
				{
					"name": "Audit Logs Sign In",
					"value": "Audit Logs Sign In",
					"description": ""
				},
				{
					"name": "Audit Logs Actions",
					"value": "Audit Logs Actions",
					"description": ""
				},
				{
					"name": "Authentication Method Configurations Authentication Method Configuration",
					"value": "Authentication Method Configurations Authentication Method Configuration",
					"description": ""
				},
				{
					"name": "Authentication Methods Policy Authentication Methods Policy",
					"value": "Authentication Methods Policy Authentication Methods Policy",
					"description": ""
				},
				{
					"name": "Authentication Methods Policy Authentication Method Configuration",
					"value": "Authentication Methods Policy Authentication Method Configuration",
					"description": ""
				},
				{
					"name": "Booking Businesses Booking Business",
					"value": "Booking Businesses Booking Business",
					"description": ""
				},
				{
					"name": "Booking Businesses Booking Appointment",
					"value": "Booking Businesses Booking Appointment",
					"description": ""
				},
				{
					"name": "Booking Businesses Actions",
					"value": "Booking Businesses Actions",
					"description": ""
				},
				{
					"name": "Booking Businesses Booking Customer",
					"value": "Booking Businesses Booking Customer",
					"description": ""
				},
				{
					"name": "Booking Businesses Booking Custom Question",
					"value": "Booking Businesses Booking Custom Question",
					"description": ""
				},
				{
					"name": "Booking Businesses Booking Service",
					"value": "Booking Businesses Booking Service",
					"description": ""
				},
				{
					"name": "Booking Businesses Booking Staff Member",
					"value": "Booking Businesses Booking Staff Member",
					"description": ""
				},
				{
					"name": "Booking Currencies Booking Currency",
					"value": "Booking Currencies Booking Currency",
					"description": ""
				},
				{
					"name": "Branding Organizational Branding",
					"value": "Branding Organizational Branding",
					"description": ""
				},
				{
					"name": "Branding Organizational Branding Localization",
					"value": "Branding Organizational Branding Localization",
					"description": ""
				},
				{
					"name": "Business Flow Templates Business Flow Template",
					"value": "Business Flow Templates Business Flow Template",
					"description": ""
				},
				{
					"name": "Certificate Based Auth Configuration Certificate Based Auth Configuration",
					"value": "Certificate Based Auth Configuration Certificate Based Auth Configuration",
					"description": ""
				},
				{
					"name": "Chats Chat",
					"value": "Chats Chat",
					"description": ""
				},
				{
					"name": "Chats Teams App Installation",
					"value": "Chats Teams App Installation",
					"description": ""
				},
				{
					"name": "Chats Actions",
					"value": "Chats Actions",
					"description": ""
				},
				{
					"name": "Chats Chat Message Info",
					"value": "Chats Chat Message Info",
					"description": ""
				},
				{
					"name": "Chats Conversation Member",
					"value": "Chats Conversation Member",
					"description": ""
				},
				{
					"name": "Chats Chat Message",
					"value": "Chats Chat Message",
					"description": ""
				},
				{
					"name": "Chats Functions",
					"value": "Chats Functions",
					"description": ""
				},
				{
					"name": "Chats Teams Async Operation",
					"value": "Chats Teams Async Operation",
					"description": ""
				},
				{
					"name": "Chats Resource Specific Permission Grant",
					"value": "Chats Resource Specific Permission Grant",
					"description": ""
				},
				{
					"name": "Chats Pinned Chat Message Info",
					"value": "Chats Pinned Chat Message Info",
					"description": ""
				},
				{
					"name": "Chats Teams Tab",
					"value": "Chats Teams Tab",
					"description": ""
				},
				{
					"name": "Commands Command",
					"value": "Commands Command",
					"description": ""
				},
				{
					"name": "Commands Payload Response",
					"value": "Commands Payload Response",
					"description": ""
				},
				{
					"name": "Communications Cloud Communications",
					"value": "Communications Cloud Communications",
					"description": ""
				},
				{
					"name": "Communications Call Record",
					"value": "Communications Call Record",
					"description": ""
				},
				{
					"name": "Communications Functions",
					"value": "Communications Functions",
					"description": ""
				},
				{
					"name": "Communications Call",
					"value": "Communications Call",
					"description": ""
				},
				{
					"name": "Communications Actions",
					"value": "Communications Actions",
					"description": ""
				},
				{
					"name": "Communications Online Meeting",
					"value": "Communications Online Meeting",
					"description": ""
				},
				{
					"name": "Communications Presence",
					"value": "Communications Presence",
					"description": ""
				},
				{
					"name": "Compliance Compliance",
					"value": "Compliance Compliance",
					"description": ""
				},
				{
					"name": "Connections External Connection",
					"value": "Connections External Connection",
					"description": ""
				},
				{
					"name": "Connections External Group",
					"value": "Connections External Group",
					"description": ""
				},
				{
					"name": "Connections External Item",
					"value": "Connections External Item",
					"description": ""
				},
				{
					"name": "Connections Actions",
					"value": "Connections Actions",
					"description": ""
				},
				{
					"name": "Connections Connection Operation",
					"value": "Connections Connection Operation",
					"description": ""
				},
				{
					"name": "Connections Connection Quota",
					"value": "Connections Connection Quota",
					"description": ""
				},
				{
					"name": "Connections Schema",
					"value": "Connections Schema",
					"description": ""
				},
				{
					"name": "Contacts Org Contact",
					"value": "Contacts Org Contact",
					"description": ""
				},
				{
					"name": "Contacts Directory Object",
					"value": "Contacts Directory Object",
					"description": ""
				},
				{
					"name": "Contacts Actions",
					"value": "Contacts Actions",
					"description": ""
				},
				{
					"name": "Contacts Functions",
					"value": "Contacts Functions",
					"description": ""
				},
				{
					"name": "Contracts Contract",
					"value": "Contracts Contract",
					"description": ""
				},
				{
					"name": "Contracts Actions",
					"value": "Contracts Actions",
					"description": ""
				},
				{
					"name": "Data Classification Data Classification Service",
					"value": "Data Classification Data Classification Service",
					"description": ""
				},
				{
					"name": "Data Classification Job Response Base",
					"value": "Data Classification Job Response Base",
					"description": ""
				},
				{
					"name": "Data Classification Exact Match Data Store",
					"value": "Data Classification Exact Match Data Store",
					"description": ""
				},
				{
					"name": "Data Classification Actions",
					"value": "Data Classification Actions",
					"description": ""
				},
				{
					"name": "Data Classification Exact Match Upload Agent",
					"value": "Data Classification Exact Match Upload Agent",
					"description": ""
				},
				{
					"name": "Data Classification Sensitive Type",
					"value": "Data Classification Sensitive Type",
					"description": ""
				},
				{
					"name": "Data Classification Sensitivity Label",
					"value": "Data Classification Sensitivity Label",
					"description": ""
				},
				{
					"name": "Data Policy Operations Data Policy Operation",
					"value": "Data Policy Operations Data Policy Operation",
					"description": ""
				},
				{
					"name": "Device App Management Device App Management",
					"value": "Device App Management Device App Management",
					"description": ""
				},
				{
					"name": "Device App Management Android Managed App Protection",
					"value": "Device App Management Android Managed App Protection",
					"description": ""
				},
				{
					"name": "Device App Management Actions",
					"value": "Device App Management Actions",
					"description": ""
				},
				{
					"name": "Device App Management Default Managed App Protection",
					"value": "Device App Management Default Managed App Protection",
					"description": ""
				},
				{
					"name": "Device App Management Device App Management Task",
					"value": "Device App Management Device App Management Task",
					"description": ""
				},
				{
					"name": "Device App Management Enterprise Code Signing Certificate",
					"value": "Device App Management Enterprise Code Signing Certificate",
					"description": ""
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configuration",
					"value": "Device App Management Ios Lob App Provisioning Configuration",
					"description": ""
				},
				{
					"name": "Device App Management Ios Managed App Protection",
					"value": "Device App Management Ios Managed App Protection",
					"description": ""
				},
				{
					"name": "Device App Management Managed App Policy",
					"value": "Device App Management Managed App Policy",
					"description": ""
				},
				{
					"name": "Device App Management Managed App Registration",
					"value": "Device App Management Managed App Registration",
					"description": ""
				},
				{
					"name": "Device App Management Functions",
					"value": "Device App Management Functions",
					"description": ""
				},
				{
					"name": "Device App Management Managed App Status",
					"value": "Device App Management Managed App Status",
					"description": ""
				},
				{
					"name": "Device App Management Managed E Book Category",
					"value": "Device App Management Managed E Book Category",
					"description": ""
				},
				{
					"name": "Device App Management Managed E Book",
					"value": "Device App Management Managed E Book",
					"description": ""
				},
				{
					"name": "Device App Management Mdm Windows Information Protection Policy",
					"value": "Device App Management Mdm Windows Information Protection Policy",
					"description": ""
				},
				{
					"name": "Device App Management Mobile App Category",
					"value": "Device App Management Mobile App Category",
					"description": ""
				},
				{
					"name": "Device App Management Managed Device Mobile App Configuration",
					"value": "Device App Management Managed Device Mobile App Configuration",
					"description": ""
				},
				{
					"name": "Device App Management Mobile App",
					"value": "Device App Management Mobile App",
					"description": ""
				},
				{
					"name": "Mobile App Managed Mobile Lob App",
					"value": "Mobile App Managed Mobile Lob App",
					"description": ""
				},
				{
					"name": "Mobile App Mobile Lob App",
					"value": "Mobile App Mobile Lob App",
					"description": ""
				},
				{
					"name": "Device App Management Policy Set",
					"value": "Device App Management Policy Set",
					"description": ""
				},
				{
					"name": "Device App Management Symantec Code Signing Certificate",
					"value": "Device App Management Symantec Code Signing Certificate",
					"description": ""
				},
				{
					"name": "Device App Management Targeted Managed App Configuration",
					"value": "Device App Management Targeted Managed App Configuration",
					"description": ""
				},
				{
					"name": "Device App Management Vpp Token",
					"value": "Device App Management Vpp Token",
					"description": ""
				},
				{
					"name": "Device App Management Windows Defender Application Control Supplemental Policy",
					"value": "Device App Management Windows Defender Application Control Supplemental Policy",
					"description": ""
				},
				{
					"name": "Device App Management Windows Information Protection Device Registration",
					"value": "Device App Management Windows Information Protection Device Registration",
					"description": ""
				},
				{
					"name": "Device App Management Windows Information Protection Policy",
					"value": "Device App Management Windows Information Protection Policy",
					"description": ""
				},
				{
					"name": "Device App Management Windows Information Protection Wipe Action",
					"value": "Device App Management Windows Information Protection Wipe Action",
					"description": ""
				},
				{
					"name": "Device App Management Windows Managed App Protection",
					"value": "Device App Management Windows Managed App Protection",
					"description": ""
				},
				{
					"name": "Device App Management Windows Management App",
					"value": "Device App Management Windows Management App",
					"description": ""
				},
				{
					"name": "Device Management Device Management",
					"value": "Device Management Device Management",
					"description": ""
				},
				{
					"name": "Device Management Advanced Threat Protection Onboarding State Summary",
					"value": "Device Management Advanced Threat Protection Onboarding State Summary",
					"description": ""
				},
				{
					"name": "Device Management Android Device Owner Enrollment Profile",
					"value": "Device Management Android Device Owner Enrollment Profile",
					"description": ""
				},
				{
					"name": "Device Management Actions",
					"value": "Device Management Actions",
					"description": ""
				},
				{
					"name": "Device Management Android For Work App Configuration Schema",
					"value": "Device Management Android For Work App Configuration Schema",
					"description": ""
				},
				{
					"name": "Device Management Android For Work Enrollment Profile",
					"value": "Device Management Android For Work Enrollment Profile",
					"description": ""
				},
				{
					"name": "Device Management Android For Work Settings",
					"value": "Device Management Android For Work Settings",
					"description": ""
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings",
					"value": "Device Management Android Managed Store Account Enterprise Settings",
					"description": ""
				},
				{
					"name": "Device Management Android Managed Store App Configuration Schema",
					"value": "Device Management Android Managed Store App Configuration Schema",
					"description": ""
				},
				{
					"name": "Device Management Apple Push Notification Certificate",
					"value": "Device Management Apple Push Notification Certificate",
					"description": ""
				},
				{
					"name": "Device Management Functions",
					"value": "Device Management Functions",
					"description": ""
				},
				{
					"name": "Device Management Apple User Initiated Enrollment Profile",
					"value": "Device Management Apple User Initiated Enrollment Profile",
					"description": ""
				},
				{
					"name": "Device Management Device And App Management Assignment Filter",
					"value": "Device Management Device And App Management Assignment Filter",
					"description": ""
				},
				{
					"name": "Device Management Audit Event",
					"value": "Device Management Audit Event",
					"description": ""
				},
				{
					"name": "Device Management Device Management Autopilot Event",
					"value": "Device Management Device Management Autopilot Event",
					"description": ""
				},
				{
					"name": "Device Management Cart To Class Association",
					"value": "Device Management Cart To Class Association",
					"description": ""
				},
				{
					"name": "Device Management Device Management Setting Category",
					"value": "Device Management Device Management Setting Category",
					"description": ""
				},
				{
					"name": "Device Management Certificate Connector Details",
					"value": "Device Management Certificate Connector Details",
					"description": ""
				},
				{
					"name": "Device Management Chrome OS Onboarding Settings",
					"value": "Device Management Chrome OS Onboarding Settings",
					"description": ""
				},
				{
					"name": "Device Management Cloud PC Connectivity Issue",
					"value": "Device Management Cloud PC Connectivity Issue",
					"description": ""
				},
				{
					"name": "Device Management Managed Device",
					"value": "Device Management Managed Device",
					"description": ""
				},
				{
					"name": "Device Management Comanagement Eligible Device",
					"value": "Device Management Comanagement Eligible Device",
					"description": ""
				},
				{
					"name": "Device Management Device Management Configuration Category",
					"value": "Device Management Device Management Configuration Category",
					"description": ""
				},
				{
					"name": "Device Management Compliance Management Partner",
					"value": "Device Management Compliance Management Partner",
					"description": ""
				},
				{
					"name": "Device Management Device Management Compliance Policy",
					"value": "Device Management Device Management Compliance Policy",
					"description": ""
				},
				{
					"name": "Device Management Device Management Configuration Setting Definition",
					"value": "Device Management Device Management Configuration Setting Definition",
					"description": ""
				},
				{
					"name": "Device Management On Premises Conditional Access Settings",
					"value": "Device Management On Premises Conditional Access Settings",
					"description": ""
				},
				{
					"name": "Device Management Config Manager Collection",
					"value": "Device Management Config Manager Collection",
					"description": ""
				},
				{
					"name": "Device Management Device Management Configuration Policy",
					"value": "Device Management Device Management Configuration Policy",
					"description": ""
				},
				{
					"name": "Device Management Device Management Configuration Policy Template",
					"value": "Device Management Device Management Configuration Policy Template",
					"description": ""
				},
				{
					"name": "Device Management Data Sharing Consent",
					"value": "Device Management Data Sharing Consent",
					"description": ""
				},
				{
					"name": "Device Management Dep Onboarding Setting",
					"value": "Device Management Dep Onboarding Setting",
					"description": ""
				},
				{
					"name": "Device Management Device Management Derived Credential Settings",
					"value": "Device Management Device Management Derived Credential Settings",
					"description": ""
				},
				{
					"name": "Device Management Detected App",
					"value": "Device Management Detected App",
					"description": ""
				},
				{
					"name": "Device Management Device Category",
					"value": "Device Management Device Category",
					"description": ""
				},
				{
					"name": "Device Management Device Compliance Policy",
					"value": "Device Management Device Compliance Policy",
					"description": ""
				},
				{
					"name": "Device Management Device Compliance Policy Device State Summary",
					"value": "Device Management Device Compliance Policy Device State Summary",
					"description": ""
				},
				{
					"name": "Device Management Device Compliance Policy Setting State Summary",
					"value": "Device Management Device Compliance Policy Setting State Summary",
					"description": ""
				},
				{
					"name": "Device Management Device Compliance Script",
					"value": "Device Management Device Compliance Script",
					"description": ""
				},
				{
					"name": "Device Management Device Configuration Conflict Summary",
					"value": "Device Management Device Configuration Conflict Summary",
					"description": ""
				},
				{
					"name": "Device Management Device Configuration Device State Summary",
					"value": "Device Management Device Configuration Device State Summary",
					"description": ""
				},
				{
					"name": "Device Management Restricted Apps Violation",
					"value": "Device Management Restricted Apps Violation",
					"description": ""
				},
				{
					"name": "Device Management Device Configuration",
					"value": "Device Management Device Configuration",
					"description": ""
				},
				{
					"name": "Device Management Managed All Device Certificate State",
					"value": "Device Management Managed All Device Certificate State",
					"description": ""
				},
				{
					"name": "Device Management Device Configuration User State Summary",
					"value": "Device Management Device Configuration User State Summary",
					"description": ""
				},
				{
					"name": "Device Management Device Custom Attribute Shell Script",
					"value": "Device Management Device Custom Attribute Shell Script",
					"description": ""
				},
				{
					"name": "Device Management Device Enrollment Configuration",
					"value": "Device Management Device Enrollment Configuration",
					"description": ""
				},
				{
					"name": "Device Management Device Health Script",
					"value": "Device Management Device Health Script",
					"description": ""
				},
				{
					"name": "Device Management Device Management Partner",
					"value": "Device Management Device Management Partner",
					"description": ""
				},
				{
					"name": "Device Management Device Management Script",
					"value": "Device Management Device Management Script",
					"description": ""
				},
				{
					"name": "Device Management Device Shell Script",
					"value": "Device Management Device Shell Script",
					"description": ""
				},
				{
					"name": "Device Management Device Management Domain Join Connector",
					"value": "Device Management Device Management Domain Join Connector",
					"description": ""
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pool",
					"value": "Device Management Embedded SIM Activation Code Pool",
					"description": ""
				},
				{
					"name": "Device Management Device Management Exchange Connector",
					"value": "Device Management Device Management Exchange Connector",
					"description": ""
				},
				{
					"name": "Device Management Device Management Exchange On Premises Policy",
					"value": "Device Management Device Management Exchange On Premises Policy",
					"description": ""
				},
				{
					"name": "Device Management Group Policy Category",
					"value": "Device Management Group Policy Category",
					"description": ""
				},
				{
					"name": "Device Management Group Policy Configuration",
					"value": "Device Management Group Policy Configuration",
					"description": ""
				},
				{
					"name": "Device Management Group Policy Definition File",
					"value": "Device Management Group Policy Definition File",
					"description": ""
				},
				{
					"name": "Device Management Group Policy Definition",
					"value": "Device Management Group Policy Definition",
					"description": ""
				},
				{
					"name": "Device Management Group Policy Migration Report",
					"value": "Device Management Group Policy Migration Report",
					"description": ""
				},
				{
					"name": "Device Management Group Policy Object File",
					"value": "Device Management Group Policy Object File",
					"description": ""
				},
				{
					"name": "Device Management Group Policy Uploaded Definition File",
					"value": "Device Management Group Policy Uploaded Definition File",
					"description": ""
				},
				{
					"name": "Device Management Imported Device Identity",
					"value": "Device Management Imported Device Identity",
					"description": ""
				},
				{
					"name": "Device Management Imported Windows Autopilot Device Identity",
					"value": "Device Management Imported Windows Autopilot Device Identity",
					"description": ""
				},
				{
					"name": "Device Management Device Management Intent",
					"value": "Device Management Device Management Intent",
					"description": ""
				},
				{
					"name": "Device Management Intune Branding Profile",
					"value": "Device Management Intune Branding Profile",
					"description": ""
				},
				{
					"name": "Device Management Ios Update Device Status",
					"value": "Device Management Ios Update Device Status",
					"description": ""
				},
				{
					"name": "Device Management Mac OS Software Update Account Summary",
					"value": "Device Management Mac OS Software Update Account Summary",
					"description": ""
				},
				{
					"name": "Device Management Managed Device Encryption State",
					"value": "Device Management Managed Device Encryption State",
					"description": ""
				},
				{
					"name": "Device Management Managed Device Overview",
					"value": "Device Management Managed Device Overview",
					"description": ""
				},
				{
					"name": "Device Management Microsoft Tunnel Configuration",
					"value": "Device Management Microsoft Tunnel Configuration",
					"description": ""
				},
				{
					"name": "Device Management Microsoft Tunnel Health Threshold",
					"value": "Device Management Microsoft Tunnel Health Threshold",
					"description": ""
				},
				{
					"name": "Device Management Microsoft Tunnel Server Log Collection Response",
					"value": "Device Management Microsoft Tunnel Server Log Collection Response",
					"description": ""
				},
				{
					"name": "Device Management Microsoft Tunnel Site",
					"value": "Device Management Microsoft Tunnel Site",
					"description": ""
				},
				{
					"name": "Device Management Mobile App Troubleshooting Event",
					"value": "Device Management Mobile App Troubleshooting Event",
					"description": ""
				},
				{
					"name": "Device Management Mobile Threat Defense Connector",
					"value": "Device Management Mobile Threat Defense Connector",
					"description": ""
				},
				{
					"name": "Device Management Monitoring",
					"value": "Device Management Monitoring",
					"description": ""
				},
				{
					"name": "Device Management Ndes Connector",
					"value": "Device Management Ndes Connector",
					"description": ""
				},
				{
					"name": "Device Management Notification Message Template",
					"value": "Device Management Notification Message Template",
					"description": ""
				},
				{
					"name": "Device Management Oem Warranty Information Onboarding",
					"value": "Device Management Oem Warranty Information Onboarding",
					"description": ""
				},
				{
					"name": "Device Management Remote Action Audit",
					"value": "Device Management Remote Action Audit",
					"description": ""
				},
				{
					"name": "Device Management Remote Assistance Partner",
					"value": "Device Management Remote Assistance Partner",
					"description": ""
				},
				{
					"name": "Device Management Remote Assistance Settings",
					"value": "Device Management Remote Assistance Settings",
					"description": ""
				},
				{
					"name": "Device Management Device Management Reports",
					"value": "Device Management Device Management Reports",
					"description": ""
				},
				{
					"name": "Device Management Device Management Resource Access Profile Base",
					"value": "Device Management Device Management Resource Access Profile Base",
					"description": ""
				},
				{
					"name": "Device Management Resource Operation",
					"value": "Device Management Resource Operation",
					"description": ""
				},
				{
					"name": "Device Management Device Management Reusable Policy Setting",
					"value": "Device Management Device Management Reusable Policy Setting",
					"description": ""
				},
				{
					"name": "Device Management Device And App Management Role Assignment",
					"value": "Device Management Device And App Management Role Assignment",
					"description": ""
				},
				{
					"name": "Device Management Role Definition",
					"value": "Device Management Role Definition",
					"description": ""
				},
				{
					"name": "Device Management Role Scope Tag",
					"value": "Device Management Role Scope Tag",
					"description": ""
				},
				{
					"name": "Device Management Service Now Connection",
					"value": "Device Management Service Now Connection",
					"description": ""
				},
				{
					"name": "Device Management Device Management Setting Definition",
					"value": "Device Management Device Management Setting Definition",
					"description": ""
				},
				{
					"name": "Device Management Software Update Status Summary",
					"value": "Device Management Software Update Status Summary",
					"description": ""
				},
				{
					"name": "Device Management Telecom Expense Management Partner",
					"value": "Device Management Telecom Expense Management Partner",
					"description": ""
				},
				{
					"name": "Device Management Device Management Template",
					"value": "Device Management Device Management Template",
					"description": ""
				},
				{
					"name": "Device Management Device Management Configuration Setting Template",
					"value": "Device Management Device Management Configuration Setting Template",
					"description": ""
				},
				{
					"name": "Device Management Tenant Attach RBAC",
					"value": "Device Management Tenant Attach RBAC",
					"description": ""
				},
				{
					"name": "Device Management Terms And Conditions",
					"value": "Device Management Terms And Conditions",
					"description": ""
				},
				{
					"name": "Device Management Device Management Troubleshooting Event",
					"value": "Device Management Device Management Troubleshooting Event",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Anomaly",
					"value": "Device Management User Experience Analytics Anomaly",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Anomaly Device",
					"value": "Device Management User Experience Analytics Anomaly Device",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health Application Performance",
					"value": "Device Management User Experience Analytics App Health Application Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health App Performance By App Version",
					"value": "Device Management User Experience Analytics App Health App Performance By App Version",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health App Performance By App Version Details",
					"value": "Device Management User Experience Analytics App Health App Performance By App Version Details",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health App Performance By App Version Device Id",
					"value": "Device Management User Experience Analytics App Health App Performance By App Version Device Id",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health App Performance By OS Version",
					"value": "Device Management User Experience Analytics App Health App Performance By OS Version",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health Device Model Performance",
					"value": "Device Management User Experience Analytics App Health Device Model Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health Device Performance",
					"value": "Device Management User Experience Analytics App Health Device Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health Device Performance Details",
					"value": "Device Management User Experience Analytics App Health Device Performance Details",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics App Health OS Version Performance",
					"value": "Device Management User Experience Analytics App Health OS Version Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Category",
					"value": "Device Management User Experience Analytics Category",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Baseline",
					"value": "Device Management User Experience Analytics Baseline",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Battery Health App Impact",
					"value": "Device Management User Experience Analytics Battery Health App Impact",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Battery Health Capacity Details",
					"value": "Device Management User Experience Analytics Battery Health Capacity Details",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Battery Health Device App Impact",
					"value": "Device Management User Experience Analytics Battery Health Device App Impact",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Battery Health Device Performance",
					"value": "Device Management User Experience Analytics Battery Health Device Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Battery Health Device Runtime History",
					"value": "Device Management User Experience Analytics Battery Health Device Runtime History",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Battery Health Model Performance",
					"value": "Device Management User Experience Analytics Battery Health Model Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Battery Health Os Performance",
					"value": "Device Management User Experience Analytics Battery Health Os Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Battery Health Runtime Details",
					"value": "Device Management User Experience Analytics Battery Health Runtime Details",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Metric History",
					"value": "Device Management User Experience Analytics Metric History",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Device Performance",
					"value": "Device Management User Experience Analytics Device Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Device Scope",
					"value": "Device Management User Experience Analytics Device Scope",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Device Scores",
					"value": "Device Management User Experience Analytics Device Scores",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Device Startup History",
					"value": "Device Management User Experience Analytics Device Startup History",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Device Startup Process",
					"value": "Device Management User Experience Analytics Device Startup Process",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Device Startup Process Performance",
					"value": "Device Management User Experience Analytics Device Startup Process Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Device Without Cloud Identity",
					"value": "Device Management User Experience Analytics Device Without Cloud Identity",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Device Timeline Event",
					"value": "Device Management User Experience Analytics Device Timeline Event",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Impacting Process",
					"value": "Device Management User Experience Analytics Impacting Process",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Model Scores",
					"value": "Device Management User Experience Analytics Model Scores",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Not Autopilot Ready Device",
					"value": "Device Management User Experience Analytics Not Autopilot Ready Device",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Overview",
					"value": "Device Management User Experience Analytics Overview",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Remote Connection",
					"value": "Device Management User Experience Analytics Remote Connection",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Resource Performance",
					"value": "Device Management User Experience Analytics Resource Performance",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Score History",
					"value": "Device Management User Experience Analytics Score History",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric",
					"value": "Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Work From Anywhere Metric",
					"value": "Device Management User Experience Analytics Work From Anywhere Metric",
					"description": ""
				},
				{
					"name": "Device Management User Experience Analytics Work From Anywhere Model Performance",
					"value": "Device Management User Experience Analytics Work From Anywhere Model Performance",
					"description": ""
				},
				{
					"name": "Device Management User PFX Certificate",
					"value": "Device Management User PFX Certificate",
					"description": ""
				},
				{
					"name": "Device Management Virtual Endpoint",
					"value": "Device Management Virtual Endpoint",
					"description": ""
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profile",
					"value": "Device Management Windows Autopilot Deployment Profile",
					"description": ""
				},
				{
					"name": "Device Management Windows Autopilot Device Identity",
					"value": "Device Management Windows Autopilot Device Identity",
					"description": ""
				},
				{
					"name": "Device Management Windows Autopilot Settings",
					"value": "Device Management Windows Autopilot Settings",
					"description": ""
				},
				{
					"name": "Device Management Windows Driver Update Profile",
					"value": "Device Management Windows Driver Update Profile",
					"description": ""
				},
				{
					"name": "Device Management Windows Feature Update Profile",
					"value": "Device Management Windows Feature Update Profile",
					"description": ""
				},
				{
					"name": "Device Management Windows Information Protection App Learning Summary",
					"value": "Device Management Windows Information Protection App Learning Summary",
					"description": ""
				},
				{
					"name": "Device Management Windows Information Protection Network Learning Summary",
					"value": "Device Management Windows Information Protection Network Learning Summary",
					"description": ""
				},
				{
					"name": "Device Management Windows Malware Information",
					"value": "Device Management Windows Malware Information",
					"description": ""
				},
				{
					"name": "Device Management Windows Quality Update Profile",
					"value": "Device Management Windows Quality Update Profile",
					"description": ""
				},
				{
					"name": "Device Management Windows Update Catalog Item",
					"value": "Device Management Windows Update Catalog Item",
					"description": ""
				},
				{
					"name": "Device Management Zebra Fota Artifact",
					"value": "Device Management Zebra Fota Artifact",
					"description": ""
				},
				{
					"name": "Device Management Zebra Fota Connector",
					"value": "Device Management Zebra Fota Connector",
					"description": ""
				},
				{
					"name": "Device Management Zebra Fota Deployment",
					"value": "Device Management Zebra Fota Deployment",
					"description": ""
				},
				{
					"name": "Devices Device",
					"value": "Devices Device",
					"description": ""
				},
				{
					"name": "Devices Command",
					"value": "Devices Command",
					"description": ""
				},
				{
					"name": "Devices Extension",
					"value": "Devices Extension",
					"description": ""
				},
				{
					"name": "Devices Directory Object",
					"value": "Devices Directory Object",
					"description": ""
				},
				{
					"name": "Devices Actions",
					"value": "Devices Actions",
					"description": ""
				},
				{
					"name": "Devices Usage Right",
					"value": "Devices Usage Right",
					"description": ""
				},
				{
					"name": "Devices Functions",
					"value": "Devices Functions",
					"description": ""
				},
				{
					"name": "Directory Directory",
					"value": "Directory Directory",
					"description": ""
				},
				{
					"name": "Directory Administrative Unit",
					"value": "Directory Administrative Unit",
					"description": ""
				},
				{
					"name": "Directory Actions",
					"value": "Directory Actions",
					"description": ""
				},
				{
					"name": "Directory Functions",
					"value": "Directory Functions",
					"description": ""
				},
				{
					"name": "Directory Attribute Set",
					"value": "Directory Attribute Set",
					"description": ""
				},
				{
					"name": "Directory Custom Security Attribute Definition",
					"value": "Directory Custom Security Attribute Definition",
					"description": ""
				},
				{
					"name": "Directory Directory Object",
					"value": "Directory Directory Object",
					"description": ""
				},
				{
					"name": "Directory Identity Provider Base",
					"value": "Directory Identity Provider Base",
					"description": ""
				},
				{
					"name": "Directory Impacted Resource",
					"value": "Directory Impacted Resource",
					"description": ""
				},
				{
					"name": "Directory Inbound Shared User Profile",
					"value": "Directory Inbound Shared User Profile",
					"description": ""
				},
				{
					"name": "Directory On Premises Directory Synchronization",
					"value": "Directory On Premises Directory Synchronization",
					"description": ""
				},
				{
					"name": "Directory Outbound Shared User Profile",
					"value": "Directory Outbound Shared User Profile",
					"description": ""
				},
				{
					"name": "Directory Recommendation",
					"value": "Directory Recommendation",
					"description": ""
				},
				{
					"name": "Directory Shared Email Domain",
					"value": "Directory Shared Email Domain",
					"description": ""
				},
				{
					"name": "Directory Objects Directory Object",
					"value": "Directory Objects Directory Object",
					"description": ""
				},
				{
					"name": "Directory Objects Actions",
					"value": "Directory Objects Actions",
					"description": ""
				},
				{
					"name": "Directory Roles Directory Role",
					"value": "Directory Roles Directory Role",
					"description": ""
				},
				{
					"name": "Directory Roles Directory Object",
					"value": "Directory Roles Directory Object",
					"description": ""
				},
				{
					"name": "Directory Roles Actions",
					"value": "Directory Roles Actions",
					"description": ""
				},
				{
					"name": "Directory Roles Scoped Role Membership",
					"value": "Directory Roles Scoped Role Membership",
					"description": ""
				},
				{
					"name": "Directory Roles Functions",
					"value": "Directory Roles Functions",
					"description": ""
				},
				{
					"name": "Directory Role Templates Directory Role Template",
					"value": "Directory Role Templates Directory Role Template",
					"description": ""
				},
				{
					"name": "Directory Role Templates Actions",
					"value": "Directory Role Templates Actions",
					"description": ""
				},
				{
					"name": "Directory Setting Templates Directory Setting Template",
					"value": "Directory Setting Templates Directory Setting Template",
					"description": ""
				},
				{
					"name": "Directory Setting Templates Actions",
					"value": "Directory Setting Templates Actions",
					"description": ""
				},
				{
					"name": "Domain Dns Records Domain Dns Record",
					"value": "Domain Dns Records Domain Dns Record",
					"description": ""
				},
				{
					"name": "Domains Domain",
					"value": "Domains Domain",
					"description": ""
				},
				{
					"name": "Domains Directory Object",
					"value": "Domains Directory Object",
					"description": ""
				},
				{
					"name": "Domains Internal Domain Federation",
					"value": "Domains Internal Domain Federation",
					"description": ""
				},
				{
					"name": "Domains Actions",
					"value": "Domains Actions",
					"description": ""
				},
				{
					"name": "Domains Domain Dns Record",
					"value": "Domains Domain Dns Record",
					"description": ""
				},
				{
					"name": "Domains Shared Email Domain Invitation",
					"value": "Domains Shared Email Domain Invitation",
					"description": ""
				},
				{
					"name": "Drives Drive",
					"value": "Drives Drive",
					"description": ""
				},
				{
					"name": "Drives Item Activity OLD",
					"value": "Drives Item Activity OLD",
					"description": ""
				},
				{
					"name": "Drives Drive Item",
					"value": "Drives Drive Item",
					"description": ""
				},
				{
					"name": "Drives Actions",
					"value": "Drives Actions",
					"description": ""
				},
				{
					"name": "Drives Functions",
					"value": "Drives Functions",
					"description": ""
				},
				{
					"name": "Drives List",
					"value": "Drives List",
					"description": ""
				},
				{
					"name": "Education Education Root",
					"value": "Education Education Root",
					"description": ""
				},
				{
					"name": "Education Education Class",
					"value": "Education Education Class",
					"description": ""
				},
				{
					"name": "Education Functions",
					"value": "Education Functions",
					"description": ""
				},
				{
					"name": "Education Actions",
					"value": "Education Actions",
					"description": ""
				},
				{
					"name": "Education Education User",
					"value": "Education Education User",
					"description": ""
				},
				{
					"name": "Education Education School",
					"value": "Education Education School",
					"description": ""
				},
				{
					"name": "Education Education Synchronization Profile",
					"value": "Education Education Synchronization Profile",
					"description": ""
				},
				{
					"name": "Employee Experience Employee Experience",
					"value": "Employee Experience Employee Experience",
					"description": ""
				},
				{
					"name": "Employee Experience Learning Provider",
					"value": "Employee Experience Learning Provider",
					"description": ""
				},
				{
					"name": "External External",
					"value": "External External",
					"description": ""
				},
				{
					"name": "External External Connection",
					"value": "External External Connection",
					"description": ""
				},
				{
					"name": "External Actions",
					"value": "External Actions",
					"description": ""
				},
				{
					"name": "Filter Operators Filter Operator Schema",
					"value": "Filter Operators Filter Operator Schema",
					"description": ""
				},
				{
					"name": "Financials Financials",
					"value": "Financials Financials",
					"description": ""
				},
				{
					"name": "Financials Company",
					"value": "Financials Company",
					"description": ""
				},
				{
					"name": "Financials Actions",
					"value": "Financials Actions",
					"description": ""
				},
				{
					"name": "Functions Attribute Mapping Function Schema",
					"value": "Functions Attribute Mapping Function Schema",
					"description": ""
				},
				{
					"name": "Governance Resources Governance Resource",
					"value": "Governance Resources Governance Resource",
					"description": ""
				},
				{
					"name": "Governance Resources Governance Role Assignment Request",
					"value": "Governance Resources Governance Role Assignment Request",
					"description": ""
				},
				{
					"name": "Governance Resources Actions",
					"value": "Governance Resources Actions",
					"description": ""
				},
				{
					"name": "Governance Resources Governance Role Assignment",
					"value": "Governance Resources Governance Role Assignment",
					"description": ""
				},
				{
					"name": "Governance Resources Functions",
					"value": "Governance Resources Functions",
					"description": ""
				},
				{
					"name": "Governance Resources Governance Role Definition",
					"value": "Governance Resources Governance Role Definition",
					"description": ""
				},
				{
					"name": "Governance Resources Governance Role Setting",
					"value": "Governance Resources Governance Role Setting",
					"description": ""
				},
				{
					"name": "Governance Role Assignment Requests Governance Role Assignment Request",
					"value": "Governance Role Assignment Requests Governance Role Assignment Request",
					"description": ""
				},
				{
					"name": "Governance Role Assignment Requests Actions",
					"value": "Governance Role Assignment Requests Actions",
					"description": ""
				},
				{
					"name": "Governance Role Assignment Requests Governance Resource",
					"value": "Governance Role Assignment Requests Governance Resource",
					"description": ""
				},
				{
					"name": "Governance Role Assignment Requests Governance Role Definition",
					"value": "Governance Role Assignment Requests Governance Role Definition",
					"description": ""
				},
				{
					"name": "Governance Role Assignment Requests Governance Subject",
					"value": "Governance Role Assignment Requests Governance Subject",
					"description": ""
				},
				{
					"name": "Governance Role Assignments Governance Role Assignment",
					"value": "Governance Role Assignments Governance Role Assignment",
					"description": ""
				},
				{
					"name": "Governance Role Assignments Governance Resource",
					"value": "Governance Role Assignments Governance Resource",
					"description": ""
				},
				{
					"name": "Governance Role Assignments Governance Role Definition",
					"value": "Governance Role Assignments Governance Role Definition",
					"description": ""
				},
				{
					"name": "Governance Role Assignments Governance Subject",
					"value": "Governance Role Assignments Governance Subject",
					"description": ""
				},
				{
					"name": "Governance Role Assignments Functions",
					"value": "Governance Role Assignments Functions",
					"description": ""
				},
				{
					"name": "Governance Role Definitions Governance Role Definition",
					"value": "Governance Role Definitions Governance Role Definition",
					"description": ""
				},
				{
					"name": "Governance Role Definitions Governance Resource",
					"value": "Governance Role Definitions Governance Resource",
					"description": ""
				},
				{
					"name": "Governance Role Definitions Governance Role Setting",
					"value": "Governance Role Definitions Governance Role Setting",
					"description": ""
				},
				{
					"name": "Governance Role Settings Governance Role Setting",
					"value": "Governance Role Settings Governance Role Setting",
					"description": ""
				},
				{
					"name": "Governance Role Settings Governance Resource",
					"value": "Governance Role Settings Governance Resource",
					"description": ""
				},
				{
					"name": "Governance Role Settings Governance Role Definition",
					"value": "Governance Role Settings Governance Role Definition",
					"description": ""
				},
				{
					"name": "Governance Subjects Governance Subject",
					"value": "Governance Subjects Governance Subject",
					"description": ""
				},
				{
					"name": "Group Lifecycle Policies Group Lifecycle Policy",
					"value": "Group Lifecycle Policies Group Lifecycle Policy",
					"description": ""
				},
				{
					"name": "Group Lifecycle Policies Actions",
					"value": "Group Lifecycle Policies Actions",
					"description": ""
				},
				{
					"name": "Groups Group",
					"value": "Groups Group",
					"description": ""
				},
				{
					"name": "Groups Directory Object",
					"value": "Groups Directory Object",
					"description": ""
				},
				{
					"name": "Groups App Role Assignment",
					"value": "Groups App Role Assignment",
					"description": ""
				},
				{
					"name": "Groups Calendar",
					"value": "Groups Calendar",
					"description": ""
				},
				{
					"name": "Groups Actions",
					"value": "Groups Actions",
					"description": ""
				},
				{
					"name": "Groups Functions",
					"value": "Groups Functions",
					"description": ""
				},
				{
					"name": "Groups Event",
					"value": "Groups Event",
					"description": ""
				},
				{
					"name": "Groups Conversation",
					"value": "Groups Conversation",
					"description": ""
				},
				{
					"name": "Groups Drive",
					"value": "Groups Drive",
					"description": ""
				},
				{
					"name": "Groups Endpoint",
					"value": "Groups Endpoint",
					"description": ""
				},
				{
					"name": "Groups Extension",
					"value": "Groups Extension",
					"description": ""
				},
				{
					"name": "Groups Group Lifecycle Policy",
					"value": "Groups Group Lifecycle Policy",
					"description": ""
				},
				{
					"name": "Groups Onenote",
					"value": "Groups Onenote",
					"description": ""
				},
				{
					"name": "Groups Resource Specific Permission Grant",
					"value": "Groups Resource Specific Permission Grant",
					"description": ""
				},
				{
					"name": "Groups Profile Photo",
					"value": "Groups Profile Photo",
					"description": ""
				},
				{
					"name": "Groups Planner Group",
					"value": "Groups Planner Group",
					"description": ""
				},
				{
					"name": "Groups Directory Setting",
					"value": "Groups Directory Setting",
					"description": ""
				},
				{
					"name": "Groups Site",
					"value": "Groups Site",
					"description": ""
				},
				{
					"name": "Groups Team",
					"value": "Groups Team",
					"description": ""
				},
				{
					"name": "Groups Conversation Thread",
					"value": "Groups Conversation Thread",
					"description": ""
				},
				{
					"name": "Identity Identity Container",
					"value": "Identity Identity Container",
					"description": ""
				},
				{
					"name": "Identity Identity Api Connector",
					"value": "Identity Identity Api Connector",
					"description": ""
				},
				{
					"name": "Identity Actions",
					"value": "Identity Actions",
					"description": ""
				},
				{
					"name": "Identity Authentication Event Listener",
					"value": "Identity Authentication Event Listener",
					"description": ""
				},
				{
					"name": "Identity B 2 C Identity User Flow",
					"value": "Identity B 2 C Identity User Flow",
					"description": ""
				},
				{
					"name": "Identity Functions",
					"value": "Identity Functions",
					"description": ""
				},
				{
					"name": "Identity B 2 X Identity User Flow",
					"value": "Identity B 2 X Identity User Flow",
					"description": ""
				},
				{
					"name": "Identity Conditional Access Root",
					"value": "Identity Conditional Access Root",
					"description": ""
				},
				{
					"name": "Identity Continuous Access Evaluation Policy",
					"value": "Identity Continuous Access Evaluation Policy",
					"description": ""
				},
				{
					"name": "Identity Custom Authentication Extension",
					"value": "Identity Custom Authentication Extension",
					"description": ""
				},
				{
					"name": "Identity Identity Provider Base",
					"value": "Identity Identity Provider Base",
					"description": ""
				},
				{
					"name": "Identity Identity User Flow Attribute",
					"value": "Identity Identity User Flow Attribute",
					"description": ""
				},
				{
					"name": "Identity Governance Identity Governance",
					"value": "Identity Governance Identity Governance",
					"description": ""
				},
				{
					"name": "Identity Governance Access Review Set",
					"value": "Identity Governance Access Review Set",
					"description": ""
				},
				{
					"name": "Identity Governance Functions",
					"value": "Identity Governance Functions",
					"description": ""
				},
				{
					"name": "Identity Governance Actions",
					"value": "Identity Governance Actions",
					"description": ""
				},
				{
					"name": "Identity Governance App Consent Approval Route",
					"value": "Identity Governance App Consent Approval Route",
					"description": ""
				},
				{
					"name": "Identity Governance Entitlement Management",
					"value": "Identity Governance Entitlement Management",
					"description": ""
				},
				{
					"name": "Identity Governance Lifecycle Workflows Container",
					"value": "Identity Governance Lifecycle Workflows Container",
					"description": ""
				},
				{
					"name": "Identity Governance Privileged Access Root",
					"value": "Identity Governance Privileged Access Root",
					"description": ""
				},
				{
					"name": "Identity Governance Terms Of Use Container",
					"value": "Identity Governance Terms Of Use Container",
					"description": ""
				},
				{
					"name": "Identity Protection Identity Protection Root",
					"value": "Identity Protection Identity Protection Root",
					"description": ""
				},
				{
					"name": "Identity Protection Risk Detection",
					"value": "Identity Protection Risk Detection",
					"description": ""
				},
				{
					"name": "Identity Protection Risky Service Principal",
					"value": "Identity Protection Risky Service Principal",
					"description": ""
				},
				{
					"name": "Identity Protection Actions",
					"value": "Identity Protection Actions",
					"description": ""
				},
				{
					"name": "Identity Protection Risky User",
					"value": "Identity Protection Risky User",
					"description": ""
				},
				{
					"name": "Identity Protection Service Principal Risk Detection",
					"value": "Identity Protection Service Principal Risk Detection",
					"description": ""
				},
				{
					"name": "Information Protection Information Protection",
					"value": "Information Protection Information Protection",
					"description": ""
				},
				{
					"name": "Information Protection Bitlocker",
					"value": "Information Protection Bitlocker",
					"description": ""
				},
				{
					"name": "Information Protection Data Loss Prevention Policy",
					"value": "Information Protection Data Loss Prevention Policy",
					"description": ""
				},
				{
					"name": "Information Protection Actions",
					"value": "Information Protection Actions",
					"description": ""
				},
				{
					"name": "Information Protection Sensitivity Label",
					"value": "Information Protection Sensitivity Label",
					"description": ""
				},
				{
					"name": "Information Protection Sensitivity Policy Settings",
					"value": "Information Protection Sensitivity Policy Settings",
					"description": ""
				},
				{
					"name": "Information Protection Threat Assessment Request",
					"value": "Information Protection Threat Assessment Request",
					"description": ""
				},
				{
					"name": "Invitations Invitation",
					"value": "Invitations Invitation",
					"description": ""
				},
				{
					"name": "Invitations User",
					"value": "Invitations User",
					"description": ""
				},
				{
					"name": "Me User",
					"value": "Me User",
					"description": ""
				},
				{
					"name": "Me User Activity",
					"value": "Me User Activity",
					"description": ""
				},
				{
					"name": "Me Functions",
					"value": "Me Functions",
					"description": ""
				},
				{
					"name": "Me Agreement Acceptance",
					"value": "Me Agreement Acceptance",
					"description": ""
				},
				{
					"name": "Me User Analytics",
					"value": "Me User Analytics",
					"description": ""
				},
				{
					"name": "Me App Consent Request",
					"value": "Me App Consent Request",
					"description": ""
				},
				{
					"name": "Me Service Principal",
					"value": "Me Service Principal",
					"description": ""
				},
				{
					"name": "Me App Role Assignment",
					"value": "Me App Role Assignment",
					"description": ""
				},
				{
					"name": "Me Approval",
					"value": "Me Approval",
					"description": ""
				},
				{
					"name": "Me Authentication",
					"value": "Me Authentication",
					"description": ""
				},
				{
					"name": "Me Actions",
					"value": "Me Actions",
					"description": ""
				},
				{
					"name": "Me Calendar",
					"value": "Me Calendar",
					"description": ""
				},
				{
					"name": "Me Calendar Group",
					"value": "Me Calendar Group",
					"description": ""
				},
				{
					"name": "Me Event",
					"value": "Me Event",
					"description": ""
				},
				{
					"name": "Me Chat",
					"value": "Me Chat",
					"description": ""
				},
				{
					"name": "Me Cloud PC",
					"value": "Me Cloud PC",
					"description": ""
				},
				{
					"name": "Me Contact Folder",
					"value": "Me Contact Folder",
					"description": ""
				},
				{
					"name": "Me Contact",
					"value": "Me Contact",
					"description": ""
				},
				{
					"name": "Me Directory Object",
					"value": "Me Directory Object",
					"description": ""
				},
				{
					"name": "Me Device Enrollment Configuration",
					"value": "Me Device Enrollment Configuration",
					"description": ""
				},
				{
					"name": "Me Device Management Troubleshooting Event",
					"value": "Me Device Management Troubleshooting Event",
					"description": ""
				},
				{
					"name": "Me Device",
					"value": "Me Device",
					"description": ""
				},
				{
					"name": "Me Drive",
					"value": "Me Drive",
					"description": ""
				},
				{
					"name": "Me Extension",
					"value": "Me Extension",
					"description": ""
				},
				{
					"name": "Me Site",
					"value": "Me Site",
					"description": ""
				},
				{
					"name": "Me Inference Classification",
					"value": "Me Inference Classification",
					"description": ""
				},
				{
					"name": "Me Information Protection",
					"value": "Me Information Protection",
					"description": ""
				},
				{
					"name": "Me Item Insights",
					"value": "Me Item Insights",
					"description": ""
				},
				{
					"name": "Me Group",
					"value": "Me Group",
					"description": ""
				},
				{
					"name": "Me Team",
					"value": "Me Team",
					"description": ""
				},
				{
					"name": "Me License Details",
					"value": "Me License Details",
					"description": ""
				},
				{
					"name": "Me Mail Folder",
					"value": "Me Mail Folder",
					"description": ""
				},
				{
					"name": "Me Managed App Registration",
					"value": "Me Managed App Registration",
					"description": ""
				},
				{
					"name": "Me Managed Device",
					"value": "Me Managed Device",
					"description": ""
				},
				{
					"name": "Me Message",
					"value": "Me Message",
					"description": ""
				},
				{
					"name": "Me Mobile App Intent And State",
					"value": "Me Mobile App Intent And State",
					"description": ""
				},
				{
					"name": "Me Mobile App Troubleshooting Event",
					"value": "Me Mobile App Troubleshooting Event",
					"description": ""
				},
				{
					"name": "Me Notification",
					"value": "Me Notification",
					"description": ""
				},
				{
					"name": "Me O Auth 2 Permission Grant",
					"value": "Me O Auth 2 Permission Grant",
					"description": ""
				},
				{
					"name": "Me Onenote",
					"value": "Me Onenote",
					"description": ""
				},
				{
					"name": "Me Online Meeting",
					"value": "Me Online Meeting",
					"description": ""
				},
				{
					"name": "Me Outlook User",
					"value": "Me Outlook User",
					"description": ""
				},
				{
					"name": "Me Access Review Instance",
					"value": "Me Access Review Instance",
					"description": ""
				},
				{
					"name": "Me Person",
					"value": "Me Person",
					"description": ""
				},
				{
					"name": "Me Profile Photo",
					"value": "Me Profile Photo",
					"description": ""
				},
				{
					"name": "Me Planner User",
					"value": "Me Planner User",
					"description": ""
				},
				{
					"name": "Me Presence",
					"value": "Me Presence",
					"description": ""
				},
				{
					"name": "Me Profile",
					"value": "Me Profile",
					"description": ""
				},
				{
					"name": "Me Scoped Role Membership",
					"value": "Me Scoped Role Membership",
					"description": ""
				},
				{
					"name": "Me Security",
					"value": "Me Security",
					"description": ""
				},
				{
					"name": "Me User Settings",
					"value": "Me User Settings",
					"description": ""
				},
				{
					"name": "Me User Teamwork",
					"value": "Me User Teamwork",
					"description": ""
				},
				{
					"name": "Me Todo",
					"value": "Me Todo",
					"description": ""
				},
				{
					"name": "Me Usage Right",
					"value": "Me Usage Right",
					"description": ""
				},
				{
					"name": "Me Windows Information Protection Device Registration",
					"value": "Me Windows Information Protection Device Registration",
					"description": ""
				},
				{
					"name": "Message Events Message Event",
					"value": "Message Events Message Event",
					"description": ""
				},
				{
					"name": "Message Recipients Message Recipient",
					"value": "Message Recipients Message Recipient",
					"description": ""
				},
				{
					"name": "Message Recipients Message Event",
					"value": "Message Recipients Message Event",
					"description": ""
				},
				{
					"name": "Message Traces Message Trace",
					"value": "Message Traces Message Trace",
					"description": ""
				},
				{
					"name": "Message Traces Message Recipient",
					"value": "Message Traces Message Recipient",
					"description": ""
				},
				{
					"name": "Mobility Management Policies Mobility Management Policy",
					"value": "Mobility Management Policies Mobility Management Policy",
					"description": ""
				},
				{
					"name": "Mobility Management Policies Group",
					"value": "Mobility Management Policies Group",
					"description": ""
				},
				{
					"name": "Monitoring Monitoring",
					"value": "Monitoring Monitoring",
					"description": ""
				},
				{
					"name": "Monitoring Alert Record",
					"value": "Monitoring Alert Record",
					"description": ""
				},
				{
					"name": "Monitoring Actions",
					"value": "Monitoring Actions",
					"description": ""
				},
				{
					"name": "Monitoring Functions",
					"value": "Monitoring Functions",
					"description": ""
				},
				{
					"name": "Monitoring Alert Rule",
					"value": "Monitoring Alert Rule",
					"description": ""
				},
				{
					"name": "Oauth 2 Permission Grants O Auth 2 Permission Grant",
					"value": "Oauth 2 Permission Grants O Auth 2 Permission Grant",
					"description": ""
				},
				{
					"name": "Oauth 2 Permission Grants Functions",
					"value": "Oauth 2 Permission Grants Functions",
					"description": ""
				},
				{
					"name": "Office Configuration Office Configuration",
					"value": "Office Configuration Office Configuration",
					"description": ""
				},
				{
					"name": "Office Configuration Office Client Configuration",
					"value": "Office Configuration Office Client Configuration",
					"description": ""
				},
				{
					"name": "Office Configuration Actions",
					"value": "Office Configuration Actions",
					"description": ""
				},
				{
					"name": "On Premises Publishing Profiles On Premises Publishing Profile",
					"value": "On Premises Publishing Profiles On Premises Publishing Profile",
					"description": ""
				},
				{
					"name": "On Premises Publishing Profiles On Premises Agent Group",
					"value": "On Premises Publishing Profiles On Premises Agent Group",
					"description": ""
				},
				{
					"name": "On Premises Publishing Profiles On Premises Agent",
					"value": "On Premises Publishing Profiles On Premises Agent",
					"description": ""
				},
				{
					"name": "On Premises Publishing Profiles Connector Group",
					"value": "On Premises Publishing Profiles Connector Group",
					"description": ""
				},
				{
					"name": "On Premises Publishing Profiles Connector",
					"value": "On Premises Publishing Profiles Connector",
					"description": ""
				},
				{
					"name": "On Premises Publishing Profiles Published Resource",
					"value": "On Premises Publishing Profiles Published Resource",
					"description": ""
				},
				{
					"name": "Organization Organization",
					"value": "Organization Organization",
					"description": ""
				},
				{
					"name": "Organization Organizational Branding",
					"value": "Organization Organizational Branding",
					"description": ""
				},
				{
					"name": "Organization Certificate Based Auth Configuration",
					"value": "Organization Certificate Based Auth Configuration",
					"description": ""
				},
				{
					"name": "Organization Extension",
					"value": "Organization Extension",
					"description": ""
				},
				{
					"name": "Organization Actions",
					"value": "Organization Actions",
					"description": ""
				},
				{
					"name": "Organization Organization Settings",
					"value": "Organization Organization Settings",
					"description": ""
				},
				{
					"name": "Payload Response Payload Response",
					"value": "Payload Response Payload Response",
					"description": ""
				},
				{
					"name": "Permission Grants Resource Specific Permission Grant",
					"value": "Permission Grants Resource Specific Permission Grant",
					"description": ""
				},
				{
					"name": "Permission Grants Actions",
					"value": "Permission Grants Actions",
					"description": ""
				},
				{
					"name": "Places Place",
					"value": "Places Place",
					"description": ""
				},
				{
					"name": "Place Room",
					"value": "Place Room",
					"description": ""
				},
				{
					"name": "Planner Planner",
					"value": "Planner Planner",
					"description": ""
				},
				{
					"name": "Planner Planner Bucket",
					"value": "Planner Planner Bucket",
					"description": ""
				},
				{
					"name": "Planner Planner Plan",
					"value": "Planner Planner Plan",
					"description": ""
				},
				{
					"name": "Planner Planner Roster",
					"value": "Planner Planner Roster",
					"description": ""
				},
				{
					"name": "Planner Planner Task",
					"value": "Planner Planner Task",
					"description": ""
				},
				{
					"name": "Policies Policy Root",
					"value": "Policies Policy Root",
					"description": ""
				},
				{
					"name": "Policies Access Review Policy",
					"value": "Policies Access Review Policy",
					"description": ""
				},
				{
					"name": "Policies Activity Based Timeout Policy",
					"value": "Policies Activity Based Timeout Policy",
					"description": ""
				},
				{
					"name": "Policies Admin Consent Request Policy",
					"value": "Policies Admin Consent Request Policy",
					"description": ""
				},
				{
					"name": "Policies App Management Policy",
					"value": "Policies App Management Policy",
					"description": ""
				},
				{
					"name": "Policies Authentication Flows Policy",
					"value": "Policies Authentication Flows Policy",
					"description": ""
				},
				{
					"name": "Policies Authentication Methods Policy",
					"value": "Policies Authentication Methods Policy",
					"description": ""
				},
				{
					"name": "Policies Authentication Strength Policy",
					"value": "Policies Authentication Strength Policy",
					"description": ""
				},
				{
					"name": "Policies Actions",
					"value": "Policies Actions",
					"description": ""
				},
				{
					"name": "Policies Functions",
					"value": "Policies Functions",
					"description": ""
				},
				{
					"name": "Policies Authorization Policy",
					"value": "Policies Authorization Policy",
					"description": ""
				},
				{
					"name": "Policies B 2 C Authentication Methods Policy",
					"value": "Policies B 2 C Authentication Methods Policy",
					"description": ""
				},
				{
					"name": "Policies Claims Mapping Policy",
					"value": "Policies Claims Mapping Policy",
					"description": ""
				},
				{
					"name": "Policies Conditional Access Policy",
					"value": "Policies Conditional Access Policy",
					"description": ""
				},
				{
					"name": "Policies Cross Tenant Access Policy",
					"value": "Policies Cross Tenant Access Policy",
					"description": ""
				},
				{
					"name": "Policies Tenant App Management Policy",
					"value": "Policies Tenant App Management Policy",
					"description": ""
				},
				{
					"name": "Policies Device Registration Policy",
					"value": "Policies Device Registration Policy",
					"description": ""
				},
				{
					"name": "Policies Directory Role Access Review Policy",
					"value": "Policies Directory Role Access Review Policy",
					"description": ""
				},
				{
					"name": "Policies External Identities Policy",
					"value": "Policies External Identities Policy",
					"description": ""
				},
				{
					"name": "Policies Feature Rollout Policy",
					"value": "Policies Feature Rollout Policy",
					"description": ""
				},
				{
					"name": "Policies Home Realm Discovery Policy",
					"value": "Policies Home Realm Discovery Policy",
					"description": ""
				},
				{
					"name": "Policies Identity Security Defaults Enforcement Policy",
					"value": "Policies Identity Security Defaults Enforcement Policy",
					"description": ""
				},
				{
					"name": "Policies Mobility Management Policy",
					"value": "Policies Mobility Management Policy",
					"description": ""
				},
				{
					"name": "Policies Permission Grant Policy",
					"value": "Policies Permission Grant Policy",
					"description": ""
				},
				{
					"name": "Policies Unified Role Management Policy",
					"value": "Policies Unified Role Management Policy",
					"description": ""
				},
				{
					"name": "Policies Unified Role Management Policy Assignment",
					"value": "Policies Unified Role Management Policy Assignment",
					"description": ""
				},
				{
					"name": "Policies Service Principal Creation Policy",
					"value": "Policies Service Principal Creation Policy",
					"description": ""
				},
				{
					"name": "Policies Token Issuance Policy",
					"value": "Policies Token Issuance Policy",
					"description": ""
				},
				{
					"name": "Policies Token Lifetime Policy",
					"value": "Policies Token Lifetime Policy",
					"description": ""
				},
				{
					"name": "Print Print",
					"value": "Print Print",
					"description": ""
				},
				{
					"name": "Print Print Connector",
					"value": "Print Print Connector",
					"description": ""
				},
				{
					"name": "Print Print Operation",
					"value": "Print Print Operation",
					"description": ""
				},
				{
					"name": "Print Printer",
					"value": "Print Printer",
					"description": ""
				},
				{
					"name": "Print Functions",
					"value": "Print Functions",
					"description": ""
				},
				{
					"name": "Print Actions",
					"value": "Print Actions",
					"description": ""
				},
				{
					"name": "Print Printer Share",
					"value": "Print Printer Share",
					"description": ""
				},
				{
					"name": "Print Report Root",
					"value": "Print Report Root",
					"description": ""
				},
				{
					"name": "Print Print Service",
					"value": "Print Print Service",
					"description": ""
				},
				{
					"name": "Print Print Task Definition",
					"value": "Print Print Task Definition",
					"description": ""
				},
				{
					"name": "Privacy Privacy",
					"value": "Privacy Privacy",
					"description": ""
				},
				{
					"name": "Privileged Access Privileged Access",
					"value": "Privileged Access Privileged Access",
					"description": ""
				},
				{
					"name": "Privileged Access Governance Resource",
					"value": "Privileged Access Governance Resource",
					"description": ""
				},
				{
					"name": "Privileged Access Actions",
					"value": "Privileged Access Actions",
					"description": ""
				},
				{
					"name": "Privileged Access Functions",
					"value": "Privileged Access Functions",
					"description": ""
				},
				{
					"name": "Privileged Access Governance Role Assignment Request",
					"value": "Privileged Access Governance Role Assignment Request",
					"description": ""
				},
				{
					"name": "Privileged Access Governance Role Assignment",
					"value": "Privileged Access Governance Role Assignment",
					"description": ""
				},
				{
					"name": "Privileged Access Governance Role Definition",
					"value": "Privileged Access Governance Role Definition",
					"description": ""
				},
				{
					"name": "Privileged Access Governance Role Setting",
					"value": "Privileged Access Governance Role Setting",
					"description": ""
				},
				{
					"name": "Privileged Approval Privileged Approval",
					"value": "Privileged Approval Privileged Approval",
					"description": ""
				},
				{
					"name": "Privileged Approval Privileged Role Assignment Request",
					"value": "Privileged Approval Privileged Role Assignment Request",
					"description": ""
				},
				{
					"name": "Privileged Approval Privileged Role",
					"value": "Privileged Approval Privileged Role",
					"description": ""
				},
				{
					"name": "Privileged Approval Actions",
					"value": "Privileged Approval Actions",
					"description": ""
				},
				{
					"name": "Privileged Approval Functions",
					"value": "Privileged Approval Functions",
					"description": ""
				},
				{
					"name": "Privileged Operation Events Privileged Operation Event",
					"value": "Privileged Operation Events Privileged Operation Event",
					"description": ""
				},
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request",
					"description": ""
				},
				{
					"name": "Privileged Role Assignment Requests Actions",
					"value": "Privileged Role Assignment Requests Actions",
					"description": ""
				},
				{
					"name": "Privileged Role Assignment Requests Privileged Role",
					"value": "Privileged Role Assignment Requests Privileged Role",
					"description": ""
				},
				{
					"name": "Privileged Role Assignment Requests Functions",
					"value": "Privileged Role Assignment Requests Functions",
					"description": ""
				},
				{
					"name": "Privileged Role Assignments Privileged Role Assignment",
					"value": "Privileged Role Assignments Privileged Role Assignment",
					"description": ""
				},
				{
					"name": "Privileged Role Assignments Actions",
					"value": "Privileged Role Assignments Actions",
					"description": ""
				},
				{
					"name": "Privileged Role Assignments Privileged Role",
					"value": "Privileged Role Assignments Privileged Role",
					"description": ""
				},
				{
					"name": "Privileged Role Assignments Functions",
					"value": "Privileged Role Assignments Functions",
					"description": ""
				},
				{
					"name": "Privileged Roles Privileged Role",
					"value": "Privileged Roles Privileged Role",
					"description": ""
				},
				{
					"name": "Privileged Roles Privileged Role Assignment",
					"value": "Privileged Roles Privileged Role Assignment",
					"description": ""
				},
				{
					"name": "Privileged Roles Actions",
					"value": "Privileged Roles Actions",
					"description": ""
				},
				{
					"name": "Privileged Roles Privileged Role Settings",
					"value": "Privileged Roles Privileged Role Settings",
					"description": ""
				},
				{
					"name": "Privileged Roles Privileged Role Summary",
					"value": "Privileged Roles Privileged Role Summary",
					"description": ""
				},
				{
					"name": "Privileged Signup Status Privileged Signup Status",
					"value": "Privileged Signup Status Privileged Signup Status",
					"description": ""
				},
				{
					"name": "Privileged Signup Status Functions",
					"value": "Privileged Signup Status Functions",
					"description": ""
				},
				{
					"name": "Privileged Signup Status Actions",
					"value": "Privileged Signup Status Actions",
					"description": ""
				},
				{
					"name": "Program Controls Program Control",
					"value": "Program Controls Program Control",
					"description": ""
				},
				{
					"name": "Program Controls Program",
					"value": "Program Controls Program",
					"description": ""
				},
				{
					"name": "Program Control Types Program Control Type",
					"value": "Program Control Types Program Control Type",
					"description": ""
				},
				{
					"name": "Programs Program",
					"value": "Programs Program",
					"description": ""
				},
				{
					"name": "Programs Program Control",
					"value": "Programs Program Control",
					"description": ""
				},
				{
					"name": "Reports Report Root",
					"value": "Reports Report Root",
					"description": ""
				},
				{
					"name": "Reports Application Sign In Detailed Summary",
					"value": "Reports Application Sign In Detailed Summary",
					"description": ""
				},
				{
					"name": "Reports Authentication Methods Root",
					"value": "Reports Authentication Methods Root",
					"description": ""
				},
				{
					"name": "Reports Functions",
					"value": "Reports Functions",
					"description": ""
				},
				{
					"name": "Reports Credential User Registration Details",
					"value": "Reports Credential User Registration Details",
					"description": ""
				},
				{
					"name": "Reports Print Usage",
					"value": "Reports Print Usage",
					"description": ""
				},
				{
					"name": "Reports Print Usage By Printer",
					"value": "Reports Print Usage By Printer",
					"description": ""
				},
				{
					"name": "Reports Print Usage By User",
					"value": "Reports Print Usage By User",
					"description": ""
				},
				{
					"name": "Reports Security Reports Root",
					"value": "Reports Security Reports Root",
					"description": ""
				},
				{
					"name": "Reports User Credential Usage Details",
					"value": "Reports User Credential Usage Details",
					"description": ""
				},
				{
					"name": "Risk Detections Risk Detection",
					"value": "Risk Detections Risk Detection",
					"description": ""
				},
				{
					"name": "Risky Users Risky User",
					"value": "Risky Users Risky User",
					"description": ""
				},
				{
					"name": "Risky Users Risky User History Item",
					"value": "Risky Users Risky User History Item",
					"description": ""
				},
				{
					"name": "Risky Users Actions",
					"value": "Risky Users Actions",
					"description": ""
				},
				{
					"name": "Role Management Role Management",
					"value": "Role Management Role Management",
					"description": ""
				},
				{
					"name": "Role Management Rbac Application Multiple",
					"value": "Role Management Rbac Application Multiple",
					"description": ""
				},
				{
					"name": "Role Management Actions",
					"value": "Role Management Actions",
					"description": ""
				},
				{
					"name": "Role Management Functions",
					"value": "Role Management Functions",
					"description": ""
				},
				{
					"name": "Role Management Rbac Application",
					"value": "Role Management Rbac Application",
					"description": ""
				},
				{
					"name": "Role Management Unified Rbac Application",
					"value": "Role Management Unified Rbac Application",
					"description": ""
				},
				{
					"name": "Schema Extensions Schema Extension",
					"value": "Schema Extensions Schema Extension",
					"description": ""
				},
				{
					"name": "Scoped Role Memberships Scoped Role Membership",
					"value": "Scoped Role Memberships Scoped Role Membership",
					"description": ""
				},
				{
					"name": "Search Search Entity",
					"value": "Search Search Entity",
					"description": ""
				},
				{
					"name": "Search Acronym",
					"value": "Search Acronym",
					"description": ""
				},
				{
					"name": "Search Bookmark",
					"value": "Search Bookmark",
					"description": ""
				},
				{
					"name": "Search Actions",
					"value": "Search Actions",
					"description": ""
				},
				{
					"name": "Search Qna",
					"value": "Search Qna",
					"description": ""
				},
				{
					"name": "Security Security",
					"value": "Security Security",
					"description": ""
				},
				{
					"name": "Security Alert",
					"value": "Security Alert",
					"description": ""
				},
				{
					"name": "Security Actions",
					"value": "Security Actions",
					"description": ""
				},
				{
					"name": "Security Attack Simulation Root",
					"value": "Security Attack Simulation Root",
					"description": ""
				},
				{
					"name": "Security Cases Root",
					"value": "Security Cases Root",
					"description": ""
				},
				{
					"name": "Security Functions",
					"value": "Security Functions",
					"description": ""
				},
				{
					"name": "Security Cloud App Security Profile",
					"value": "Security Cloud App Security Profile",
					"description": ""
				},
				{
					"name": "Security Domain Security Profile",
					"value": "Security Domain Security Profile",
					"description": ""
				},
				{
					"name": "Security File Security Profile",
					"value": "Security File Security Profile",
					"description": ""
				},
				{
					"name": "Security Host Security Profile",
					"value": "Security Host Security Profile",
					"description": ""
				},
				{
					"name": "Security Incident",
					"value": "Security Incident",
					"description": ""
				},
				{
					"name": "Security Information Protection",
					"value": "Security Information Protection",
					"description": ""
				},
				{
					"name": "Security Ip Security Profile",
					"value": "Security Ip Security Profile",
					"description": ""
				},
				{
					"name": "Security Labels Root",
					"value": "Security Labels Root",
					"description": ""
				},
				{
					"name": "Security Provider Tenant Setting",
					"value": "Security Provider Tenant Setting",
					"description": ""
				},
				{
					"name": "Security Secure Score Control Profile",
					"value": "Security Secure Score Control Profile",
					"description": ""
				},
				{
					"name": "Security Secure Score",
					"value": "Security Secure Score",
					"description": ""
				},
				{
					"name": "Security Security Action",
					"value": "Security Security Action",
					"description": ""
				},
				{
					"name": "Security Subject Rights Request",
					"value": "Security Subject Rights Request",
					"description": ""
				},
				{
					"name": "Security Threat Submission Root",
					"value": "Security Threat Submission Root",
					"description": ""
				},
				{
					"name": "Security Ti Indicator",
					"value": "Security Ti Indicator",
					"description": ""
				},
				{
					"name": "Security Triggers Root",
					"value": "Security Triggers Root",
					"description": ""
				},
				{
					"name": "Security Trigger Types Root",
					"value": "Security Trigger Types Root",
					"description": ""
				},
				{
					"name": "Security User Security Profile",
					"value": "Security User Security Profile",
					"description": ""
				},
				{
					"name": "Service Principals Service Principal",
					"value": "Service Principals Service Principal",
					"description": ""
				},
				{
					"name": "Service Principals App Management Policy",
					"value": "Service Principals App Management Policy",
					"description": ""
				},
				{
					"name": "Service Principals App Role Assignment",
					"value": "Service Principals App Role Assignment",
					"description": ""
				},
				{
					"name": "Service Principals Claims Mapping Policy",
					"value": "Service Principals Claims Mapping Policy",
					"description": ""
				},
				{
					"name": "Service Principals Directory Object",
					"value": "Service Principals Directory Object",
					"description": ""
				},
				{
					"name": "Service Principals Delegated Permission Classification",
					"value": "Service Principals Delegated Permission Classification",
					"description": ""
				},
				{
					"name": "Service Principals Endpoint",
					"value": "Service Principals Endpoint",
					"description": ""
				},
				{
					"name": "Service Principals Federated Identity Credential",
					"value": "Service Principals Federated Identity Credential",
					"description": ""
				},
				{
					"name": "Service Principals Home Realm Discovery Policy",
					"value": "Service Principals Home Realm Discovery Policy",
					"description": ""
				},
				{
					"name": "Service Principals License Details",
					"value": "Service Principals License Details",
					"description": ""
				},
				{
					"name": "Service Principals Actions",
					"value": "Service Principals Actions",
					"description": ""
				},
				{
					"name": "Service Principals O Auth 2 Permission Grant",
					"value": "Service Principals O Auth 2 Permission Grant",
					"description": ""
				},
				{
					"name": "Service Principals Synchronization",
					"value": "Service Principals Synchronization",
					"description": ""
				},
				{
					"name": "Service Principals Functions",
					"value": "Service Principals Functions",
					"description": ""
				},
				{
					"name": "Service Principals Token Issuance Policy",
					"value": "Service Principals Token Issuance Policy",
					"description": ""
				},
				{
					"name": "Service Principals Token Lifetime Policy",
					"value": "Service Principals Token Lifetime Policy",
					"description": ""
				},
				{
					"name": "Settings Directory Setting",
					"value": "Settings Directory Setting",
					"description": ""
				},
				{
					"name": "Shares Shared Drive Item",
					"value": "Shares Shared Drive Item",
					"description": ""
				},
				{
					"name": "Shares Drive Item",
					"value": "Shares Drive Item",
					"description": ""
				},
				{
					"name": "Shares List",
					"value": "Shares List",
					"description": ""
				},
				{
					"name": "Shares Actions",
					"value": "Shares Actions",
					"description": ""
				},
				{
					"name": "Shares Functions",
					"value": "Shares Functions",
					"description": ""
				},
				{
					"name": "Shares List Item",
					"value": "Shares List Item",
					"description": ""
				},
				{
					"name": "Shares Permission",
					"value": "Shares Permission",
					"description": ""
				},
				{
					"name": "Shares Site",
					"value": "Shares Site",
					"description": ""
				},
				{
					"name": "Sites Site",
					"value": "Sites Site",
					"description": ""
				},
				{
					"name": "Sites Item Analytics",
					"value": "Sites Item Analytics",
					"description": ""
				},
				{
					"name": "Sites Column Definition",
					"value": "Sites Column Definition",
					"description": ""
				},
				{
					"name": "Sites Content Type",
					"value": "Sites Content Type",
					"description": ""
				},
				{
					"name": "Sites Actions",
					"value": "Sites Actions",
					"description": ""
				},
				{
					"name": "Sites Functions",
					"value": "Sites Functions",
					"description": ""
				},
				{
					"name": "Sites Drive",
					"value": "Sites Drive",
					"description": ""
				},
				{
					"name": "Sites Information Protection",
					"value": "Sites Information Protection",
					"description": ""
				},
				{
					"name": "Sites Base Item",
					"value": "Sites Base Item",
					"description": ""
				},
				{
					"name": "Sites List",
					"value": "Sites List",
					"description": ""
				},
				{
					"name": "Sites Onenote",
					"value": "Sites Onenote",
					"description": ""
				},
				{
					"name": "Sites Rich Long Running Operation",
					"value": "Sites Rich Long Running Operation",
					"description": ""
				},
				{
					"name": "Sites Site Page",
					"value": "Sites Site Page",
					"description": ""
				},
				{
					"name": "Sites Permission",
					"value": "Sites Permission",
					"description": ""
				},
				{
					"name": "Sites Store",
					"value": "Sites Store",
					"description": ""
				},
				{
					"name": "Solutions Solutions Root",
					"value": "Solutions Solutions Root",
					"description": ""
				},
				{
					"name": "Solutions Business Scenario",
					"value": "Solutions Business Scenario",
					"description": ""
				},
				{
					"name": "Solutions Actions",
					"value": "Solutions Actions",
					"description": ""
				},
				{
					"name": "Storage Storage",
					"value": "Storage Storage",
					"description": ""
				},
				{
					"name": "Subscribed Skus Subscribed Sku",
					"value": "Subscribed Skus Subscribed Sku",
					"description": ""
				},
				{
					"name": "Subscriptions Subscription",
					"value": "Subscriptions Subscription",
					"description": ""
				},
				{
					"name": "Subscriptions Actions",
					"value": "Subscriptions Actions",
					"description": ""
				},
				{
					"name": "Teams Team",
					"value": "Teams Team",
					"description": ""
				},
				{
					"name": "Teams Channel",
					"value": "Teams Channel",
					"description": ""
				},
				{
					"name": "Teams Actions",
					"value": "Teams Actions",
					"description": ""
				},
				{
					"name": "Teams Functions",
					"value": "Teams Functions",
					"description": ""
				},
				{
					"name": "Teams Group",
					"value": "Teams Group",
					"description": ""
				},
				{
					"name": "Teams Teams App Installation",
					"value": "Teams Teams App Installation",
					"description": ""
				},
				{
					"name": "Teams Conversation Member",
					"value": "Teams Conversation Member",
					"description": ""
				},
				{
					"name": "Teams Teams Async Operation",
					"value": "Teams Teams Async Operation",
					"description": ""
				},
				{
					"name": "Teams User",
					"value": "Teams User",
					"description": ""
				},
				{
					"name": "Teams Resource Specific Permission Grant",
					"value": "Teams Resource Specific Permission Grant",
					"description": ""
				},
				{
					"name": "Teams Profile Photo",
					"value": "Teams Profile Photo",
					"description": ""
				},
				{
					"name": "Teams Schedule",
					"value": "Teams Schedule",
					"description": ""
				},
				{
					"name": "Teams Teamwork Tag",
					"value": "Teams Teamwork Tag",
					"description": ""
				},
				{
					"name": "Teams Teams Template",
					"value": "Teams Teams Template",
					"description": ""
				},
				{
					"name": "Teams Team Template Definition",
					"value": "Teams Team Template Definition",
					"description": ""
				},
				{
					"name": "Teams Templates Teams Template",
					"value": "Teams Templates Teams Template",
					"description": ""
				},
				{
					"name": "Team Template Definition Team Template Definition",
					"value": "Team Template Definition Team Template Definition",
					"description": ""
				},
				{
					"name": "Team Template Definition Team",
					"value": "Team Template Definition Team",
					"description": ""
				},
				{
					"name": "Team Template Definition Actions",
					"value": "Team Template Definition Actions",
					"description": ""
				},
				{
					"name": "Team Template Definition Functions",
					"value": "Team Template Definition Functions",
					"description": ""
				},
				{
					"name": "Teamwork Teamwork",
					"value": "Teamwork Teamwork",
					"description": ""
				},
				{
					"name": "Teamwork Deleted Team",
					"value": "Teamwork Deleted Team",
					"description": ""
				},
				{
					"name": "Teamwork Actions",
					"value": "Teamwork Actions",
					"description": ""
				},
				{
					"name": "Teamwork Functions",
					"value": "Teamwork Functions",
					"description": ""
				},
				{
					"name": "Teamwork Teamwork Device",
					"value": "Teamwork Teamwork Device",
					"description": ""
				},
				{
					"name": "Teamwork Teams App Settings",
					"value": "Teamwork Teams App Settings",
					"description": ""
				},
				{
					"name": "Teamwork Team Template",
					"value": "Teamwork Team Template",
					"description": ""
				},
				{
					"name": "Teamwork Workforce Integration",
					"value": "Teamwork Workforce Integration",
					"description": ""
				},
				{
					"name": "Tenant Relationships Tenant Relationship",
					"value": "Tenant Relationships Tenant Relationship",
					"description": ""
				},
				{
					"name": "Tenant Relationships Delegated Admin Customer",
					"value": "Tenant Relationships Delegated Admin Customer",
					"description": ""
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationship",
					"value": "Tenant Relationships Delegated Admin Relationship",
					"description": ""
				},
				{
					"name": "Tenant Relationships Managed Tenant",
					"value": "Tenant Relationships Managed Tenant",
					"description": ""
				},
				{
					"name": "Tenant Relationships Actions",
					"value": "Tenant Relationships Actions",
					"description": ""
				},
				{
					"name": "Tenant Relationships Functions",
					"value": "Tenant Relationships Functions",
					"description": ""
				},
				{
					"name": "Term Store Store",
					"value": "Term Store Store",
					"description": ""
				},
				{
					"name": "Term Store Group",
					"value": "Term Store Group",
					"description": ""
				},
				{
					"name": "Term Store Set",
					"value": "Term Store Set",
					"description": ""
				},
				{
					"name": "Threat Submission Threat Submission Root",
					"value": "Threat Submission Threat Submission Root",
					"description": ""
				},
				{
					"name": "Threat Submission Email Threat Submission",
					"value": "Threat Submission Email Threat Submission",
					"description": ""
				},
				{
					"name": "Threat Submission Email Threat Submission Policy",
					"value": "Threat Submission Email Threat Submission Policy",
					"description": ""
				},
				{
					"name": "Threat Submission File Threat Submission",
					"value": "Threat Submission File Threat Submission",
					"description": ""
				},
				{
					"name": "Threat Submission Url Threat Submission",
					"value": "Threat Submission Url Threat Submission",
					"description": ""
				},
				{
					"name": "Trust Framework Trust Framework",
					"value": "Trust Framework Trust Framework",
					"description": ""
				},
				{
					"name": "Trust Framework Trust Framework Key Set",
					"value": "Trust Framework Trust Framework Key Set",
					"description": ""
				},
				{
					"name": "Trust Framework Actions",
					"value": "Trust Framework Actions",
					"description": ""
				},
				{
					"name": "Trust Framework Functions",
					"value": "Trust Framework Functions",
					"description": ""
				},
				{
					"name": "Trust Framework Trust Framework Policy",
					"value": "Trust Framework Trust Framework Policy",
					"description": ""
				},
				{
					"name": "Users User",
					"value": "Users User",
					"description": ""
				},
				{
					"name": "Users User Activity",
					"value": "Users User Activity",
					"description": ""
				},
				{
					"name": "Users Functions",
					"value": "Users Functions",
					"description": ""
				},
				{
					"name": "Users Agreement Acceptance",
					"value": "Users Agreement Acceptance",
					"description": ""
				},
				{
					"name": "Users User Analytics",
					"value": "Users User Analytics",
					"description": ""
				},
				{
					"name": "Users App Consent Request",
					"value": "Users App Consent Request",
					"description": ""
				},
				{
					"name": "Users Service Principal",
					"value": "Users Service Principal",
					"description": ""
				},
				{
					"name": "Users App Role Assignment",
					"value": "Users App Role Assignment",
					"description": ""
				},
				{
					"name": "Users Approval",
					"value": "Users Approval",
					"description": ""
				},
				{
					"name": "Users Authentication",
					"value": "Users Authentication",
					"description": ""
				},
				{
					"name": "Users Actions",
					"value": "Users Actions",
					"description": ""
				},
				{
					"name": "Users Calendar",
					"value": "Users Calendar",
					"description": ""
				},
				{
					"name": "Users Calendar Group",
					"value": "Users Calendar Group",
					"description": ""
				},
				{
					"name": "Users Event",
					"value": "Users Event",
					"description": ""
				},
				{
					"name": "Users Chat",
					"value": "Users Chat",
					"description": ""
				},
				{
					"name": "Users Cloud PC",
					"value": "Users Cloud PC",
					"description": ""
				},
				{
					"name": "Users Contact Folder",
					"value": "Users Contact Folder",
					"description": ""
				},
				{
					"name": "Users Contact",
					"value": "Users Contact",
					"description": ""
				},
				{
					"name": "Users Directory Object",
					"value": "Users Directory Object",
					"description": ""
				},
				{
					"name": "Users Device Enrollment Configuration",
					"value": "Users Device Enrollment Configuration",
					"description": ""
				},
				{
					"name": "Users Device Management Troubleshooting Event",
					"value": "Users Device Management Troubleshooting Event",
					"description": ""
				},
				{
					"name": "Users Device",
					"value": "Users Device",
					"description": ""
				},
				{
					"name": "Users Drive",
					"value": "Users Drive",
					"description": ""
				},
				{
					"name": "Users Extension",
					"value": "Users Extension",
					"description": ""
				},
				{
					"name": "Users Site",
					"value": "Users Site",
					"description": ""
				},
				{
					"name": "Users Inference Classification",
					"value": "Users Inference Classification",
					"description": ""
				},
				{
					"name": "Users Information Protection",
					"value": "Users Information Protection",
					"description": ""
				},
				{
					"name": "Users Item Insights",
					"value": "Users Item Insights",
					"description": ""
				},
				{
					"name": "Users Group",
					"value": "Users Group",
					"description": ""
				},
				{
					"name": "Users Team",
					"value": "Users Team",
					"description": ""
				},
				{
					"name": "Users License Details",
					"value": "Users License Details",
					"description": ""
				},
				{
					"name": "Users Mail Folder",
					"value": "Users Mail Folder",
					"description": ""
				},
				{
					"name": "Users Managed App Registration",
					"value": "Users Managed App Registration",
					"description": ""
				},
				{
					"name": "Users Managed Device",
					"value": "Users Managed Device",
					"description": ""
				},
				{
					"name": "Users Message",
					"value": "Users Message",
					"description": ""
				},
				{
					"name": "Users Mobile App Intent And State",
					"value": "Users Mobile App Intent And State",
					"description": ""
				},
				{
					"name": "Users Mobile App Troubleshooting Event",
					"value": "Users Mobile App Troubleshooting Event",
					"description": ""
				},
				{
					"name": "Users Notification",
					"value": "Users Notification",
					"description": ""
				},
				{
					"name": "Users O Auth 2 Permission Grant",
					"value": "Users O Auth 2 Permission Grant",
					"description": ""
				},
				{
					"name": "Users Onenote",
					"value": "Users Onenote",
					"description": ""
				},
				{
					"name": "Users Online Meeting",
					"value": "Users Online Meeting",
					"description": ""
				},
				{
					"name": "Users Outlook User",
					"value": "Users Outlook User",
					"description": ""
				},
				{
					"name": "Users Access Review Instance",
					"value": "Users Access Review Instance",
					"description": ""
				},
				{
					"name": "Users Person",
					"value": "Users Person",
					"description": ""
				},
				{
					"name": "Users Profile Photo",
					"value": "Users Profile Photo",
					"description": ""
				},
				{
					"name": "Users Planner User",
					"value": "Users Planner User",
					"description": ""
				},
				{
					"name": "Users Presence",
					"value": "Users Presence",
					"description": ""
				},
				{
					"name": "Users Profile",
					"value": "Users Profile",
					"description": ""
				},
				{
					"name": "Users Scoped Role Membership",
					"value": "Users Scoped Role Membership",
					"description": ""
				},
				{
					"name": "Users Security",
					"value": "Users Security",
					"description": ""
				},
				{
					"name": "Users User Settings",
					"value": "Users User Settings",
					"description": ""
				},
				{
					"name": "Users User Teamwork",
					"value": "Users User Teamwork",
					"description": ""
				},
				{
					"name": "Users Todo",
					"value": "Users Todo",
					"description": ""
				},
				{
					"name": "Users Usage Right",
					"value": "Users Usage Right",
					"description": ""
				},
				{
					"name": "Users Windows Information Protection Device Registration",
					"value": "Users Windows Information Protection Device Registration",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...accessReviewDecisionsAccessReviewDecisionDescription,
		...accessReviewsAccessReviewDescription,
		...accessReviewsAccessReviewDecisionDescription,
		...accessReviewsActionsDescription,
		...accessReviewsAccessReviewReviewerDescription,
		...activitystatisticsActivityStatisticsDescription,
		...adminAdminDescription,
		...adminEdgeDescription,
		...adminActionsDescription,
		...adminAdminReportSettingsDescription,
		...adminServiceAnnouncementDescription,
		...adminFunctionsDescription,
		...adminSharepointDescription,
		...adminAdminWindowsDescription,
		...administrativeUnitsAdministrativeUnitDescription,
		...administrativeUnitsExtensionDescription,
		...administrativeUnitsDirectoryObjectDescription,
		...directoryObjectApplicationDescription,
		...directoryObjectDeviceDescription,
		...directoryObjectGroupDescription,
		...directoryObjectOrgContactDescription,
		...directoryObjectServicePrincipalDescription,
		...directoryObjectUserDescription,
		...administrativeUnitsActionsDescription,
		...administrativeUnitsScopedRoleMembershipDescription,
		...administrativeUnitsFunctionsDescription,
		...agreementAcceptancesAgreementAcceptanceDescription,
		...agreementsAgreementDescription,
		...agreementsAgreementAcceptanceDescription,
		...agreementsAgreementFileDescription,
		...agreementsAgreementFileLocalizationDescription,
		...allowedDataLocationsAllowedDataLocationDescription,
		...appCommsApplicationDescription,
		...appCallDescription,
		...appActionsDescription,
		...appOnlineMeetingDescription,
		...appCatalogsAppCatalogsDescription,
		...appCatalogsTeamsAppDescription,
		...applicationsApplicationDescription,
		...applicationsAppManagementPolicyDescription,
		...applicationsConnectorGroupDescription,
		...applicationsDirectoryObjectDescription,
		...applicationsExtensionPropertyDescription,
		...applicationsFederatedIdentityCredentialDescription,
		...applicationsHomeRealmDiscoveryPolicyDescription,
		...applicationsActionsDescription,
		...directoryObjectEndpointDescription,
		...applicationsSynchronizationDescription,
		...applicationsFunctionsDescription,
		...applicationsTokenIssuancePolicyDescription,
		...applicationsTokenLifetimePolicyDescription,
		...applicationTemplatesApplicationTemplateDescription,
		...applicationTemplatesActionsDescription,
		...appRoleAssignmentsAppRoleAssignmentDescription,
		...approvalWorkflowProvidersApprovalWorkflowProviderDescription,
		...approvalWorkflowProvidersBusinessFlowDescription,
		...approvalWorkflowProvidersActionsDescription,
		...approvalWorkflowProvidersGovernancePolicyTemplateDescription,
		...auditLogsAuditLogRootDescription,
		...auditLogsDirectoryAuditDescription,
		...auditLogsProvisioningObjectSummaryDescription,
		...auditLogsSignInDescription,
		...auditLogsActionsDescription,
		...authenticationMethodConfigurationsAuthenticationMethodConfigurationDescription,
		...authenticationMethodsPolicyAuthenticationMethodsPolicyDescription,
		...authenticationMethodsPolicyAuthenticationMethodConfigurationDescription,
		...bookingBusinessesBookingBusinessDescription,
		...bookingBusinessesBookingAppointmentDescription,
		...bookingBusinessesActionsDescription,
		...bookingBusinessesBookingCustomerDescription,
		...bookingBusinessesBookingCustomQuestionDescription,
		...bookingBusinessesBookingServiceDescription,
		...bookingBusinessesBookingStaffMemberDescription,
		...bookingCurrenciesBookingCurrencyDescription,
		...brandingOrganizationalBrandingDescription,
		...brandingOrganizationalBrandingLocalizationDescription,
		...businessFlowTemplatesBusinessFlowTemplateDescription,
		...certificateBasedAuthConfigurationCertificateBasedAuthConfigurationDescription,
		...chatsChatDescription,
		...chatsTeamsAppInstallationDescription,
		...chatsActionsDescription,
		...chatsChatMessageInfoDescription,
		...chatsConversationMemberDescription,
		...chatsChatMessageDescription,
		...chatsFunctionsDescription,
		...chatsTeamsAsyncOperationDescription,
		...chatsResourceSpecificPermissionGrantDescription,
		...chatsPinnedChatMessageInfoDescription,
		...chatsTeamsTabDescription,
		...commandsCommandDescription,
		...commandsPayloadResponseDescription,
		...communicationsCloudCommunicationsDescription,
		...communicationsCallRecordDescription,
		...communicationsFunctionsDescription,
		...communicationsCallDescription,
		...communicationsActionsDescription,
		...communicationsOnlineMeetingDescription,
		...communicationsPresenceDescription,
		...complianceComplianceDescription,
		...connectionsExternalConnectionDescription,
		...connectionsExternalGroupDescription,
		...connectionsExternalItemDescription,
		...connectionsActionsDescription,
		...connectionsConnectionOperationDescription,
		...connectionsConnectionQuotaDescription,
		...connectionsSchemaDescription,
		...contactsOrgContactDescription,
		...contactsDirectoryObjectDescription,
		...contactsActionsDescription,
		...contactsFunctionsDescription,
		...contractsContractDescription,
		...contractsActionsDescription,
		...dataClassificationDataClassificationServiceDescription,
		...dataClassificationJobResponseBaseDescription,
		...dataClassificationExactMatchDataStoreDescription,
		...dataClassificationActionsDescription,
		...dataClassificationExactMatchUploadAgentDescription,
		...dataClassificationSensitiveTypeDescription,
		...dataClassificationSensitivityLabelDescription,
		...dataPolicyOperationsDataPolicyOperationDescription,
		...deviceAppManagementDeviceAppManagementDescription,
		...deviceAppManagementAndroidManagedAppProtectionDescription,
		...deviceAppManagementActionsDescription,
		...deviceAppManagementDefaultManagedAppProtectionDescription,
		...deviceAppManagementDeviceAppManagementTaskDescription,
		...deviceAppManagementEnterpriseCodeSigningCertificateDescription,
		...deviceAppManagementIosLobAppProvisioningConfigurationDescription,
		...deviceAppManagementIosManagedAppProtectionDescription,
		...deviceAppManagementManagedAppPolicyDescription,
		...deviceAppManagementManagedAppRegistrationDescription,
		...deviceAppManagementFunctionsDescription,
		...deviceAppManagementManagedAppStatusDescription,
		...deviceAppManagementManagedEBookCategoryDescription,
		...deviceAppManagementManagedEBookDescription,
		...deviceAppManagementMdmWindowsInformationProtectionPolicyDescription,
		...deviceAppManagementMobileAppCategoryDescription,
		...deviceAppManagementManagedDeviceMobileAppConfigurationDescription,
		...deviceAppManagementMobileAppDescription,
		...mobileAppManagedMobileLobAppDescription,
		...mobileAppMobileLobAppDescription,
		...deviceAppManagementPolicySetDescription,
		...deviceAppManagementSymantecCodeSigningCertificateDescription,
		...deviceAppManagementTargetedManagedAppConfigurationDescription,
		...deviceAppManagementVppTokenDescription,
		...deviceAppManagementWindowsDefenderApplicationControlSupplementalPolicyDescription,
		...deviceAppManagementWindowsInformationProtectionDeviceRegistrationDescription,
		...deviceAppManagementWindowsInformationProtectionPolicyDescription,
		...deviceAppManagementWindowsInformationProtectionWipeActionDescription,
		...deviceAppManagementWindowsManagedAppProtectionDescription,
		...deviceAppManagementWindowsManagementAppDescription,
		...deviceManagementDeviceManagementDescription,
		...deviceManagementAdvancedThreatProtectionOnboardingStateSummaryDescription,
		...deviceManagementAndroidDeviceOwnerEnrollmentProfileDescription,
		...deviceManagementActionsDescription,
		...deviceManagementAndroidForWorkAppConfigurationSchemaDescription,
		...deviceManagementAndroidForWorkEnrollmentProfileDescription,
		...deviceManagementAndroidForWorkSettingsDescription,
		...deviceManagementAndroidManagedStoreAccountEnterpriseSettingsDescription,
		...deviceManagementAndroidManagedStoreAppConfigurationSchemaDescription,
		...deviceManagementApplePushNotificationCertificateDescription,
		...deviceManagementFunctionsDescription,
		...deviceManagementAppleUserInitiatedEnrollmentProfileDescription,
		...deviceManagementDeviceAndAppManagementAssignmentFilterDescription,
		...deviceManagementAuditEventDescription,
		...deviceManagementDeviceManagementAutopilotEventDescription,
		...deviceManagementCartToClassAssociationDescription,
		...deviceManagementDeviceManagementSettingCategoryDescription,
		...deviceManagementCertificateConnectorDetailsDescription,
		...deviceManagementChromeOsOnboardingSettingsDescription,
		...deviceManagementCloudPcConnectivityIssueDescription,
		...deviceManagementManagedDeviceDescription,
		...deviceManagementComanagementEligibleDeviceDescription,
		...deviceManagementDeviceManagementConfigurationCategoryDescription,
		...deviceManagementComplianceManagementPartnerDescription,
		...deviceManagementDeviceManagementCompliancePolicyDescription,
		...deviceManagementDeviceManagementConfigurationSettingDefinitionDescription,
		...deviceManagementOnPremisesConditionalAccessSettingsDescription,
		...deviceManagementConfigManagerCollectionDescription,
		...deviceManagementDeviceManagementConfigurationPolicyDescription,
		...deviceManagementDeviceManagementConfigurationPolicyTemplateDescription,
		...deviceManagementDataSharingConsentDescription,
		...deviceManagementDepOnboardingSettingDescription,
		...deviceManagementDeviceManagementDerivedCredentialSettingsDescription,
		...deviceManagementDetectedAppDescription,
		...deviceManagementDeviceCategoryDescription,
		...deviceManagementDeviceCompliancePolicyDescription,
		...deviceManagementDeviceCompliancePolicyDeviceStateSummaryDescription,
		...deviceManagementDeviceCompliancePolicySettingStateSummaryDescription,
		...deviceManagementDeviceComplianceScriptDescription,
		...deviceManagementDeviceConfigurationConflictSummaryDescription,
		...deviceManagementDeviceConfigurationDeviceStateSummaryDescription,
		...deviceManagementRestrictedAppsViolationDescription,
		...deviceManagementDeviceConfigurationDescription,
		...deviceManagementManagedAllDeviceCertificateStateDescription,
		...deviceManagementDeviceConfigurationUserStateSummaryDescription,
		...deviceManagementDeviceCustomAttributeShellScriptDescription,
		...deviceManagementDeviceEnrollmentConfigurationDescription,
		...deviceManagementDeviceHealthScriptDescription,
		...deviceManagementDeviceManagementPartnerDescription,
		...deviceManagementDeviceManagementScriptDescription,
		...deviceManagementDeviceShellScriptDescription,
		...deviceManagementDeviceManagementDomainJoinConnectorDescription,
		...deviceManagementEmbeddedSimActivationCodePoolDescription,
		...deviceManagementDeviceManagementExchangeConnectorDescription,
		...deviceManagementDeviceManagementExchangeOnPremisesPolicyDescription,
		...deviceManagementGroupPolicyCategoryDescription,
		...deviceManagementGroupPolicyConfigurationDescription,
		...deviceManagementGroupPolicyDefinitionFileDescription,
		...deviceManagementGroupPolicyDefinitionDescription,
		...deviceManagementGroupPolicyMigrationReportDescription,
		...deviceManagementGroupPolicyObjectFileDescription,
		...deviceManagementGroupPolicyUploadedDefinitionFileDescription,
		...deviceManagementImportedDeviceIdentityDescription,
		...deviceManagementImportedWindowsAutopilotDeviceIdentityDescription,
		...deviceManagementDeviceManagementIntentDescription,
		...deviceManagementIntuneBrandingProfileDescription,
		...deviceManagementIosUpdateDeviceStatusDescription,
		...deviceManagementMacOsSoftwareUpdateAccountSummaryDescription,
		...deviceManagementManagedDeviceEncryptionStateDescription,
		...deviceManagementManagedDeviceOverviewDescription,
		...deviceManagementMicrosoftTunnelConfigurationDescription,
		...deviceManagementMicrosoftTunnelHealthThresholdDescription,
		...deviceManagementMicrosoftTunnelServerLogCollectionResponseDescription,
		...deviceManagementMicrosoftTunnelSiteDescription,
		...deviceManagementMobileAppTroubleshootingEventDescription,
		...deviceManagementMobileThreatDefenseConnectorDescription,
		...deviceManagementMonitoringDescription,
		...deviceManagementNdesConnectorDescription,
		...deviceManagementNotificationMessageTemplateDescription,
		...deviceManagementOemWarrantyInformationOnboardingDescription,
		...deviceManagementRemoteActionAuditDescription,
		...deviceManagementRemoteAssistancePartnerDescription,
		...deviceManagementRemoteAssistanceSettingsDescription,
		...deviceManagementDeviceManagementReportsDescription,
		...deviceManagementDeviceManagementResourceAccessProfileBaseDescription,
		...deviceManagementResourceOperationDescription,
		...deviceManagementDeviceManagementReusablePolicySettingDescription,
		...deviceManagementDeviceAndAppManagementRoleAssignmentDescription,
		...deviceManagementRoleDefinitionDescription,
		...deviceManagementRoleScopeTagDescription,
		...deviceManagementServiceNowConnectionDescription,
		...deviceManagementDeviceManagementSettingDefinitionDescription,
		...deviceManagementSoftwareUpdateStatusSummaryDescription,
		...deviceManagementTelecomExpenseManagementPartnerDescription,
		...deviceManagementDeviceManagementTemplateDescription,
		...deviceManagementDeviceManagementConfigurationSettingTemplateDescription,
		...deviceManagementTenantAttachRbacDescription,
		...deviceManagementTermsAndConditionsDescription,
		...deviceManagementDeviceManagementTroubleshootingEventDescription,
		...deviceManagementUserExperienceAnalyticsAnomalyDescription,
		...deviceManagementUserExperienceAnalyticsAnomalyDeviceDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByOsVersionDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsDescription,
		...deviceManagementUserExperienceAnalyticsAppHealthOsVersionPerformanceDescription,
		...deviceManagementUserExperienceAnalyticsCategoryDescription,
		...deviceManagementUserExperienceAnalyticsBaselineDescription,
		...deviceManagementUserExperienceAnalyticsBatteryHealthAppImpactDescription,
		...deviceManagementUserExperienceAnalyticsBatteryHealthCapacityDetailsDescription,
		...deviceManagementUserExperienceAnalyticsBatteryHealthDeviceAppImpactDescription,
		...deviceManagementUserExperienceAnalyticsBatteryHealthDevicePerformanceDescription,
		...deviceManagementUserExperienceAnalyticsBatteryHealthDeviceRuntimeHistoryDescription,
		...deviceManagementUserExperienceAnalyticsBatteryHealthModelPerformanceDescription,
		...deviceManagementUserExperienceAnalyticsBatteryHealthOsPerformanceDescription,
		...deviceManagementUserExperienceAnalyticsBatteryHealthRuntimeDetailsDescription,
		...deviceManagementUserExperienceAnalyticsMetricHistoryDescription,
		...deviceManagementUserExperienceAnalyticsDevicePerformanceDescription,
		...deviceManagementUserExperienceAnalyticsDeviceScopeDescription,
		...deviceManagementUserExperienceAnalyticsDeviceScoresDescription,
		...deviceManagementUserExperienceAnalyticsDeviceStartupHistoryDescription,
		...deviceManagementUserExperienceAnalyticsDeviceStartupProcessDescription,
		...deviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceDescription,
		...deviceManagementUserExperienceAnalyticsDeviceWithoutCloudIdentityDescription,
		...deviceManagementUserExperienceAnalyticsDeviceTimelineEventDescription,
		...deviceManagementUserExperienceAnalyticsImpactingProcessDescription,
		...deviceManagementUserExperienceAnalyticsModelScoresDescription,
		...deviceManagementUserExperienceAnalyticsNotAutopilotReadyDeviceDescription,
		...deviceManagementUserExperienceAnalyticsOverviewDescription,
		...deviceManagementUserExperienceAnalyticsRemoteConnectionDescription,
		...deviceManagementUserExperienceAnalyticsResourcePerformanceDescription,
		...deviceManagementUserExperienceAnalyticsScoreHistoryDescription,
		...deviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricDescription,
		...deviceManagementUserExperienceAnalyticsWorkFromAnywhereMetricDescription,
		...deviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceDescription,
		...deviceManagementUserPfxCertificateDescription,
		...deviceManagementVirtualEndpointDescription,
		...deviceManagementWindowsAutopilotDeploymentProfileDescription,
		...deviceManagementWindowsAutopilotDeviceIdentityDescription,
		...deviceManagementWindowsAutopilotSettingsDescription,
		...deviceManagementWindowsDriverUpdateProfileDescription,
		...deviceManagementWindowsFeatureUpdateProfileDescription,
		...deviceManagementWindowsInformationProtectionAppLearningSummaryDescription,
		...deviceManagementWindowsInformationProtectionNetworkLearningSummaryDescription,
		...deviceManagementWindowsMalwareInformationDescription,
		...deviceManagementWindowsQualityUpdateProfileDescription,
		...deviceManagementWindowsUpdateCatalogItemDescription,
		...deviceManagementZebraFotaArtifactDescription,
		...deviceManagementZebraFotaConnectorDescription,
		...deviceManagementZebraFotaDeploymentDescription,
		...devicesDeviceDescription,
		...devicesCommandDescription,
		...devicesExtensionDescription,
		...devicesDirectoryObjectDescription,
		...devicesActionsDescription,
		...devicesUsageRightDescription,
		...devicesFunctionsDescription,
		...directoryDirectoryDescription,
		...directoryAdministrativeUnitDescription,
		...directoryActionsDescription,
		...directoryFunctionsDescription,
		...directoryAttributeSetDescription,
		...directoryCustomSecurityAttributeDefinitionDescription,
		...directoryDirectoryObjectDescription,
		...directoryIdentityProviderBaseDescription,
		...directoryImpactedResourceDescription,
		...directoryInboundSharedUserProfileDescription,
		...directoryOnPremisesDirectorySynchronizationDescription,
		...directoryOutboundSharedUserProfileDescription,
		...directoryRecommendationDescription,
		...directorySharedEmailDomainDescription,
		...directoryObjectsDirectoryObjectDescription,
		...directoryObjectsActionsDescription,
		...directoryRolesDirectoryRoleDescription,
		...directoryRolesDirectoryObjectDescription,
		...directoryRolesActionsDescription,
		...directoryRolesScopedRoleMembershipDescription,
		...directoryRolesFunctionsDescription,
		...directoryRoleTemplatesDirectoryRoleTemplateDescription,
		...directoryRoleTemplatesActionsDescription,
		...directorySettingTemplatesDirectorySettingTemplateDescription,
		...directorySettingTemplatesActionsDescription,
		...domainDnsRecordsDomainDnsRecordDescription,
		...domainsDomainDescription,
		...domainsDirectoryObjectDescription,
		...domainsInternalDomainFederationDescription,
		...domainsActionsDescription,
		...domainsDomainDnsRecordDescription,
		...domainsSharedEmailDomainInvitationDescription,
		...drivesDriveDescription,
		...drivesItemActivityOldDescription,
		...drivesDriveItemDescription,
		...drivesActionsDescription,
		...drivesFunctionsDescription,
		...drivesListDescription,
		...educationEducationRootDescription,
		...educationEducationClassDescription,
		...educationFunctionsDescription,
		...educationActionsDescription,
		...educationEducationUserDescription,
		...educationEducationSchoolDescription,
		...educationEducationSynchronizationProfileDescription,
		...employeeExperienceEmployeeExperienceDescription,
		...employeeExperienceLearningProviderDescription,
		...externalExternalDescription,
		...externalExternalConnectionDescription,
		...externalActionsDescription,
		...filterOperatorsFilterOperatorSchemaDescription,
		...financialsFinancialsDescription,
		...financialsCompanyDescription,
		...financialsActionsDescription,
		...functionsAttributeMappingFunctionSchemaDescription,
		...governanceResourcesGovernanceResourceDescription,
		...governanceResourcesGovernanceRoleAssignmentRequestDescription,
		...governanceResourcesActionsDescription,
		...governanceResourcesGovernanceRoleAssignmentDescription,
		...governanceResourcesFunctionsDescription,
		...governanceResourcesGovernanceRoleDefinitionDescription,
		...governanceResourcesGovernanceRoleSettingDescription,
		...governanceRoleAssignmentRequestsGovernanceRoleAssignmentRequestDescription,
		...governanceRoleAssignmentRequestsActionsDescription,
		...governanceRoleAssignmentRequestsGovernanceResourceDescription,
		...governanceRoleAssignmentRequestsGovernanceRoleDefinitionDescription,
		...governanceRoleAssignmentRequestsGovernanceSubjectDescription,
		...governanceRoleAssignmentsGovernanceRoleAssignmentDescription,
		...governanceRoleAssignmentsGovernanceResourceDescription,
		...governanceRoleAssignmentsGovernanceRoleDefinitionDescription,
		...governanceRoleAssignmentsGovernanceSubjectDescription,
		...governanceRoleAssignmentsFunctionsDescription,
		...governanceRoleDefinitionsGovernanceRoleDefinitionDescription,
		...governanceRoleDefinitionsGovernanceResourceDescription,
		...governanceRoleDefinitionsGovernanceRoleSettingDescription,
		...governanceRoleSettingsGovernanceRoleSettingDescription,
		...governanceRoleSettingsGovernanceResourceDescription,
		...governanceRoleSettingsGovernanceRoleDefinitionDescription,
		...governanceSubjectsGovernanceSubjectDescription,
		...groupLifecyclePoliciesGroupLifecyclePolicyDescription,
		...groupLifecyclePoliciesActionsDescription,
		...groupsGroupDescription,
		...groupsDirectoryObjectDescription,
		...groupsAppRoleAssignmentDescription,
		...groupsCalendarDescription,
		...groupsActionsDescription,
		...groupsFunctionsDescription,
		...groupsEventDescription,
		...groupsConversationDescription,
		...groupsDriveDescription,
		...groupsEndpointDescription,
		...groupsExtensionDescription,
		...groupsGroupLifecyclePolicyDescription,
		...groupsOnenoteDescription,
		...groupsResourceSpecificPermissionGrantDescription,
		...groupsProfilePhotoDescription,
		...groupsPlannerGroupDescription,
		...groupsDirectorySettingDescription,
		...groupsSiteDescription,
		...groupsTeamDescription,
		...groupsConversationThreadDescription,
		...identityIdentityContainerDescription,
		...identityIdentityApiConnectorDescription,
		...identityActionsDescription,
		...identityAuthenticationEventListenerDescription,
		...identityB2CIdentityUserFlowDescription,
		...identityFunctionsDescription,
		...identityB2XIdentityUserFlowDescription,
		...identityConditionalAccessRootDescription,
		...identityContinuousAccessEvaluationPolicyDescription,
		...identityCustomAuthenticationExtensionDescription,
		...identityIdentityProviderBaseDescription,
		...identityIdentityUserFlowAttributeDescription,
		...identityGovernanceIdentityGovernanceDescription,
		...identityGovernanceAccessReviewSetDescription,
		...identityGovernanceFunctionsDescription,
		...identityGovernanceActionsDescription,
		...identityGovernanceAppConsentApprovalRouteDescription,
		...identityGovernanceEntitlementManagementDescription,
		...identityGovernanceLifecycleWorkflowsContainerDescription,
		...identityGovernancePrivilegedAccessRootDescription,
		...identityGovernanceTermsOfUseContainerDescription,
		...identityProtectionIdentityProtectionRootDescription,
		...identityProtectionRiskDetectionDescription,
		...identityProtectionRiskyServicePrincipalDescription,
		...identityProtectionActionsDescription,
		...identityProtectionRiskyUserDescription,
		...identityProtectionServicePrincipalRiskDetectionDescription,
		...informationProtectionInformationProtectionDescription,
		...informationProtectionBitlockerDescription,
		...informationProtectionDataLossPreventionPolicyDescription,
		...informationProtectionActionsDescription,
		...informationProtectionSensitivityLabelDescription,
		...informationProtectionSensitivityPolicySettingsDescription,
		...informationProtectionThreatAssessmentRequestDescription,
		...invitationsInvitationDescription,
		...invitationsUserDescription,
		...meUserDescription,
		...meUserActivityDescription,
		...meFunctionsDescription,
		...meAgreementAcceptanceDescription,
		...meUserAnalyticsDescription,
		...meAppConsentRequestDescription,
		...meServicePrincipalDescription,
		...meAppRoleAssignmentDescription,
		...meApprovalDescription,
		...meAuthenticationDescription,
		...meActionsDescription,
		...meCalendarDescription,
		...meCalendarGroupDescription,
		...meEventDescription,
		...meChatDescription,
		...meCloudPcDescription,
		...meContactFolderDescription,
		...meContactDescription,
		...meDirectoryObjectDescription,
		...meDeviceEnrollmentConfigurationDescription,
		...meDeviceManagementTroubleshootingEventDescription,
		...meDeviceDescription,
		...meDriveDescription,
		...meExtensionDescription,
		...meSiteDescription,
		...meInferenceClassificationDescription,
		...meInformationProtectionDescription,
		...meItemInsightsDescription,
		...meGroupDescription,
		...meTeamDescription,
		...meLicenseDetailsDescription,
		...meMailFolderDescription,
		...meManagedAppRegistrationDescription,
		...meManagedDeviceDescription,
		...meMessageDescription,
		...meMobileAppIntentAndStateDescription,
		...meMobileAppTroubleshootingEventDescription,
		...meNotificationDescription,
		...meOAuth2PermissionGrantDescription,
		...meOnenoteDescription,
		...meOnlineMeetingDescription,
		...meOutlookUserDescription,
		...meAccessReviewInstanceDescription,
		...mePersonDescription,
		...meProfilePhotoDescription,
		...mePlannerUserDescription,
		...mePresenceDescription,
		...meProfileDescription,
		...meScopedRoleMembershipDescription,
		...meSecurityDescription,
		...meUserSettingsDescription,
		...meUserTeamworkDescription,
		...meTodoDescription,
		...meUsageRightDescription,
		...meWindowsInformationProtectionDeviceRegistrationDescription,
		...messageEventsMessageEventDescription,
		...messageRecipientsMessageRecipientDescription,
		...messageRecipientsMessageEventDescription,
		...messageTracesMessageTraceDescription,
		...messageTracesMessageRecipientDescription,
		...mobilityManagementPoliciesMobilityManagementPolicyDescription,
		...mobilityManagementPoliciesGroupDescription,
		...monitoringMonitoringDescription,
		...monitoringAlertRecordDescription,
		...monitoringActionsDescription,
		...monitoringFunctionsDescription,
		...monitoringAlertRuleDescription,
		...oauth2PermissionGrantsOAuth2PermissionGrantDescription,
		...oauth2PermissionGrantsFunctionsDescription,
		...officeConfigurationOfficeConfigurationDescription,
		...officeConfigurationOfficeClientConfigurationDescription,
		...officeConfigurationActionsDescription,
		...onPremisesPublishingProfilesOnPremisesPublishingProfileDescription,
		...onPremisesPublishingProfilesOnPremisesAgentGroupDescription,
		...onPremisesPublishingProfilesOnPremisesAgentDescription,
		...onPremisesPublishingProfilesConnectorGroupDescription,
		...onPremisesPublishingProfilesConnectorDescription,
		...onPremisesPublishingProfilesPublishedResourceDescription,
		...organizationOrganizationDescription,
		...organizationOrganizationalBrandingDescription,
		...organizationCertificateBasedAuthConfigurationDescription,
		...organizationExtensionDescription,
		...organizationActionsDescription,
		...organizationOrganizationSettingsDescription,
		...payloadResponsePayloadResponseDescription,
		...permissionGrantsResourceSpecificPermissionGrantDescription,
		...permissionGrantsActionsDescription,
		...placesPlaceDescription,
		...placeRoomDescription,
		...plannerPlannerDescription,
		...plannerPlannerBucketDescription,
		...plannerPlannerPlanDescription,
		...plannerPlannerRosterDescription,
		...plannerPlannerTaskDescription,
		...policiesPolicyRootDescription,
		...policiesAccessReviewPolicyDescription,
		...policiesActivityBasedTimeoutPolicyDescription,
		...policiesAdminConsentRequestPolicyDescription,
		...policiesAppManagementPolicyDescription,
		...policiesAuthenticationFlowsPolicyDescription,
		...policiesAuthenticationMethodsPolicyDescription,
		...policiesAuthenticationStrengthPolicyDescription,
		...policiesActionsDescription,
		...policiesFunctionsDescription,
		...policiesAuthorizationPolicyDescription,
		...policiesB2CAuthenticationMethodsPolicyDescription,
		...policiesClaimsMappingPolicyDescription,
		...policiesConditionalAccessPolicyDescription,
		...policiesCrossTenantAccessPolicyDescription,
		...policiesTenantAppManagementPolicyDescription,
		...policiesDeviceRegistrationPolicyDescription,
		...policiesDirectoryRoleAccessReviewPolicyDescription,
		...policiesExternalIdentitiesPolicyDescription,
		...policiesFeatureRolloutPolicyDescription,
		...policiesHomeRealmDiscoveryPolicyDescription,
		...policiesIdentitySecurityDefaultsEnforcementPolicyDescription,
		...policiesMobilityManagementPolicyDescription,
		...policiesPermissionGrantPolicyDescription,
		...policiesUnifiedRoleManagementPolicyDescription,
		...policiesUnifiedRoleManagementPolicyAssignmentDescription,
		...policiesServicePrincipalCreationPolicyDescription,
		...policiesTokenIssuancePolicyDescription,
		...policiesTokenLifetimePolicyDescription,
		...printPrintDescription,
		...printPrintConnectorDescription,
		...printPrintOperationDescription,
		...printPrinterDescription,
		...printFunctionsDescription,
		...printActionsDescription,
		...printPrinterShareDescription,
		...printReportRootDescription,
		...printPrintServiceDescription,
		...printPrintTaskDefinitionDescription,
		...privacyPrivacyDescription,
		...privilegedAccessPrivilegedAccessDescription,
		...privilegedAccessGovernanceResourceDescription,
		...privilegedAccessActionsDescription,
		...privilegedAccessFunctionsDescription,
		...privilegedAccessGovernanceRoleAssignmentRequestDescription,
		...privilegedAccessGovernanceRoleAssignmentDescription,
		...privilegedAccessGovernanceRoleDefinitionDescription,
		...privilegedAccessGovernanceRoleSettingDescription,
		...privilegedApprovalPrivilegedApprovalDescription,
		...privilegedApprovalPrivilegedRoleAssignmentRequestDescription,
		...privilegedApprovalPrivilegedRoleDescription,
		...privilegedApprovalActionsDescription,
		...privilegedApprovalFunctionsDescription,
		...privilegedOperationEventsPrivilegedOperationEventDescription,
		...privilegedRoleAssignmentRequestsPrivilegedRoleAssignmentRequestDescription,
		...privilegedRoleAssignmentRequestsActionsDescription,
		...privilegedRoleAssignmentRequestsPrivilegedRoleDescription,
		...privilegedRoleAssignmentRequestsFunctionsDescription,
		...privilegedRoleAssignmentsPrivilegedRoleAssignmentDescription,
		...privilegedRoleAssignmentsActionsDescription,
		...privilegedRoleAssignmentsPrivilegedRoleDescription,
		...privilegedRoleAssignmentsFunctionsDescription,
		...privilegedRolesPrivilegedRoleDescription,
		...privilegedRolesPrivilegedRoleAssignmentDescription,
		...privilegedRolesActionsDescription,
		...privilegedRolesPrivilegedRoleSettingsDescription,
		...privilegedRolesPrivilegedRoleSummaryDescription,
		...privilegedSignupStatusPrivilegedSignupStatusDescription,
		...privilegedSignupStatusFunctionsDescription,
		...privilegedSignupStatusActionsDescription,
		...programControlsProgramControlDescription,
		...programControlsProgramDescription,
		...programControlTypesProgramControlTypeDescription,
		...programsProgramDescription,
		...programsProgramControlDescription,
		...reportsReportRootDescription,
		...reportsApplicationSignInDetailedSummaryDescription,
		...reportsAuthenticationMethodsRootDescription,
		...reportsFunctionsDescription,
		...reportsCredentialUserRegistrationDetailsDescription,
		...reportsPrintUsageDescription,
		...reportsPrintUsageByPrinterDescription,
		...reportsPrintUsageByUserDescription,
		...reportsSecurityReportsRootDescription,
		...reportsUserCredentialUsageDetailsDescription,
		...riskDetectionsRiskDetectionDescription,
		...riskyUsersRiskyUserDescription,
		...riskyUsersRiskyUserHistoryItemDescription,
		...riskyUsersActionsDescription,
		...roleManagementRoleManagementDescription,
		...roleManagementRbacApplicationMultipleDescription,
		...roleManagementActionsDescription,
		...roleManagementFunctionsDescription,
		...roleManagementRbacApplicationDescription,
		...roleManagementUnifiedRbacApplicationDescription,
		...schemaExtensionsSchemaExtensionDescription,
		...scopedRoleMembershipsScopedRoleMembershipDescription,
		...searchSearchEntityDescription,
		...searchAcronymDescription,
		...searchBookmarkDescription,
		...searchActionsDescription,
		...searchQnaDescription,
		...securitySecurityDescription,
		...securityAlertDescription,
		...securityActionsDescription,
		...securityAttackSimulationRootDescription,
		...securityCasesRootDescription,
		...securityFunctionsDescription,
		...securityCloudAppSecurityProfileDescription,
		...securityDomainSecurityProfileDescription,
		...securityFileSecurityProfileDescription,
		...securityHostSecurityProfileDescription,
		...securityIncidentDescription,
		...securityInformationProtectionDescription,
		...securityIpSecurityProfileDescription,
		...securityLabelsRootDescription,
		...securityProviderTenantSettingDescription,
		...securitySecureScoreControlProfileDescription,
		...securitySecureScoreDescription,
		...securitySecurityActionDescription,
		...securitySubjectRightsRequestDescription,
		...securityThreatSubmissionRootDescription,
		...securityTiIndicatorDescription,
		...securityTriggersRootDescription,
		...securityTriggerTypesRootDescription,
		...securityUserSecurityProfileDescription,
		...servicePrincipalsServicePrincipalDescription,
		...servicePrincipalsAppManagementPolicyDescription,
		...servicePrincipalsAppRoleAssignmentDescription,
		...servicePrincipalsClaimsMappingPolicyDescription,
		...servicePrincipalsDirectoryObjectDescription,
		...servicePrincipalsDelegatedPermissionClassificationDescription,
		...servicePrincipalsEndpointDescription,
		...servicePrincipalsFederatedIdentityCredentialDescription,
		...servicePrincipalsHomeRealmDiscoveryPolicyDescription,
		...servicePrincipalsLicenseDetailsDescription,
		...servicePrincipalsActionsDescription,
		...servicePrincipalsOAuth2PermissionGrantDescription,
		...servicePrincipalsSynchronizationDescription,
		...servicePrincipalsFunctionsDescription,
		...servicePrincipalsTokenIssuancePolicyDescription,
		...servicePrincipalsTokenLifetimePolicyDescription,
		...settingsDirectorySettingDescription,
		...sharesSharedDriveItemDescription,
		...sharesDriveItemDescription,
		...sharesListDescription,
		...sharesActionsDescription,
		...sharesFunctionsDescription,
		...sharesListItemDescription,
		...sharesPermissionDescription,
		...sharesSiteDescription,
		...sitesSiteDescription,
		...sitesItemAnalyticsDescription,
		...sitesColumnDefinitionDescription,
		...sitesContentTypeDescription,
		...sitesActionsDescription,
		...sitesFunctionsDescription,
		...sitesDriveDescription,
		...sitesInformationProtectionDescription,
		...sitesBaseItemDescription,
		...sitesListDescription,
		...sitesOnenoteDescription,
		...sitesRichLongRunningOperationDescription,
		...sitesSitePageDescription,
		...sitesPermissionDescription,
		...sitesStoreDescription,
		...solutionsSolutionsRootDescription,
		...solutionsBusinessScenarioDescription,
		...solutionsActionsDescription,
		...storageStorageDescription,
		...subscribedSkusSubscribedSkuDescription,
		...subscriptionsSubscriptionDescription,
		...subscriptionsActionsDescription,
		...teamsTeamDescription,
		...teamsChannelDescription,
		...teamsActionsDescription,
		...teamsFunctionsDescription,
		...teamsGroupDescription,
		...teamsTeamsAppInstallationDescription,
		...teamsConversationMemberDescription,
		...teamsTeamsAsyncOperationDescription,
		...teamsUserDescription,
		...teamsResourceSpecificPermissionGrantDescription,
		...teamsProfilePhotoDescription,
		...teamsScheduleDescription,
		...teamsTeamworkTagDescription,
		...teamsTeamsTemplateDescription,
		...teamsTeamTemplateDefinitionDescription,
		...teamsTemplatesTeamsTemplateDescription,
		...teamTemplateDefinitionTeamTemplateDefinitionDescription,
		...teamTemplateDefinitionTeamDescription,
		...teamTemplateDefinitionActionsDescription,
		...teamTemplateDefinitionFunctionsDescription,
		...teamworkTeamworkDescription,
		...teamworkDeletedTeamDescription,
		...teamworkActionsDescription,
		...teamworkFunctionsDescription,
		...teamworkTeamworkDeviceDescription,
		...teamworkTeamsAppSettingsDescription,
		...teamworkTeamTemplateDescription,
		...teamworkWorkforceIntegrationDescription,
		...tenantRelationshipsTenantRelationshipDescription,
		...tenantRelationshipsDelegatedAdminCustomerDescription,
		...tenantRelationshipsDelegatedAdminRelationshipDescription,
		...tenantRelationshipsManagedTenantDescription,
		...tenantRelationshipsActionsDescription,
		...tenantRelationshipsFunctionsDescription,
		...termStoreStoreDescription,
		...termStoreGroupDescription,
		...termStoreSetDescription,
		...threatSubmissionThreatSubmissionRootDescription,
		...threatSubmissionEmailThreatSubmissionDescription,
		...threatSubmissionEmailThreatSubmissionPolicyDescription,
		...threatSubmissionFileThreatSubmissionDescription,
		...threatSubmissionUrlThreatSubmissionDescription,
		...trustFrameworkTrustFrameworkDescription,
		...trustFrameworkTrustFrameworkKeySetDescription,
		...trustFrameworkActionsDescription,
		...trustFrameworkFunctionsDescription,
		...trustFrameworkTrustFrameworkPolicyDescription,
		...usersUserDescription,
		...usersUserActivityDescription,
		...usersFunctionsDescription,
		...usersAgreementAcceptanceDescription,
		...usersUserAnalyticsDescription,
		...usersAppConsentRequestDescription,
		...usersServicePrincipalDescription,
		...usersAppRoleAssignmentDescription,
		...usersApprovalDescription,
		...usersAuthenticationDescription,
		...usersActionsDescription,
		...usersCalendarDescription,
		...usersCalendarGroupDescription,
		...usersEventDescription,
		...usersChatDescription,
		...usersCloudPcDescription,
		...usersContactFolderDescription,
		...usersContactDescription,
		...usersDirectoryObjectDescription,
		...usersDeviceEnrollmentConfigurationDescription,
		...usersDeviceManagementTroubleshootingEventDescription,
		...usersDeviceDescription,
		...usersDriveDescription,
		...usersExtensionDescription,
		...usersSiteDescription,
		...usersInferenceClassificationDescription,
		...usersInformationProtectionDescription,
		...usersItemInsightsDescription,
		...usersGroupDescription,
		...usersTeamDescription,
		...usersLicenseDetailsDescription,
		...usersMailFolderDescription,
		...usersManagedAppRegistrationDescription,
		...usersManagedDeviceDescription,
		...usersMessageDescription,
		...usersMobileAppIntentAndStateDescription,
		...usersMobileAppTroubleshootingEventDescription,
		...usersNotificationDescription,
		...usersOAuth2PermissionGrantDescription,
		...usersOnenoteDescription,
		...usersOnlineMeetingDescription,
		...usersOutlookUserDescription,
		...usersAccessReviewInstanceDescription,
		...usersPersonDescription,
		...usersProfilePhotoDescription,
		...usersPlannerUserDescription,
		...usersPresenceDescription,
		...usersProfileDescription,
		...usersScopedRoleMembershipDescription,
		...usersSecurityDescription,
		...usersUserSettingsDescription,
		...usersUserTeamworkDescription,
		...usersTodoDescription,
		...usersUsageRightDescription,
		...usersWindowsInformationProtectionDeviceRegistrationDescription,
		...defaultDescription
		],
	};
}
